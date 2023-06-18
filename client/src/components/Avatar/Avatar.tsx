'use client';

import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

const Avatar = ({src, alt, className}: AvatarProps) => {
  return (
    <div className="w-12 h-12 relative rounded-full overflow-hidden">
      <Image src={src} alt={alt} className="w-12 h-12" fill />
    </div>
  )
};

export default Avatar;