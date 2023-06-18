'use client';

interface MessageProps {
  type: 'incoming' | 'outgoing';
}

const Message = ({ type }: MessageProps) => {
  return (
    <div
      className={`max-w-[400px] p-2 rounded-md relative pb-4 ${
        type === 'outgoing'
          ? 'bg-iceburg-blue text-white self-end'
          : 'bg-mid-gray text-rich-black self-start'
      }`}
    >
      <p className="w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        facilis vel veritatis iusto nesciunt perspiciatis, ducimus in fuga earum
        explicabo ab, obcaecati ipsum a hic minima accusamus. Incidunt,
        repudiandae ratione.
      </p>
      <span className={`text-sm absolute right-2 bottom-0 ${type === "outgoing" ? "text-gray-200" : "text-navi-gray"}`}>13:23</span>
    </div>
  );
};

export default Message;
