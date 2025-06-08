
import LandingPage from './LandingPage'
import FadeInPage from "../Effects/FadeInPage";


function Home() {
  return (
    <FadeInPage>
    <div className="md:px-[100px] min-h-screen bg-[#030303]">
      <div>
        <LandingPage />
      </div>
    </div>
    </FadeInPage>
  );
}

export default Home;
