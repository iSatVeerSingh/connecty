'use client';

import Avatar from '../Avatar/Avatar';

const ChatListItem = () => {
  return (
    <div className='flex gap-2 items-center p-1 hover:bg-light-gray rounded-md'>
      <Avatar src='/images/img1.jpg' alt='Profile img' />
      <div className='flex p-1 min-h-[45px] justify-between flex-grow'>
        <div className='flex-grow'>
          <h3 className='text-xl leading-none font-medium text-rich-black'>
            Jessica Drew
          </h3>
          <p className='text-navi-gray'>ok, I see you later</p>
        </div>
        <div className='flex flex-col min-w-[50px] items-end justify-between py-1'>
          <span className='text-navi-gray text-sm leading-none'>18:16</span>
          <span className='leading-none bg-light-green text-white text-sm p-1 rounded-full min-w-[17px] h-5 text-center'>
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
