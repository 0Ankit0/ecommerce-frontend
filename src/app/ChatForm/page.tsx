type openType = {
  setShow: (val: boolean) => void;
};

export default function ChatForm({ setShow }: openType) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex  items-center z-10">
      <button onClick={() => setShow(false)} className="fixed top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="w-full">
        <div className="bg-white md:max-w-2xl md:mx-auto  md:overflow-hidden md:rounded-lg">
          <h2 className="py-4 text-center border-b">Chat with us</h2>
          <div id="chatbox" className="p-4 h-80 overflow-y-auto">
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                hello
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                this example of chat
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                design with tailwind
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
          </div>
          <div className="p-4 border-t flex">
            <input
              id="user-input"
              type="text"
              placeholder="Type a message"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              id="send-button"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
