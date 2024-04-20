"use client";
import React from "react";
import HouseIcon from "../../../public/images/House.svg";
import CalendarIcon from "../../../public/images/Calendar.svg";
import CertificateIcon from "../../../public/images/Certificate.svg";
import Image from "next/image";

function Banner() {
  return (
    <section className="container bg-white h-3/5 md:mt-4 md:p-10 p-4">
      <div className="flex items-center justify-center mt-3 text-center">
        <p className="text-black font-bold">Why Land Interiors</p>
      </div>

      <div className="grid grid-cols-3 gap-x-12 mt-6">
        <div className="col-span-1  p-2">
          <div className="flex flex-col items-center justify-center">
            <Image src={HouseIcon} alt="House" width={45} height={45} />
            <p className="text-center text-xs  mt-5">
              50 days or we pay you rent
            </p>
          </div>
        </div>
        <div className="col-span-1  p-2 ">
          <div className="flex flex-col items-center justify-center">
            <Image src={CalendarIcon} alt="Calendar" width={45} height={45} />
            <p className="text-center text-xs mt-4 ">1500+ happy customers</p>
          </div>
        </div>
        <div className="col-span-1  p-2">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={CertificateIcon}
              alt="Certificate"
              width={45}
              height={45}
            />
            <p className="text-center text-xs  mt-5">300+ design experts</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
