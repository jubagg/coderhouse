import React from 'react';

export const Item = ({ item }) => {
  return (
    <div className="box-border w-60 p-4 border-2 border-green-300 m-4 transition duration-500 transform hover:scale-105 hover:bg-gray-200" >
      <img src={item.pictureUrl} alt="" />
      <div className="">
        <h5 className="text-3xl text-gray-800 font-bold">{item.title}</h5>
        <div className="price  text-gray-800">${item.price}</div>
      </div>
    </div>
  );
};
