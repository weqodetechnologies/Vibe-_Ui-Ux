import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full text-white px-6 py-3">
      {/* center the whole nav to match hero width and allow absolute placement inside */}
      <div className="max-w-[1253px] mx-auto relative h-12">
        {/* Left logo (anchored left inside the centered container) */}
        <div className="absolute left-0 top-1 flex items-center gap-3">
          <img src={Logo} alt="Vibe UIUX Academy" className="h-10 w-10" />
          <span className="font-semibold text-base">
            Vibe UIUX <br />
            Academy
          </span>
        </div>

        {/* Center nav (centered using absolute + transform so it doesn't push right group) */}
        <ul className="hidden md:flex items-center gap-8 text-sm absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <li>
            <a
              href="#"
              className="px-4 py-2 bg-[#4B8BFF] rounded-full text-white font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4B8BFF]">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4B8BFF]">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4B8BFF]">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4B8BFF]">
              Contact
            </a>
          </li>
        </ul>

        {/* Right side (anchored to right inside the centered container; top ~8px) */}
        <div className="hidden md:flex items-center gap-4 absolute right-0 top-2">
          <button className="text-sm text-gray-200 hover:text-white">Log In</button>
          <button className="px-5 py-2 text-sm font-medium bg-[#4B8BFF] text-white rounded-full border border-white hover:bg-[#5C9FFF] transition">
            Contact Us
          </button>
        </div>

        {/* Mobile menu icon (keeps original behavior, sits in flow for small screens) */}
        <div className="md:hidden absolute right-0 top-2">
          <button className="flex flex-col gap-1.5">
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
