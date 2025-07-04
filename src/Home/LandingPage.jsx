

function LandingPage() {
  return (
    <div className="px-10 h-screen flex-col items-center pt-[200px] sm:py-10 text-left ">
      <p className="text-[7.5pt] sm:text-[14pt] text-gray-500 leading-tight font-mono ort">
        <i>Hey, My name is</i>{" "}
      </p>
      <p className="text-3xl sm:text-[50pt] text-gray-300 leading-tight font-sans font-bold">
        JAYESH SAMLU
      </p>
      <p className="text-[12.5pt] sm:text-[50pt] text-gray-500 leading-tight font-mono font-bold">
        I BUILD WEB THINGS
      </p>
      <p className="text-[7.5pt] sm:text-[14pt] text-left text-gray-500 font-mono text-wrap mt-2">
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
