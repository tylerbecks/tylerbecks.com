import { useConversation } from '@11labs/react';
import { useCallback, useState, useEffect, useRef, useMemo } from 'react';
import { PhoneIcon, PhoneOffIcon } from 'lucide-react';
import { Button } from './ui/button';
import LinkedInCard from './cards/LinkedInCard';
import SmarkingCard from './cards/SmarkingCard';
import FuegoCard from './cards/FuegoCard';
import CalPolyCard from './cards/CalPolyCard';
import ResponsiveCardsContainer from './ResponsiveCardContainer';

const AGENT_ID = 'soblHdsUBU9PQu1VwrTT';

export default function AIConversation() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messages, setMessages] = useState<
    Array<{ text: string; fromAI: boolean }>
  >([]);
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
      setMessages((prev) => [
        ...prev,
        { text: message, fromAI: source === 'ai' },
      ]);
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
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
      const borderWidth = Math.max(2, Math.min(5, 2 + audioLevel * 2)); // Increased range
      const innerGlow = Math.max(20, Math.min(50, 20 + audioLevel * 30)); // Much larger range
      const middleGlow = Math.max(15, Math.min(30, 15 + audioLevel * 20));
      const outerGlow = Math.max(10, Math.min(15, 10 + audioLevel * 10));
      const opacity = Math.max(0.4, Math.min(0.6, 0.4 + audioLevel * 0.2)); // Higher max opacity

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

  const lastAiMessage = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].fromAI) {
        return messages[i].text;
      }
    }
    return null;
  }, [messages]);

  const cards = useMemo(() => {
    const message = lastAiMessage?.toLowerCase();
    const isLinkedInMention =
      message?.includes('linkedin') || message?.includes('recruiter');
    const isSmarkingMention =
      message?.includes('smarking') || message?.includes('parking');
    const isFuegoMention = message?.includes('fuego');
    const isCalPolyMention =
      message?.includes('cal poly') ||
      message?.includes('calpoly') ||
      message?.includes('cal-poly') ||
      message?.includes('cal poly pomona') ||
      message?.includes('california polytechnic');

    const cards = [];
    if (isFuegoMention) {
      cards.push(<FuegoCard />);
    }
    if (isLinkedInMention) {
      cards.push(<LinkedInCard />);
    }
    if (isSmarkingMention) {
      cards.push(<SmarkingCard />);
    }
    if (isCalPolyMention) {
      cards.push(<CalPolyCard />);
    }

    return cards;
  }, [lastAiMessage]);

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
      <div className="mx-auto p-4">
        <div className="gap-2 min-h-[75px] flex flex-col items-center justify-center mb-4">
          {!isConnected ? (
            <>
              <Button
                className="font-bold m-2 md:m-4 lg:m-6"
                onClick={startConversation}
                size="lg"
                variant="default"
              >
                <PhoneIcon className="h-5 w-5" />
                Call my AI assistant
              </Button>
              <div className="h-5" />
            </>
          ) : (
            <>
              <Button
                className="m-2 md:m-4 lg:m-6"
                onClick={stopConversation}
                size="lg"
                variant="destructive"
              >
                <PhoneOffIcon className="h-5 w-5" />
                End call
              </Button>

              <div className="text-sm text-gray-500 ml-2">
                {conversation.isSpeaking
                  ? 'Agent is speaking...'
                  : 'Listening...'}
              </div>
            </>
          )}
        </div>

        <div className="min-h-[250px]">
          <ResponsiveCardsContainer cards={cards} />
        </div>
      </div>
    </>
  );
}
