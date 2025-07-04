import React from "react";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

Link;

const CLinks = () => {
  return (
    <div className="max-w-[80%] mx-auto py-5">
      <div className="flex gap-x-5 justify-center items-center">
        <Link className="links ">
          <FaLinkedinIn />
        </Link>
        <Link className="links">
          <FaGithub />
        </Link>
        <Link className="links">
          <LuInstagram />
        </Link>
        <Link className="links">
          <FaXTwitter />
        </Link>
      </div>
    </div>
  );
};

export default CLinks;
