import LandingPage from "./LandingPage";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import AboutMe from "../AboutMe/AboutMe";

function Home() {
  return (
    <>
      {/*landing page
        About me
        skills
        education
        Projects
        Research
        Contacts */}
      <div className="md:px-[100px] min-w-screen min-h-screen bg-[#030303] flex flex-col gap-y-20">
        <div id="land">
          <LandingPage />
        </div>
        <div id="aboutme">
          <AboutMe />
        </div>
        <div>{/* skills */}</div>
        <div>{/* education */}</div>
        <div id="projects">
          <Projects />
        </div>
        <div id="research">{/* research */}</div>
        <div id="contacts">{/* Contacts */}</div>
      </div>
    </>
  );
}

export default Home;
