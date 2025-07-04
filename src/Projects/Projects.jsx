import ProjList from "./ProjList";


function Projects() {
  return (
      <div className="min-w-screen min-h-screen  sm:min-h-[70vh] px-10 sm:px-20 bg-[#030303] py-2">
        <div>
          {/* heading  */}
          <h1 className=" text-gray-400 font-sans font-extralight text-2xl text-center underline decoration-1 underline-offset-[10px]">
            My Recent Works
          </h1>
        </div>
        <div className=" py-12 sm:py-10 sm:px-20 mx-auto grid sm:grid-cols-3 gap-x-5 gap-y-10 ">
          {/* project display */}
            {ProjList.map((item, index)=>{
              return(
                <div key={index} className="min-h-[150px] sm:min-h-[350px] bg-gray-600">
                    
                </div>
              );
            })}
        </div>
      </div>
  );
}

export default Projects;
