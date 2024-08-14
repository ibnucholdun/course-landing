import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const FooterSection: React.FC<Props> = () => {
  return (
    <footer className="w-11/12 mx-auto lg:my-44 my-16">
      <div className="flex justify-between lg:mx-16 flex-col lg:flex-row gap-y-10">
        <div>
          <div className="flex lg:gap-x-4 gap-x-2 items-center lg:mb-10 mb-5">
            <Image
              src={"/images/logo.svg"}
              width={50}
              height={50}
              alt="logo"
              className="lg:w-[50px] w-[40px]"
            />
            <h1 className="lg:text-2xl text-xl font-extrabold">
              <span className="text-greenTwo">Dr.</span> Angela Doe
            </h1>
          </div>
          <p className="lg:w-[300px] text-sm lg:text-base">
            Automate your entire healthcare hiring, onboarding and compliance
            with a true technology platform.
          </p>
          <div className="flex lg:gap-x-4 gap-x-2 lg:mt-10 mt-5">
            <Facebook className="w-8 h-8 bg-greenTwo p-1 rounded-md text-white" />
            <Twitter className="w-8 h-8 bg-grayTwo p-1 rounded-md text-white" />
            <Linkedin className="w-8 h-8 bg-grayTwo p-1 rounded-md text-white" />
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl text-lg font-bold lg:mb-10 mb-3">
            CATEGORIES
          </h1>
          <div className="flex flex-col lg:gap-y-4 gap-y-2">
            <Link href={"#"} className="text-sm">
              Quantum Physics for Beginners
            </Link>
            <Link href={"#"} className="text-sm">
              Super Simple Physics
            </Link>
            <Link href={"#"} className="text-sm">
              Physics for Curious Kids
            </Link>
            <Link href={"#"} className="text-sm">
              Advanced University Physics
            </Link>
            <Link href={"#"} className="text-sm">
              Mathematics for Physicists
            </Link>
            <Link href={"#"} className="text-sm">
              Equations of Mathematical Physics
            </Link>
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl text-lg font-bold lg:mb-10 mb-3">ABOUT</h1>
          <div className="flex flex-col lg:gap-y-4 gap-y-2">
            <Link href={"#"} className="text-sm">
              About Us
            </Link>
            <Link href={"#"} className="text-sm">
              Partnerships
            </Link>
            <Link href={"#"} className="text-sm">
              Finance Experts
            </Link>
            <Link href={"#"} className="text-sm">
              Project Management
            </Link>
            <Link href={"#"} className="text-sm">
              Product Manager
            </Link>
            <Link href={"#"} className="text-sm">
              The Team
            </Link>
          </div>
        </div>
        <div>
          <h1 className="lg:text-2xl text-lg font-bold lg:mb-10 mb-3">
            FOLLOW US
          </h1>
          <div className="flex flex-col lg:gap-y-4 gap-y-2">
            <Link href={"#"} className="text-sm">
              Facebook
            </Link>
            <Link href={"#"} className="text-sm">
              Twitter
            </Link>
            <Link href={"#"} className="text-sm">
              Instagram
            </Link>
            <Link href={"#"} className="text-sm">
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
