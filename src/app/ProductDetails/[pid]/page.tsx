"use client";

import { useContext } from "react";
import { ProductContext } from "@/app/Components/ProductContext";
import { useState } from "react";

function Products({ params }: { params: { pid: string } }) {
  const index = Number(params.pid) - 1;

  const cards = useContext(ProductContext);
  const [img, setimg] = useState<string>(cards[index].img);

  return (
    <>
      <div className="container flex gap-8 my-8">
        <div>
          <img
            src={img}
            alt=""
            className="h-[480px] w-[680px] ml-5 inline-block rounded-md object-cover"
          />

          <div className="w-full flex mt-5 border-l-gray-900">
            {cards.map((card, index) => (
              <img
                onClick={() => setimg(card.img)}
                src={card.img}
                alt=""
                className="h-[80px] w-[120px] ml-5 inline-block rounded-md object-cover"
                key={index}
              />
            ))}
          </div>
        </div>
        <div>
          <span className="font-bold text-[3rem]">{cards[index].title}</span>
          <p>{cards[index].description}</p>
          <h2>Colors</h2>
          <ul className="list-none flex gap-5 text-white">
            <li className=" outline-blue-700 outline outline-offset-4 bg-blue-700 rounded-full p-3 my-4">
              Blue
            </li>
            <li className=" outline-red-500 outline outline-offset-4 bg-red-500 rounded-full p-3 my-4">
              Red
            </li>
            <li className="bg-yellow-400 outline outline-offset-4 bg-yellow outline-yellow-400 rounded-full p-3 my-4">
              Yellow
            </li>
          </ul>
          <div className="flex gap-3 mt-6 text-white">
            <button className="bg-blue-500 px-5 py-2">Buy Now</button>
            <button className="bg-orange-500 px-5 py-2">Add to Card</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
