import React from 'react';
import { useImage } from 'react-image';

export default function Image({ icon }) {
  console.log(icon)
  const { src } = useImage({
    srcList: `../public/img/conditions/${icon}.png`,
  });

  return <img src={src} alt='condition'/>;
}
