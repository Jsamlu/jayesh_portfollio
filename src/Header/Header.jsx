
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

function Header() {
  const navlinks = [
    { path: "#home", label: "Home" },
    { path: "#aboutme", label: "About me" },
    { path: "#projects", label: "Projects" },
    { path: "#resume", label: "Resume" },
    { path: "#contact", label: "Contact" },
  ];

  const [toggle, setToggle] = useState(true);

  const togglableContainer = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex w-full items-center px-5 sm:px-15 py-1 sm:py-2 bg-[#030303] fixed top-0">
      <div id="logo">
        {/* <Link to="/" className='text-5xl'>JS</Link> */}
        <a
          href={"/"}
          className="text-5xl outline-1 overflow-hidden block transition-all duration-300"
        >
          <span className="font-sans font-extrabold  text-gray-300 p-2"></span>
          <span className="font-extrabold text-black p-2"></span>
        </a>
      </div>

      {/* <p className="text-7xl text-white">hey brother</p> */}
      {!toggle? <div className="absolute sm:hidden w-full h-full top-0 left-0 bg-gray-500 text-right px-5 py-5">
      <button
          className="z-10 text-2xl text-gray-900 transition-all duration-200"
          onClick={togglableContainer}
        >
          {!toggle ? <GrClose/> : " "}
        </button>
          
        <div className="py-10 px-5 grid gap-y-5 font-mono text-2xl text-gray-900 font-semibold">
          {navlinks.map((item, index) => {
            return(
              <div key={index} className="h-full">
                <a href={item.path} onClick={togglableContainer} className="focus:text-gray-300">{item.label}</a>
              </div>
            );
          })}
        </div>
      </div> :" "}
      
      <div className="sm:hidden ">
        {" "}
        <button
          className="text-xl text-gray-500 transition-all duration-200"
          onClick={togglableContainer}
        >
          {toggle ? <FaBars /> : " "}
        </button>
        
      </div>

      <div className="hidden sm:flex gap-x-5 font-sans ">
        {navlinks.map((item, index) => {
          return (
            <a
              key={index}
              href={item.path}
              className="text-gray-400 hover:text-gray-50 text-sm font-semibold transition-all duration-200  "
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
