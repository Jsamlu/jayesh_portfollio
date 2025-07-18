import ProjList from "./ProjList";

function Projects() {
  return (
    <div className=" min-h-screen sm:min-h-[70vh] px-5 sm:px-20 bg-[#030303] py-2">
      <div>
        {/* heading  */}
        <h1 className=" text-gray-400 font-sans font-extralight text-2xl text-center underline decoration-1 underline-offset-[10px]">
          My Recent Works
        </h1>
      </div>
      <div className=" py-12 sm:py-10 sm:px-20 mx-auto grid sm:grid-cols-3 gap-x-5 gap-y-10 ">
        {/* project display */}
        {ProjList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-y-5 rounded-2xl px-5 py-5 min-h-[250px] bg-gradient-to-b from-gray-800 to-gray-600"
              onClick={""}
            >
              <p className="text-left text-[20pt] font-mono text-white">
                {item.title}
              </p>
              <p className="text-[11pt] text-left font-sans text-gray-400"> {item.desc}</p>
              <div className="flex gap-5">
                <button className="px-3 py-1 bg-gradient-to-br from-gray-300 to-gray-500 rounded-3xl">Github</button>
                <button className="px-3 py-1 bg-gradient-to-br from-gray-300 to-gray-500 rounded-3xl">Live</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
