'use client';

import {FiSend} from 'react-icons/fi'

const MessageInputBox = () => {
  return (
    <div className=" px-3 py-2 grid items-center">
      <div className="bg-light-gray border px-4 py-2 rounded-full flex items-center gap-2">
        <input type="text" className="w-full bg-transparent h-8  flex-grow border-black outline-none" name="message" id="message" placeholder="Type message here..." />
        <FiSend size="25px"  />
      </div>
    </div>
  )
};

export default MessageInputBox;