import React from "react";


function Searches({ image, name, desc, id, types }) {


  return (
    <div

      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-[#808080] text-sm">{types}</p>
    </div>
  );
}

export default Searches;
