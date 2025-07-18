
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

Link;

const CLinks = () => {
  return (
    <div className=" sm:py-17">
      <div className="flex sm:grid gap-x-5 gap-y-5 justify-center items-center">
        <a className="links" href="#">
          <FaLinkedinIn />
        </a>
        <a className="links" href="#">
          <FaGithub />
        </a>
        <a className="links" href="#">
          <LuInstagram />
        </a>
        <a className="links" href="#">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default CLinks;
