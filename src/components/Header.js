import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavBarClick = () => {
    setShowNav(prevNav => !prevNav);
  };

  const handleLinkClick = () =>{
    setShowNav(false);
  }

  return (
    <header className="flex sticky top-0 z-50 text-white justify-between items-center bg-slate-800 h-20 p-8">
      <Link onClick={handleLinkClick} to="/" className="text-2xl font-bold text-blue-500 w-2/3 sm:ml-10 ">
        {/* <img src="" alt="logo" /> */}
        CSPT
      </Link>
      <nav className=" hidden ml-auto sm:block w-1/3">
        <ul className="flex gap-20 text-xl font-Roboto ">
          <li className="mr-4 hover:text-orange-400 group relative cursor-pointer">
            <Link to="/about">About</Link>
            <span className="absolute left-0 right-0 bottom-0 mx-auto w-full h-[2px] bg-orange-400 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li className="mr-4 hover:text-orange-400 group relative cursor-pointer">
            <Link to="/services">Services</Link>
            <span className="absolute left-0 right-0 bottom-0 mx-auto w-full h-[2px] bg-orange-400 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
        </ul>
      </nav>

      {/* Nav for mobile screen */}
      <div className="relative">
        <FontAwesomeIcon
          onClick={handleNavBarClick}
          className="sm:hidden sm:right-0"
          icon={showNav ? faTimes : faBars}
        />
        {showNav && (
          <nav className="sm:hidden bg-gradient-to-b from-black via-gray-500 to-gray-500 rounded-xl absolute p-3 top-30 right-0 z-20">
            <ul className="flex gap-5 flex-col text-xl font-Roboto">
              <li className="whitespace-nowrap  hover:text-orange-400">
                <Link onClick={handleLinkClick} to="/about">About</Link>
              </li>
              <li className=" hover:text-orange-400">
                <Link onClick={handleLinkClick} to="/services">Services</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
