import { useConversation } from '@11labs/react';
import { useCallback, useState } from 'react';
import { PhoneIcon, PhoneXMarkIcon } from '@heroicons/react/24/solid';

const AGENT_ID = 'soblHdsUBU9PQu1VwrTT';

export default function AIConversation() {
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ text: string; fromAI: boolean }>>([]);

  const conversation = useConversation({
    onConnect: () => {},
    onDisconnect: () => {
      setMessages([]);
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
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: AGENT_ID,
      });
    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const isConnected = conversation.status === 'connected';

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4 space-y-2">
      {!isConnected ? (
          <button
            onClick={startConversation}
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all"
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
            
            <div className="p-4 bg-white rounded-xl shadow-lg">
              <VoiceVisualizer 
                isListening={isConnected && !conversation.isSpeaking}
                isSpeaking={conversation.isSpeaking}
              />
              <div className="mt-2 text-center text-sm text-gray-500">
                {conversation.isSpeaking ? 'Agent is speaking...' : 'Listening...'}
              </div>
            </div>
          </>
        )}
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-full mb-4">{error}</div>
      )}
    </div>
  );
}
