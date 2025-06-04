import { Routes, Route, BrowserRouter } from "react-router";

import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <>
          <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />




          <Route path="*" element={<p>404 Error</p>} />
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
