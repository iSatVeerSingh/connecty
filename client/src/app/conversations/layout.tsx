import Sidebar from "@/components/Conversations/Sidebar";
import React, { FC } from "react";

interface ConversationsLayoutProps {
  children: React.ReactNode
}

const ConversationsLayout:FC<ConversationsLayoutProps> = ({children}) => {
  return (
    <div className="h-screen grid grid-cols-[400px_auto] overflow-hidden">
      <Sidebar />
      {children}
    </div>
  )
};

export default ConversationsLayout;