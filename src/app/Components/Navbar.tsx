"use client";

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  // const [open, setOpen] = useState(false);
  // return (
  //   <nav className="bg-gray-800 text-white">
  //     <div className="flex items-center font-medium justify-around relative">
  //       <div className="absolute right-4">
  //         <Link href={"/Login-signup"}>
  //           <button className="place-self-end bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
  //             Login
  //           </button>
  //         </Link>
  //       </div>
  //       <div className="z-50 p-5 md:w-auto w-full flex justify-between">
  //         <div
  //           className="text-3xl md:hidden cursor-pointer"
  //           onClick={() => setOpen(!open)}
  //         >
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             strokeWidth={1.5}
  //             stroke="currentColor"
  //             className="w-6 h-6 "
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  //             />
  //           </svg>
  //         </div>
  //       </div>
  //       <ul className="md:flex hidden uppercase items-center gap-8 ">
  //         <li>
  //           <Link
  //             href={"/"}
  //             className=" p-3 inline-block hover:bg-gray-700 m-4 rounded-md hover:text-slate-500"
  //           >
  //             Home
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             href={"/ContactUs"}
  //             className=" p-3 inline-block hover:bg-gray-700 m-4 rounded-md hover:text-slate-500"
  //           >
  //             Contact Us
  //           </Link>
  //         </li>
  //       </ul>
  //       <div className="md:block hidden"></div>

  //       <ul
  //         className={` z-10
  //             md:hidden bg-slate-100 fixed w-full top-0 overflow-y-hidden  bottom-0 py-24 pl-4
  //             duration-500 ${open ? "left-0" : "left-[-100%]"}
  //             `}
  //       >
  //         <li>
  //           <Link href={"/"} className="py-7 px-3 inline-block">
  //             Home
  //           </Link>
  //         </li>

  //         <div className="py-5"></div>
  //       </ul>
  //     </div>
  //   </nav>
  // );

  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2 bg-gray-800">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-lightBlue-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <Link
                  href={"/"}
                  className="mr-4 text-slate-200 font-bold cursor-pointer"
                >
                  Logo
                </Link>
                <button
                  className=" mr-4 text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
              >
                <ul
                  className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center transition duration-1000 ease-in-out
                "
                >
                  <li>
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/ContactUs"
                    >
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <Link href={"/Login-signup"}>
                      <button className="place-self-end bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
                        Login
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
