import React from 'react';
import { IAvatarProps } from '@shared/types/props';
import { avatarContainer, image } from './styles';
import Image from 'next/image';
const Avatar: React.FC<IAvatarProps> = (props) => {
  return (
    <section css={avatarContainer}>
      <Image css={image} src="/images/me.jpg" width={100} height={100} />
    </section>
  );
};

export default Avatar;
