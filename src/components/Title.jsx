import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3 md:mb-10">
      <p className="text-zinc-700 text-xl md:text-2xl">
        {text1} <span className="text-zinc-900 font-bold ">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] md:h-[3px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
