"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "../../../public/images/Banner.svg";
import Image from "next/image";

function Studio() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      id="studio"
    >
      {/**Content on mobile screens */}
      <div className="sm:hidden block h-96">
        <div className=" relative w-full h-3/4">
          <Image src={Banner} alt="Banner" fill style={{objectFit: "cover"}} />
          {/**Overlay */}
          <div className="bg-white bg-opacity-80 w-full h-1/2 absolute bottom-0 p-4 mx-auto">
            <h1 className="text-xl font-extrabold text-black text-center mt-3">
              Get Personalized Home Interiors
            </h1>
            <p className="text-purple text-center font-bold text-2xl">
              in just 50 days
            </p>

            <button className="mx-auto mt-12 w-full p-3 text-center bg-dark-purple text-white font-bold">
              SPEAK WITH AN ONLINE CONSULTANT
            </button>
          </div>
        </div>
      </div>

      {/**Content on desktop screens */}
      <div className="hidden sm:block mt-5">
        <div className="relative w-full">
          <div className="h-1/2 w-full">
            <Image src={Banner} alt="Banner" width={800} height={800} />
          </div>
          {/**Overlay */}
          <div className="bg-white bg-opacity-80 w-1/2 h-1/2 absolute top-14 bottom-10 right-10 p-8 mt-12  ">
            <h1 className="text-xl font-bold text-black text-center mt-3">
              Get Personalized Home Interiors
            </h1>
            <p className="text-purple text-center font-extrabold text-2xl">
              in just 50 days
            </p>

            <button className="mx-auto my-auto mt-12 w-full p-3 text-center bg-light-purple text-white font-bold">
              SPEAK WITH AN ONLINE CONSULTANT
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Studio;
