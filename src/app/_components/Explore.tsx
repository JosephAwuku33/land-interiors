"use client";
import React from "react";
import Image from "next/image";
import FurnitureRoom from "../../../public/images/FurnitureRoom.svg";

function Explore() {
  return (
    <section>
      {/**Content on mobile screens */}
      <div className="sm:hidden block h-96">
        <div className="relative w-full h-full">
          <Image src={FurnitureRoom} alt="housing" fill style={{objectFit: "cover"}} />
          {/**Overlay */}
          <div className="bg-white bg-opacity-80 w-3/5 h-full absolute left-0 bottom-0 top-0">
            <div className="flex flex-col items-start justify-start p-4">
              <h1 className="text-black font-bold text-xs">
                Make your dream interior in
              </h1>
              <p className="text-purple font-bold text-xl">3 easy steps</p>

              <p className="text-purple font-bold text-lg mt-4 ">Explore</p>
              <p className="text-black font-bold text-xs mt-1">
                Explore more than just modular design ideas with experts
              </p>

              <p className="text-purple font-bold text-lg mt-4 ">Design</p>
              <p className="text-black font-bold text-xs mt-1">
                Complete the design with painting, flooring, and other decor
                solutions
              </p>

              <p className="text-purple font-bold text-lg mt-4 ">Move-in</p>
              <p className="text-black font-bold text-xs mt-1">
                Move in with ease, with our hassle-free civil work and
                installation services
              </p>
            </div>
          </div>
        </div>
      </div>

      {/**Content on desktop screens */}
      <div className="hidden sm:block mt-4 h-96">
        <div className="relative w-full h-full">
          <Image src={FurnitureRoom} alt="housing" fill style={{objectFit: "cover"}} />
          <div className="bg-white bg-opacity-80 w-1/4 h-full absolute left-8 ">
            <div className="flex flex-col items-center justify-center p-6">
              <h1 className="text-black font-bold text-xs">
                Make your dream interior in
              </h1>
              <p className="text-purple font-bold text-xl">3 easy steps</p>

              <p className="text-purple font-bold text-lg mt-4 ">Explore</p>
              <p className="text-black font-bold text-xs text-center mt-1">
                Explore more than just modular design ideas with experts
              </p>

              <p className="text-purple font-bold text-lg mt-4 ">Design</p>
              <p className="text-black font-bold text-xs text-center mt-1">
                Complete the design with painting, flooring, and other decor
                solutions
              </p>

              <p className="text-purple font-bold text-lg mt-4 ">Move-in</p>
              <p className="text-black font-bold text-xs text-center mt-1">
                Move in with ease, with our hassle-free civil work and
                installation services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
