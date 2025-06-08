import { Link } from "react-router";

function Header() {
  const navlinks = [
    { path: "/aboutme", label: "About me" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" }
  ];
  return (
    <div className="flex justify-between items-center px-15 py-5 bg-[#030303]">
      <div id="logo">
        {/* <Link to="/" className='text-5xl'>JS</Link> */}
        <Link
          to={"/"}
          className="text-5xl outline-1 outline-gray-500 overflow-hidden block transition-all duration-300"
        >
          <span className="font-sans font-extrabold bg-[#030303] text-gray-300 p-2">
            J
          </span>
          <span className="font-extrabold bg-gray-300 text-black p-2">S</span>
        </Link>
      </div>

    {/* <p className="text-7xl text-white">hey brother</p> */}

      <div className="flex gap-x-5 font-sans">
        {navlinks.map((item, index) => {
          return(
            <Link key={index} to={item.path} className="text-gray-400 hover:text-gray-50 text-sm hover transition-all duration-200  ">
            {item.label}
          </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
