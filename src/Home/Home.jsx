import LandingPage from "./LandingPage";
import Projects from "../Projects/Projects";
// import Resume from "../Resume/Resume";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";

function Home() {
  return (
    <div id='home'>
      {/*landing page
        About me
        skills
        education
        Projects
        Research
        Contacts */}
        <Header/>
      <div className="md:px-[100px] py-10 min-w-screen min-h-screen bg-[#030303] flex flex-col sm:gap-y-20 gap-y-10">
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
        <div id="research"></div>
        <div id="contacts">{/* Contacts */}</div>
      </div>
    </div>
  );
}

export default Home;
