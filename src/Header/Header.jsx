import { Link } from "react-router";
import { FaBars } from "react-icons/fa";



function Header() {
  const navlinks = [
    { path: "/", label: "Home" },
    { path: "/aboutme", label: "About me" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" }
  ];
  return (
    <div className="flex justify-end md:justify-between items-center px-5 sm:px-15 py-1 sm:py-5 bg-[#030303]"> 
      <div id="logo">
        {/* <Link to="/" className='text-5xl'>JS</Link> */}
        <Link
          to={"/"}
          className="text-5xl outline-1 overflow-hidden block transition-all duration-300"
        >
          <span className="font-sans font-extrabold  text-gray-300 p-2">
            
          </span>
          <span className="font-extrabold text-black p-2"></span>
        </Link>
      </div>

    {/* <p className="text-7xl text-white">hey brother</p> */}
      <div className="sm:hidden text-xl text-gray-500"> <button><FaBars /></button></div>
      <div className="hidden sm:flex gap-x-5 font-sans ">
        {navlinks.map((item, index) => {
          return(
            <Link key={index} to={item.path} className="text-gray-400 hover:text-gray-50 text-sm font-semibold transition-all duration-200  ">
            {item.label}
          </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
