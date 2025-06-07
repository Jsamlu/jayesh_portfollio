import React from "react";
import LandingPage from './LandingPage'
import FadeInPage from "../Effects/FadeInPage";


function Home() {
  return (
    <FadeInPage>
    <div className="md:px-[100px] min-h-screen">
      <div>
        <LandingPage />
      </div>
    </div>
    </FadeInPage>
  );
}

export default Home;
