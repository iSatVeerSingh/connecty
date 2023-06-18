'use client';

import ChatBox from "@/components/Conversations/ChatBox";
import ConversationPanelHeader from "@/components/Conversations/ConversationPanelHeader";
import MessageInputBox from "@/components/Conversations/MessageInputBox";

const ConversationPanel = () => {
  return (
    <div className="grid grid-rows-[65px_auto_70px] h-screen">
      <ConversationPanelHeader />
      <ChatBox />
      <MessageInputBox />
    </div>
  )
};

export default ConversationPanel;