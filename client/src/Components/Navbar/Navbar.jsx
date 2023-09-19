import React from "react";
import { Link, useNavigate } from "react-router-dom";
//logo
import logo from "../../assests/logo_tp.svg";

function Navbar() {
  let navigate = useNavigate();

  return (
    <>
      <div
        className="px-10 w-full flex flex-row gap-5 justify-between items-center bg-slate-500"
        onClick={() => {
          navigate("/");
        }}
      >
        <div id="logocontainer">
          <div id="logowrapper">
            {" "}
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div
          id="navbar"
          className="flex gap-4 justify-center items-center flex-row font-normal text-xl"
        >
          <Link to="/"> Home </Link>
          <a
            href="https://www.linkedin.com/in/shiva-kanchi-17888019b"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
          <a
            href="https://shivakanchi.netlify.app/contact"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
