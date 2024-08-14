import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Logo = () => (
  <figure className="flex lg:gap-x-4 items-center gap-x-2">
    <Image
      src="/images/logo.svg"
      width={50}
      height={50}
      alt="logo"
      className="w-[25px] lg:w-[50px]"
    />
    <h1 className="lg:text-2xl text-xl font-extrabold">
      <span className="text-greenTwo">Dr.</span> Angela Doe
    </h1>
  </figure>
);

const NavigationItems = () => (
  <ul className="flex lg:gap-x-24 items-center pt-1 justify-between">
    <Logo />
    {["About Me", "Course Offered", "Reviews", "Contact"].map((item) => (
      <li key={item}>
        <Link href={"#"} className="font-semibold text-base hidden lg:block">
          {item}
        </Link>
      </li>
    ))}
  </ul>
);

const MobileMenu = () => (
  <div className="lg:hidden">
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ul className="flex flex-col gap-y-3 my-3 p-3">
          {["About Me", "Course Offered", "Reviews", "Contact"].map((item) => (
            <li key={item}>
              <Link href={"#"} className="font-semibold text-base">
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Button>Get Started Today</Button>
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

const Header: React.FC = () => (
  <header className="py-8">
    <nav className="flex justify-between items-center">
      <NavigationItems />
      <Button className="hidden lg:block">Get Started Today</Button>
      <MobileMenu />
    </nav>
  </header>
);

export default Header;
