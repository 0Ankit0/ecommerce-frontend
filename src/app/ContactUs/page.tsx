"use client";

import React, { useEffect, useRef } from "react";
export default function ContactUs() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="mx-auto max-w-2xl px-4 md:px-8 2xl:px-16 my-16">
      <div className="md:w-full  flex-col">
        <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
          <h4 className="text-2xl 2xl:text-3xl font-bold text-heading">
            Contact Us
          </h4>
        </div>
        <form className="w-full mx-auto flex flex-col justify-center ">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
              <div className="w-full md:w-1/2 ">
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Your Name (required)
                </label>
                <input
                  id="name"
                  ref={inputRef}
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="py-2 px-4 md:px-5 w-full appearance-noneborder text-xs lg:text-sm  min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                />
              </div>
              <div className="w-full md:w-1/2  mt-2 md:mt-0">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Your Email (required)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm  min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                />
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="subject"
                className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter Your Subject"
                className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm  min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 font-semibold text-sm leading-none mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-sm focus:outline-none  bg-white border border-gray-300 focus:shadow  focus:border-heading placeholder-body"
                rows={4}
                placeholder="Write your message here"
              ></textarea>
            </div>
            <div className="relative">
              <button className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold  text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-gray-800 text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
