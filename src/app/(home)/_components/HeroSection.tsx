import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./Header";

const MeetWithSection = () => (
  <div className="flex items-end gap-x-2">
    <p className="text-sm lg:text-base">Meet With</p>
    <hr className="w-16 mb-2 h-[2px] bg-grayTwo" />
  </div>
);

const HeroTitle = () => (
  <h1 className="text-4xl lg:text-7xl font-bold lg:leading-[80px] ">
    Advanced <span className="text-greenTwo">Physics</span> with{" "}
    <span className="text-greenTwo">Expert</span> Online Tutoring
    <Image
      src={"/decors/decor1.svg"}
      width={70}
      height={70}
      alt="decor1"
      className="inline-block ml-5 w-[40px] lg:w-[70px]"
    />
  </h1>
);

const HeroDescription = () => (
  <p className="lg:text-xl lg:w-3/4 text-sm">
    He preference connection astonished on of ye. Partiality on or continuing in
    particular principles as. Do believing oh disposing to supported allowance
    we.
  </p>
);

const CallToActionButtons = () => (
  <div className="flex lg:gap-x-8 lg:mt-10 gap-x-4 mt-5">
    <Button className="bg-greenTwo lg:px-10 lg:py-7 px-5 py-4">
      Get Started Today
    </Button>
    <Button
      variant={"outline"}
      className="border-grayTwo lg:px-10 lg:py-7 px-5 py-4"
    >
      Learn More
    </Button>
  </div>
);

const UserImages = () => (
  <div className="flex gap-x-5 items-center">
    <Image
      src={"/images/logo2.svg"}
      width={50}
      height={50}
      alt=""
      className="w-24"
    />
    <div className="relative w-52">
      <Image
        src={"/images/user1.svg"}
        width={50}
        height={50}
        alt=""
        className="inline-block"
      />
      <Image
        src={"/images/user2.svg"}
        width={50}
        height={50}
        alt=""
        className="inline-block absolute left-7"
      />
      <Image
        src={"/images/user3.svg"}
        width={50}
        height={50}
        alt=""
        className="inline-block absolute left-14"
      />
      <Image
        src={"/images/user4.svg"}
        width={50}
        height={50}
        alt=""
        className="inline-block absolute left-[84px]"
      />
      <div className="bg-greenTwo rounded-full inline-block absolute left-[112px] p-3 text-white font-medium text-base">
        +9k
      </div>
    </div>
  </div>
);

const HeroImage = () => (
  <div className="relative inline-block">
    <div className="relative block z-10">
      <Image
        src={"/images/hero-image.png"}
        alt="hero-image"
        width={1000}
        height={1000}
        className="w-[532px] hidden lg:block"
      />
    </div>
    <Image
      src={"/decors/decor2.svg"}
      alt="decor2"
      width={200}
      height={200}
      className="hidden lg:block lg:absolute lg:top-0 lg:right-0"
    />
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section className="w-full relative">
      <div className="w-11/12 mx-auto">
        <Header />
        <div className="lg:flex lg:mx-16 mx-3 lg:my-10 my-5">
          <div className="lg:w-1/2 flex justify-center flex-col gap-y-4 lg:gap-y-7">
            <MeetWithSection />
            <HeroTitle />
            <HeroDescription />
            <CallToActionButtons />
            <UserImages />
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
          </div>
        </div>
      </div>
      <div className="lg:bg-greenTwo min-h-screen w-[615px] absolute right-0 top-0 -z-50"></div>
    </section>
  );
};

export default HeroSection;
