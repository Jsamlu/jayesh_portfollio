import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import ProjectPage from "./Projects/ProjectPage";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Routes>
        <Route path="/project-page" element={<ProjectPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 error</h1>} />
      </Routes>
        <Footer />
      </div>
      
    </BrowserRouter>
  );
}

export default App;
