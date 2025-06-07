import React from "react";

function LandingPage() {
  return (
    <div className="px-10 py-10">
      <p className="text-[14pt] text-gray-800 leading-tight font-mono ort">
        <i>Hey, My name is</i>{" "}
      </p>
      <p className="text-[50pt] text-black leading-tight font-sans font-bold">
        JAYESH SAMLU
      </p>
      <p className="text-[50pt] text-gray-800 leading-tight font-mono font-bold">
        I BUILD WEB THINGS
      </p>
      <p className="text-[14pt] text-gray-800 font-mono text-wrap w-[66%] mt-2">
        {" "}
        I'm a software developer who enjoys building cool and useful things with
        code. I love learning new stuff, solving problems, and turning ideas
        into something real on the screen. Whether it's a small project or a
        bigger challenge, I'm always up for creating things that make life a
        little easier (or just more fun).
      </p>
    </div>
  );
}

export default LandingPage;
