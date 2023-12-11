import React from "react";
import Image from "next/image";

const RenderList = ({ data, title }) => {
  return (
    <div className="w-1/2">
      {Array.isArray(data) && (
        <ul>
          <h2 className="uppercase">{title}</h2>
          {data.map((item, i) => (
            <li key={i} className="list-container">
              <div className="relative w-36 h-36 object-cover">
                <Image src={item.image} fill={true} alt="artist image" />
              </div>
              <div className="flex flex-col gap-2 w-2/3">
                <p className="text-2xl">{item.title}</p>
                <p className="text-lg">{item.artist}</p>
                <p className="text-sm text-right opacity-60">{item.released}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RenderList;
