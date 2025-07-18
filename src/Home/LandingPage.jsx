import CLinks from "../CLinks/CLinks"

function LandingPage() {
  return (
    <div className="sm:flex sm:px-2 px-10 py-10">
      <div className=" pb-20 pt-10 sm:py-10 text-left ">
        <p className="text-[7.5pt] sm:pt-0 pt-[50px]  sm:text-[14pt] text-gray-500 leading-tight font-mono ort">
          <i>Hey, My name is</i>{" "}
        </p>
        <p className="text-3xl sm:text-[50pt] text-gray-300 leading-tight font-sans font-bold">
          JAYESH SAMLU
        </p>
        <p className="text-[12.5pt] sm:text-[50pt] text-gray-500 leading-tight font-mono font-bold">
          I BUILD WEB THINGS
        </p>
        <p className="w-[90%] pt-10 text-[7.5pt] sm:text-[14pt] text-left text-gray-500 font-mono text-wrap">
          {" "}
          I'm a software developer who enjoys building cool and useful things
          with code. I love learning new stuff, solving problems, and turning
          ideas into something real on the screen.
        </p>
      </div>
      <div>
          <CLinks />
      </div>
    </div>
  );
}

export default LandingPage;
