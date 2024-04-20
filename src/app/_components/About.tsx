"use client";
import React from "react";
import Image from "next/image";
import BedRoom from "../../../public/images/BedRoom.svg";
import HomOffice from "../../../public/images/HomOffice.svg";
import LivRoom from "../../../public/images/LivRoom.svg";
import ModKitchen from "../../../public/images/ModKitchen.svg";

function About() {
  return (
    <section id="#about" className="container bg-white h-6/7 md:h-7/8 mt-4 p-6">
      {/** Content on mobile screens */}
      <div className="sm:hidden block ">
        <div className="flex items-start justify-start">
          <h1 className="text-black font-bold text-2xl">What we do</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-3">
          {/**First row */}
          <div className="flex items-center justify-center gap-4 flex-col">
            <Image
              src={ModKitchen}
              alt="Modular Kitchen"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-lg font-bold text-purple text-center">
              Modular Kitchen
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 flex-col">
            <Image
              src={BedRoom}
              alt="Bedroom"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-lg font-bold text-purple text-center">Bedroom</p>
          </div>

          {/**Second row */}
          <div className="flex items-center justify-center gap-4 flex-col">
            <Image
              src={LivRoom}
              alt="Living Room"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-lg font-bold text-purple text-center">
              Living Room
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 flex-col">
            <Image
              src={HomOffice}
              alt="Home Office"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-lg font-bold text-purple text-center">
              Home Office
            </p>
          </div>
        </div>
      </div>

      {/**Content on desktop screens */}
      <div className="hidden sm:block">
        <div className="flex items-center justify-center">
          <h1 className="text-black font-bold text-2xl">What we do</h1>
        </div>

        <div className="grid grid-cols-4 gap-8 mt-3 p-24">
          <div className="flex items-center justify-center gap-4 flex-col">
            <Image
              src={ModKitchen}
              alt="Modular Kitchen"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-lg font-bold text-purple text-center">
              Modular Kitchen
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 flex-col">
            <Image
              src={BedRoom}
              alt="Bedroom"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-lg font-bold text-purple text-center">Bedroom</p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-col">
            <Image
              src={LivRoom}
              alt="Living Room"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-lg font-bold text-purple text-center">
              Living Room
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 flex-col">
            <Image
              src={HomOffice}
              alt="Home Office"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-lg font-bold text-purple text-center">
              Home Office
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
