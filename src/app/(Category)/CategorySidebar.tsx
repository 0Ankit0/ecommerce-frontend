"use client";
import { use, useState } from "react";
import HoverOptions from "./HoverOptions";

export default function CategoryCard() {
  const [openOnHover, setOpenOnHover] = useState(false);
  const [valueToSend, setValueToSend] = useState<string[]>([]);

  return (
    <ul className="bg-white relative border border-slate-400/70 py-4 md:w-[300px] sm:min-w-[230px] shadow-md rounded-lg leading-8 text-slate-800/60">
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Clothing", "Traditional Clothing", "Women's Bag"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
          setValueToSend([]);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40 "
      >
        Women's Fashion
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Bath & Body", "Beauty Tools"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40 "
      >
        Health &amp; Beauty
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Clothing", "Shoes"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40"
      >
        Men's Fashion
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Men's Watches"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40"
      >
        Watches &amp; Accessories
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["SmartPhones", "Feature Phones"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40"
      >
        Electronic Devices
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Televisions", "Tv Accessories"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40"
      >
        TV &amp; Home Appliances
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Audio", "Wearables"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40"
      >
        Electronic Accessories
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Grocessories", "Bevarages"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40"
      >
        Groceries &amp; Pets
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Baby Gear", "Feeding"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40"
      >
        Babies &amp; Toys
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Bath", "Bedding"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40"
      >
        Home &amp; Lifestyle
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Water Sports", "Racket Sports"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40"
      >
        Sports &amp; Outdoor
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li
        onMouseOver={() => {
          setOpenOnHover(true);
          setValueToSend(["Automotives", "Motorcycles"]);
        }}
        onMouseLeave={() => {
          setOpenOnHover(false);
        }}
        className="group pl-4 hover:text-orange-500 hover:bg-slate-200/40"
      >
        Motors, Tools &amp; DIY
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="float-right mt-2 w-8 h-5 group-hover:inline-block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      {openOnHover && <HoverOptions options={valueToSend}></HoverOptions>}
    </ul>
  );
}
