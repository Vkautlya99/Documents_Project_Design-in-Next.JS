'use client'

import React, { useRef } from 'react';
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is Background color that will be displayed.",
      fileSize: ".5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download", tagColor: "green" },
    },
    {
      desc: "This is Written statement that will be displayed.",
      fileSize: ".5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload..", tagColor: "blue" },
    },
    {
      desc: "This is Background color that will be displayed.",
      fileSize: ".5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download", tagColor: "green" },
    },
    {
      desc: "This is Background color that will be displayed.",
      fileSize: ".5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download", tagColor: "blue" },
    },

  ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card key={index} data={item} dragConstraints={ref} />
      ))}
    </div>
  );
};

export default Foreground;
