"use client";
import React from "react";
import { motion } from "framer-motion";
import HomeIcon from "../../../public/images/HomeIcon.svg";
import {
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="footer"
      className="w-full mt-auto bg-light-gray py-6 mb-0"
    >
      {/** Content on mobile screens */}
      <div className="sm:hidden flex flex-col items-center gap-2 mt-3 justify-center h-1/4">
        <Image src={HomeIcon} alt="home" width={35} height={35} />
        <Link
          href=""
          className="hover:text-purple  text-black font-lg text-center"
        >
          landinteriors@gmail.com
        </Link>
        <p className=" text-center ">+233 20 076 5236</p>
        <div className="flex flex-row mx-auto items-center gap-4 mt-3">
          <Link href="" className="hover:text-purple">
            <FiFacebook className="text-lg text-black" />
          </Link>
          <Link href="" className="hover:text-purple">
            <FiLinkedin className="text-lg text-black" />
          </Link>
          <Link href="" className="hover:text-purple">
            <FiTwitter className="text-lg text-black" />
          </Link>
          <Link href="" className="hover:text-purple">
            <FiInstagram className="text-lg text-black" />
          </Link>
          <Link href="" className="hover:text-purple">
            <FiYoutube className="text-lg text-black" />
          </Link>
        </div>
      </div>

      {/** Content on desktop screens */}
      <div className="hidden sm:block h-60 p-6">
        <div className="grid grid-cols-3 gap-24">
          <div className="col-span-1 p-2 mb-3">
            <Image src={HomeIcon} alt="home" width={40} height={40} />
            <p className="text-sm  text-justify leading-5 ml-3 mt-2">
              We introduce our selves as LAND Interior and Architectural Design
              Consultancy – one of the best interior designers in Chennai.
              Chennai Luxury Interior and Architectural Design Consultancy has
              challenged the conventional way of interior designing and given
              new dimensions to the art of interior designing.
            </p>
            <div className="flex items-center flex-row gap-4 mt-5 ml-2 ">
                <Link href="" className="hover:text-purple">
                    <FiFacebook className="text-lg text-black" />
                </Link>
                <Link href="" className="hover:text-purple">
                    <FiLinkedin className="text-lg text-black" />
                </Link>
                <Link href="" className="hover:text-purple">
                    <FiTwitter className="text-lg text-black" />
                </Link>
                <Link href="" className="hover:text-purple">
                    <FiInstagram className="text-lg text-black" />
                </Link>
                <Link href="" className="hover:text-purple">
                    <FiYoutube className="text-lg text-black" />
                </Link>
            </div>
          </div>
          <div className="col-span-1 p-2  mx-auto">
            <p>WHAT WE DO</p>
            <ul className="mt-4">
              <li>Interior Design</li>
              <li>Kitchen</li>
              <li>Ceiling</li>
              <li>Bedroom</li>
              <li>Smart Home</li>
            </ul>
          </div>
          <div className="col-span-1 p-2 ">
            <p>Get In Touch</p>
            <br/>
            <Link href="" >landinteriors@gmail.com</Link>
            <p>+233 20 076 5236</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
