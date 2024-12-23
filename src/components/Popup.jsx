import React from "react";
// import { motion } from "framer-motion";
const Popup = ({ image, name, text, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center  justify-center  bg-gray-800 bg-opacity-75 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 overflow-x-scroll rounded-lg shadow-lg h-[90%] w-[900px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl">
          &times;
        </button>

        <div className="flex gap-20 text-gray-800">
          {/* Text Section */}
          <div className="w-full pl-4">
            {/* Blog Title */}
            <h1 className="text-3xl flex justify-center   mb-1">
              {text.title}
            </h1>

            {/* First Section (with Heading, Content, and Image) */}
            <div>
              <p className="text-lg  mb-4">{text.intro}</p>
              <h2 className="text-xl    mb-2">{text.sections[0].heading}</h2>
              {text.sections[0].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
