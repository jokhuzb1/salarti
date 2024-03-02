/* eslint-disable react/prop-types */
"use client";
import { Button } from "flowbite-react";

export default function SingleProduct({ image, title, price }) {
  return (
    <div className="my-10">
      <img
        src={image}
        alt="item image"
        className="object-cover min-h-[160px] min-w-[200px] max-h-[350px] rounded-3xl shadow-md"
      />
      <h3 className="  text-3xl mt-3">{title}</h3>
      <span className="flex justify-between items-center">
        <p className="text-xl text-primary">{price}</p>
      </span>
    </div>
  );
}
