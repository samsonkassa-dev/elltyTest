"use client"

import { useState } from 'react';
import Image from 'next/image'; 

const CheckboxInput = ({ id, label }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <label htmlFor={id} className="text-gray-900 text-sm font-normal">
        {label}
      </label>
      <div
        className={`relative w-6 h-6 border ${
          isChecked
            ? "bg-blue-500 border-blue-500"
            : isHovered
            ? "border-gray-600"
            : "border-gray-300"
        } rounded-md inline-block`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          defaultChecked={isChecked}
          onClick={handleClick}
          id={id}
          type="checkbox"
          className="hidden"
        />
        <label htmlFor={id} className="cursor-pointer">
          {(isChecked || isHovered) && (
            <div className="absolute top-0 left-0 w-[90%] h-full">
              <Image
              className='text-white'
                src="/Vector141.png"
                alt="Checkmark"
                layout="fill"
                objectFit="contain"
              />{" "}
           
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default CheckboxInput;