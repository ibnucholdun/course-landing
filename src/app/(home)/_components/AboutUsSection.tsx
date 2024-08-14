import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutUsContent = () => (
  <div className=" flex items-center justify-center lg:mr-[-200px]">
    <div className="flex flex-col lg:gap-y-8 gap-y-2 relative bg-white bg-opacity-40 backdrop-blur-xl lg:p-6 p-3 rounded-lg w-3/4 lg:w-full">
      <Image
        src="/decors/decor4.svg"
        width={70}
        height={70}
        alt="Decorative Element"
        className="absolute top-[-10px] left-[-20px] lg:top-[-40px] lg:left-[-50px] lg:w-[70px] w-[30px]"
      />
      <h1 className="lg:text-6xl text-2xl font-bold">About Angela Doe</h1>
      <p className="lg:text-lg text-xs lg:w-[600px] ">
        With over 21 years of teaching experience, Angela offers expert online
        tutoring in Physics. Our goal is to help you achieve academic excellence
        through personalized, one-on-one sessions designed to fit your unique
        learning style.
      </p>
      <Link href="#" className="flex items-center gap-x-2 text-sm lg:text-lg">
        Read More <ArrowRight className="text-greenTwo" />
      </Link>
    </div>
  </div>
);

const AboutUsImage = () => (
  <div className="lg:flex justify-end relative hidden">
    <Image
      src="/images/image2.png"
      alt="image about us"
      width={1000}
      height={1000}
      className="lg:w-[800px] w-3/4 -z-10"
    />
    <Image
      src="/decors/decor5.svg"
      alt="Decorative Element"
      width={100}
      height={100}
      className="absolute -bottom-10 -left-10 -z-50"
    />
  </div>
);

const AboutUsSection: React.FC = () => {
  return (
    <section className="w-11/12 mx-auto lg:my-36 my-16">
      <div className="lg:mx-16">
        <div className="flex justify-end flex-col lg:flex-row items-center lg:mr-40">
          <AboutUsContent />
          <AboutUsImage />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
