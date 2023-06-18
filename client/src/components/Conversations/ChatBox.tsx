'use client';

import Message from "./Message";

const ChatBox = () => {
  return (
    <div className="overflow-y-scroll h-full px-3 flex flex-col gap-2">
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />
      <Message  type="outgoing" />
      <Message  type="incoming" />


    </div>
  )
};

export default ChatBox;