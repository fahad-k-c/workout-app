import React from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <header className="bg-transparent p-2 shadow-md">
      {" "}
      {/* Added shadow class */}
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <div className="border-[2px] border-red-500 rounded-lg p-2">
            <img src={Logo} alt="Logo" />
          </div>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li className="text-gray-900 transform hover:scale-105 text-xl transition-all duration-300">
                <a href="#"> Home </a>
              </li>
              <li className="text-gray-900 transform hover:scale-105 text-xl transition-all duration-300">
                <a href="#exercises"> Exercises </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
