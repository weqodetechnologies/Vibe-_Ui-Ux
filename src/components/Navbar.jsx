import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import BlueBtn from "./ui/BlueBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // common base classes for desktop nav items
  const baseNavClasses =
    "px-4 py-2 rounded-full font-medium flex items-center gap-2 transition group text-xs sm:text-sm";

  return (
    <nav className="w-full text-white px-4 sm:px-5 md:px-6 py-3 bg-transparent">
      {/* Top bar */}
      <div className="max-w-[1253px] mx-auto flex items-center justify-between h-14 sm:h-16 md:h-20">
        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Vibe UIUX Academy" className="h-9 w-9 sm:h-10 sm:w-10" />
          <span className="font-semibold text-sm sm:text-base leading-tight">
            Vibe UIUX <br /> Academy
          </span>
        </div>

        {/* Center nav – tablet/desktop */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-5 lg:gap-8 text-sm">
          {/* HOME */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseNavClasses} ${
                  isActive
                    ? "bg-[#4B8BFF] text-white"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Home</span>
                  <span
                    className={`w-2 h-2 rounded-full transition ${
                      isActive
                        ? "bg-white"
                        : "bg-[#4B8BFF] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          {/* COURSES */}
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `${baseNavClasses} ${
                  isActive
                    ? "bg-[#4B8BFF] text-white"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Courses</span>
                  <span
                    className={`w-2 h-2 rounded-full transition ${
                      isActive
                        ? "bg-white"
                        : "bg-[#4B8BFF] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          {/* ABOUT */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseNavClasses} ${
                  isActive
                    ? "bg-[#4B8BFF] text-white"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>About</span>
                  <span
                    className={`w-2 h-2 rounded-full transition ${
                      isActive
                        ? "bg-white"
                        : "bg-[#4B8BFF] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          {/* BLOG */}
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `${baseNavClasses} ${
                  isActive
                    ? "bg-[#4B8BFF] text-white"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Blog</span>
                  <span
                    className={`w-2 h-2 rounded-full transition ${
                      isActive
                        ? "bg-white"
                        : "bg-[#4B8BFF] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          {/* CONTACT */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${baseNavClasses} ${
                  isActive
                    ? "bg-[#4B8BFF] text-white"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Contact</span>
                  <span
                    className={`w-2 h-2 rounded-full transition ${
                      isActive
                        ? "bg-white"
                        : "bg-[#4B8BFF] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Right buttons – tablet/desktop */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <button className="text-xs sm:text-sm text-gray-200 hover:text-white">
            Log In
          </button>

          {/* Slightly smaller button on tablet, normal on desktop */}
          <NavLink to="/contact">
            <div className="transform md:scale-90 lg:scale-100 origin-right">
              <BlueBtn text="Contact Us" />
            </div>
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
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

          {/* Bottom section */}
          <div className="pt-2 border-t border-[#333] mt-1 flex justify-between items-center">
            <button className="text-xs text-gray-300">Log In</button>

            <NavLink to="/contact" onClick={closeMenu}>
              <div className="transform scale-90 origin-right">
                <BlueBtn text="Contact Us" />
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
