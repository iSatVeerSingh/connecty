'use client';

import Avatar from '../Avatar/Avatar';
import { FiSearch, FiPhone, FiVideo, FiMoreVertical } from 'react-icons/fi';

const ConversationPanelHeader = () => {
  return (
    <div className='flex border-b-2 shadow-sm px-3 py-2 gap-2'>
      <Avatar src='/images/img1.jpg' alt='he' />
      <div className='flex-grow'>
        <h3 className='text-xl text-rich-black font-medium'>Jessica Drew</h3>
        <p className='text-navi-gray leading-none'>Last seen 5 min ago</p>
      </div>
      <div className='flex items-center gap-3 text-navi-gray'>
        <button>
          <FiSearch size='25' />
        </button>
        <button>
          <FiPhone size='25' />
        </button>
        <button>
          <FiVideo size='25' />
        </button>
        <button>
          <FiMoreVertical size='25' />
        </button>
      </div>
    </div>
  );
};

export default ConversationPanelHeader;
