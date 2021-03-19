import React, { useEffect, useState } from "react";

export function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  useEffect(() => {
    setCount(parseInt(initial));
    return;
  }, [initial]);

  const addHandle = () => {
    setCount(count + 1);
  };

  const removeHandle = () => {
    setCount(count - 1);
  };

  return (
    <div className="">
      <div className="box-content h-40 w-10   shadow-2xl rounded-lg border-4 m-4hover:border-8 ">
        <button
          disabled={count <= 0}
          className=" cursor-pointer  p-4  w-full border-t-2 border-r-2 border-white bg-green-800 text-center text-white transform hover:scale-105 "
          type="button"
          onClick={removeHandle}
        >
          -
        </button>
        <div className="text-4xl text-center">{count}</div>
        <button
          disabled={count >= stock}
          className=" cursor-pointer  p-4  w-full border-t-2 border-r-2 border-white bg-green-800 text-center text-white transform hover:scale-105 "
          type="button"
          onClick={addHandle}
        >
          +
        </button>
      </div>
      <button
        className="box-content h-5 w-40 cursor-pointer  p-4 border-t-2 border-r-2 border-white bg-blue-800 text-center text-white transform hover:scale-105"
        type="button"
        onClick={onAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
