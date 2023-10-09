"use client";

import { useState } from "react";
import ChatForm from "../ChatForm/page";

export default function ChatBtm() {
  const [openChatForm, setOpenChatForm] = useState(false);
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4">
      <button
        onClick={() => {
          setOpenChatForm(true);
        }}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
        Chat with Us
      </button>
      {openChatForm && <ChatForm setShow={setOpenChatForm}></ChatForm>}
    </div>
  );
}
