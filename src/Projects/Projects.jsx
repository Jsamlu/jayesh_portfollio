import FadeInPage from "../Effects/FadeInPage";
import ProjList from "./ProjList";


function Projects() {
  return (
    <FadeInPage>
      <div className="min-h-[70vh] px-20 py-2">
        <div>
          {/* heading  */}
          <h1 className="font-sans font-extralight text-2xl text-center underline decoration-1 underline-offset-[10px]">
            My Recent Works
          </h1>
        </div>
        <div className="py-10">
          {/* project display */}
            {ProjList.map((item, index)=>{
              return(
                <div key={index} className="">
                    
                </div>
              );
            })}
        </div>
      </div>
    </FadeInPage>
  );
}

export default Projects;
