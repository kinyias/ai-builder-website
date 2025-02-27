import ChatView from '@/components/chat/ChatView';
import CodeView from '@/components/chat/CodeView';

import React from 'react';

export default async function ChatPage() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ChatView />
        <div className="col-span-2">
          <CodeView />
        </div>
      </div>
    </div>
  );
}
