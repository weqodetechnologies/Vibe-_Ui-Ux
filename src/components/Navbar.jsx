import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full text-white px-4 md:px-6 py-3 bg-transparent">
      {/* Top bar */}
      <div className="max-w-[1253px] mx-auto relative h-12 flex items-center md:block">
        
        {/* Left Logo */}
        <div className="flex items-center gap-3 md:absolute md:left-0 md:top-1">
          <img src={Logo} alt="Vibe UIUX Academy" className="h-10 w-10" />
          <span className="font-semibold text-base leading-tight">
            Vibe UIUX <br /> Academy
          </span>
        </div>

        {/* Center nav – md+ */}
        <ul className="hidden md:flex items-center gap-8 text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#4B8BFF] rounded-full text-white font-medium"
                  : "hover:text-[#4B8BFF]"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#4B8BFF] rounded-full text-white font-medium"
                  : "hover:text-[#4B8BFF]"
              }
            >
              Courses
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#4B8BFF] rounded-full text-white font-medium"
                  : "hover:text-[#4B8BFF]"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#4B8BFF] rounded-full text-white font-medium"
                  : "hover:text-[#4B8BFF]"
              }
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-[#4B8BFF] rounded-full text-white font-medium"
                  : "hover:text-[#4B8BFF]"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Right buttons – md+ */}
        <div className="hidden md:flex items-center gap-4 absolute right-0 top-2">
          <button className="text-sm text-gray-200 hover:text-white">
            Log In
          </button>

          <NavLink
            to="/contact"
            className="px-5 py-2 text-sm font-medium bg-[#4B8BFF] text-white rounded-full border border-white hover:bg-[#5C9FFF] transition"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile hamburger – < md */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 max-w-[1253px] mx-auto bg-[#202020] border border-[#4B8BFF] rounded-2xl px-4 py-3 space-y-2">

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block py-2 text-sm font-medium ${
                isActive ? "text-[#4B8BFF]" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block py-2 text-sm ${isActive ? "text-[#4B8BFF]" : ""}`
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block py-2 text-sm ${isActive ? "text-[#4B8BFF]" : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/blogs"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block py-2 text-sm ${isActive ? "text-[#4B8BFF]" : ""}`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block py-2 text-sm ${isActive ? "text-[#4B8BFF]" : ""}`
            }
          >
            Contact
          </NavLink>

          <div className="pt-2 border-t border-[#333] mt-1 flex justify-between items-center">
            <button className="text-xs text-gray-300">Log In</button>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="px-4 py-1.5 text-xs font-medium bg-[#4B8BFF] text-white rounded-full border border-white"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
