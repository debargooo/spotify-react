import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Artists = ({ image, name, desc, id, types }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artists/${id}`);
  };

  return (
    <div onClick={handleClick} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded-full' src={image} alt={name} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
      <p className='text-[#808080] text-sm'>{types}</p>
    </div>
  );
};

export default Artists;
