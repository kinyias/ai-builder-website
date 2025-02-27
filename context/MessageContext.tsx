'use client';
import { createContext, useState, ReactNode } from 'react';

// Define message structure
export interface MessageType {
  role: 'user' | 'ai';
  message: string;
}

// Define the context type
interface MessageContextType {
  messages: MessageType[];
  setMessages: (newMessage: MessageType | ((prev: MessageType[]) => MessageType[])) => void;
}

// Create context
export const MessageContext = createContext<MessageContextType | undefined>(undefined);

// Provider component
export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessagesState] = useState<MessageType[]>([]);

  // Function to update messages
  const setMessages = (newMessage: MessageType | ((prev: MessageType[]) => MessageType[])) => {
    setMessagesState((prev) => 
      typeof newMessage === 'function' ? newMessage(prev) : [newMessage]
    );
  };

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};
