
import LandingPage from './LandingPage'
import CLinks from '../CLinks/CLinks';


function Home() {
  return (
    <>
    <div className="md:px-[100px] min-w-screen min-h-screen bg-[#030303]">
      <div>
        <LandingPage />
        <CLinks/>
      </div>
    </div>
    </>
  );
}

export default Home;
