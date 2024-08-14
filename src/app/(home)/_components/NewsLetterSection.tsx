import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const NewsLetterSection: React.FC<Props> = () => {
  return (
    <section className="w-11/12 mx-auto lg:my-44 my-10 text-white">
      <div className="lg:mx-16">
        <div className="bg-greenTwo lg:px-24 lg:py-16 p-5 w-full flex flex-col lg:flex-row justify-between lg:items-center rounded-3xl">
          <div className="flex flex-col lg:gap-y-4 gap-y-2">
            <p className="text-sm lg:text-base">Newsletter</p>
            <h1 className="font-bold lg:text-5xl text-2xl">
              Subscribe to get updated
            </h1>
            <p className="lg:w-3/4 text-xs lg:text-base">
              Warrant present garrets limited cordial in inquiry to. Supported
              me sweetness behaviour shameless excellent so arranging.
            </p>
          </div>
          <div>
            <Button
              variant={"outline"}
              className="border-white lg:px-10 lg:py-7 px-5 py-3 bg-greenTwo mt-5"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
