import { useConversation } from '@11labs/react';
import { useCallback, useState, useEffect } from 'react';
import { PhoneIcon, PhoneXMarkIcon } from '@heroicons/react/24/solid';

const AGENT_ID = 'soblHdsUBU9PQu1VwrTT';

export default function AIConversation() {
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ text: string; fromAI: boolean }>>([]);
  const [audioLevel, setAudioLevel] = useState(0);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  const conversation = useConversation({
    onConnect: () => {},
    onDisconnect: () => {
      setMessages([]);
      setAudioLevel(0);
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

      newAnalyser.fftSize = 256;
      source.connect(newAnalyser);
      setAnalyser(newAnalyser);

      await conversation.startSession({
        agentId: AGENT_ID,
      });
    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
    if (analyser) {
      analyser.disconnect();
      setAnalyser(null);
    }
  }, [conversation, analyser]);

  // Audio level monitoring
  useEffect(() => {
    if (!analyser || conversation.isSpeaking) {
      return;
    }

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const updateAudioLevel = () => {
      analyser.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
      const normalizedLevel = Math.min(average / 128, 1); // Normalize to 0-1
      setAudioLevel(normalizedLevel);
    };

    const intervalId = setInterval(updateAudioLevel, 50);
    return () => clearInterval(intervalId);
  }, [analyser, conversation.isSpeaking]);

  const isConnected = conversation.status === 'connected';

  // Calculate dynamic styles based on audio level and conversation state
  const getBorderStyles = () => {
    if (!isConnected) {
      return {};
    }

    if (conversation.isSpeaking) {
      // AI Speaking - Keep the same enhanced purple glow
      return {
        boxShadow: `
          inset 0 0 30px rgba(168, 85, 247, 0.5),
          inset 0 0 20px rgba(168, 85, 247, 0.4),
          inset 0 0 10px rgba(168, 85, 247, 0.3)
        `,
        border: '2px solid rgba(168, 85, 247, 0.6)',
      };
    } else {
      const borderWidth = Math.max(2, Math.min(6, 2 + (audioLevel * 4)));
      const innerGlow = Math.max(20, Math.min(60, 40 + (audioLevel * 40)));
      const middleGlow = Math.max(15, Math.min(45, 30 + (audioLevel * 30)));
      const outerGlow = Math.max(10, Math.min(30, 20 + (audioLevel * 20)));
      const opacity = Math.max(0.5, Math.min(0.8, 0.5 + (audioLevel * 0.3)));
      
      // Apply a subtle exponential scaling to make the effect more dramatic
      const intensityScale = Math.pow(audioLevel, 1.5); // Makes changes more pronounced at higher levels
      
      return {
        boxShadow: `
          inset 0 0 ${innerGlow * intensityScale}px rgba(59, 130, 246, ${opacity}),
          inset 0 0 ${middleGlow * intensityScale}px rgba(59, 130, 246, ${opacity - 0.1}),
          inset 0 0 ${outerGlow * intensityScale}px rgba(59, 130, 246, ${opacity - 0.2})
        `,
        border: `${borderWidth}px solid rgba(59, 130, 246, ${opacity + 0.1})`,
      };
    }
  };

  return (
    <>
      {/* Glowing border container */}
      <div
        className="fixed inset-0 pointer-events-none transition-all duration-200"
        style={{
          transition: 'all 100ms ease-out',
          ...getBorderStyles(),
        }}
      />

      {/* Main content */}
      <div className="max-w-2xl mx-auto p-4">
        <div className="mb-4 space-y-2">
          {!isConnected ? (
            <button
              onClick={startConversation}
              className="bg-white text-[#111] px-4 py-2 rounded-full transition-all hover:bg-gray-200"
            >
              <PhoneIcon className="h-5 w-5 inline-block mr-2" />
              Start a call
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

              <div className="ml-4 text-sm text-gray-500">
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
