import Header from '@/components/layouts/Header';
import { MessageProvider } from '@/context/MessageContext';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MessageProvider>
      <Header />
      <div className="flex flex-col h-full w-full ">{children}</div>
    </MessageProvider>
  );
}
