"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../../../public/images/HomeIcon.svg";
import { FiMenu, FiX } from "react-icons/fi";

function NavBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu ? true : false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:w-full sm:mx-auto bg-light-gray"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link
              href="/"
              className="block text-left font-extrabold text-3xl align-items:center text-black hover:text-purple sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-white dark:border-white"
            >
              <Image src={HomeIcon} alt="Home" width={40} height={40} />
            </Link>
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-black dark:text-white"
              >
                {showMenu ? (
                  <FiX className="text-3xl font-bold text-black " />
                ) : (
                  <FiMenu className="text-3xl font-bold text-black" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          {/* Link to Projects page */}
          <Link
            href="#projects"
            className="block text-left font-bold text-lg text-black  hover:text-purple  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            Projects
          </Link>

          {/* Link to About Page */}
          <Link
            href="#about"
            className="block text-left text-lg font-bold text-black hover:text-purple  sm:mx-4 mb-2 sm:py-2  pt-3 sm:pt-2 sm:border-t-0 "
            aria-label="About Me"
          >
            About
          </Link>

          {/* Link to Contact page */}
          <Link
            href="#contact"
            className="block text-left font-bold text-lg text-black hover:text-purple  sm:mx-4 mb-2 sm:py-2  pt-3 sm:pt-2 sm:border-t-0"
            aria-label="Contact"
          >
            Contact
          </Link>

          {/**Link to Studio section */}
          <Link
            href="#studio"
            className="block text-left font-bold text-lg text-black hover:text-purple  sm:mx-4 mb-2 sm:py-2  pt-3 sm:pt-2 sm:border-t-0"
            aria-label="Studio"
          >
            Studio
          </Link>

          {/**Link to Blog section */}
          <Link
            href="#blog"
            className="block text-left font-bold  text-lg text-black  hover:text-purple  sm:mx-4 mb-2 sm:py-2  pt-3 sm:pt-2 "
            aria-label="Blog"
          >
            Blog
          </Link>
        </div>

        {/* Header links large screen */}

        <div className=" hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <Link
            href="#projects"
            className="block text-left text-lg text-black hover:text-purple  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="block text-left text-lg text-black hover:text-purple  sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="block text-left text-lg text-black hover:text-purple  sm:mx-4 mb-2 sm:py-2"
            aria-label="Contact"
          >
            Contact
          </Link>
          <Link
            href="#studio"
            className="block text-left text-lg text-black hover:text-purple  sm:mx-4 mb-2 sm:py-2  pt-3 sm:pt-2 sm:border-t-0"
            aria-label="Studio"
          >
            Studio
          </Link>
          <Link
            href="#blog"
            className="block text-left text-lg text-black hover:text-purple  sm:mx-4 mb-2 sm:py-2  pt-3 sm:pt-2 sm:border-t-0"
            aria-label="Blog"
          >
            Blog
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
