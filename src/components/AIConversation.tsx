import { useConversation } from '@11labs/react';
import { useCallback, useState, useEffect, useRef } from 'react';
import { PhoneIcon, PhoneXMarkIcon } from '@heroicons/react/24/solid';

const AGENT_ID = 'soblHdsUBU9PQu1VwrTT';

export default function AIConversation() {
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ text: string; fromAI: boolean }>>([]);
  const [audioLevel, setAudioLevel] = useState(0);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number>();
  const borderRef = useRef<HTMLDivElement>(null);

  const conversation = useConversation({
    onConnect: () => {},
    onDisconnect: () => {
      setMessages([]);
      setAudioLevel(0);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    },
    onMessage: ({ message, source }) => {
      setMessages((prev) => [...prev, { text: message, fromAI: source === 'ai' }]);
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
      setError(error);
    },
  });

  const startConversation = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const newAnalyser = audioContext.createAnalyser();
      
      // Smaller FFT size for more frequent updates
      newAnalyser.fftSize = 256;
      newAnalyser.smoothingTimeConstant = 0.4;
      source.connect(newAnalyser);
      analyserRef.current = newAnalyser;

      await conversation.startSession({
        agentId: AGENT_ID,
      });

      // Start the animation frame loop
      updateAudioLevel();
    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    await conversation.endSession();
    if (analyserRef.current) {
      analyserRef.current.disconnect();
      analyserRef.current = null;
    }
  }, [conversation]);

  const updateAudioLevel = useCallback(() => {
    if (!analyserRef.current || conversation.isSpeaking) {
      animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
      return;
    }

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);

    // Find the maximum frequency value instead of average
    const maxValue = Math.max(...Array.from(dataArray));
    const normalizedLevel = Math.min(maxValue / 128, 1);
    
    // Apply non-linear scaling for more dramatic effect
    const scaledLevel = Math.pow(normalizedLevel, 1.8);
    setAudioLevel(scaledLevel);

    animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
  }, [conversation.isSpeaking]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const isConnected = conversation.status === 'connected';

  const getBorderStyles = () => {
    if (!isConnected) {
      return {};
    }

    if (conversation.isSpeaking) {
      return {
        boxShadow: `
          inset 0 0 30px rgba(168, 85, 247, 0.5),
          inset 0 0 20px rgba(168, 85, 247, 0.4),
          inset 0 0 10px rgba(168, 85, 247, 0.3)
        `,
        border: '2px solid rgba(168, 85, 247, 0.6)',
      };
    } else {
      const borderWidth = Math.max(2, Math.min(5, 2 + (audioLevel * 2))); // Increased range
      const innerGlow = Math.max(20, Math.min(50, 20 + (audioLevel * 30))); // Much larger range
      const middleGlow = Math.max(15, Math.min(30, 15 + (audioLevel * 20)));
      const outerGlow = Math.max(10, Math.min(15, 10 + (audioLevel * 10)));
      const opacity = Math.max(0.4, Math.min(0.6, 0.4 + (audioLevel * 0.2))); // Higher max opacity

      return {
        boxShadow: `
          inset 0 0 ${innerGlow}px rgba(59, 130, 246, ${opacity}),
          inset 0 0 ${middleGlow}px rgba(59, 130, 246, ${opacity - 0.1}),
          inset 0 0 ${outerGlow}px rgba(59, 130, 246, ${opacity - 0.2})
        `,
        border: `${borderWidth}px solid rgba(59, 130, 246, ${opacity + 0.1})`,
      };
    }
  };

  return (
    <>
      {/* Glowing border container */}
      <div
        ref={borderRef}
        className="fixed inset-0 pointer-events-none transition-all duration-100"
        style={{
          transition: 'all 50ms ease-out', // Faster transitions
          ...getBorderStyles(),
        }}
      />

      {/* Main content */}
      <div className="max-w-2xl mx-auto p-4">
        <div className="space-y-2 min-h-[75px] flex flex-col items-start">
          {!isConnected ? (
            <button
              onClick={startConversation}
              className="bg-white text-[#111] px-4 py-2 rounded-full transition-all hover:bg-gray-200"
            >
              <PhoneIcon className="h-5 w-5 inline-block mr-2" />
              Call my AI assistant
            </button>
          ) : (
            <>
              <button
                onClick={stopConversation}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all"
              >
                <PhoneXMarkIcon className="h-5 w-5 inline-block mr-2" />
                End call
              </button>

              <div className="text-sm text-gray-500 ml-2">
                {conversation.isSpeaking ? 'Agent is speaking...' : 'Listening...'}
              </div>
            </>
          )}
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-full mb-4">{error}</div>
        )}
      </div>
    </>
  );
}
