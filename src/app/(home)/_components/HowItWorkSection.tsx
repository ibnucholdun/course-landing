import Image from "next/image";
import React from "react";

const StepCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="card lg:w-[300px] w-[250px] flex flex-col p-5 lg:gap-y-8 gap-y-6 border-b-4 border-slate-300 hover:bg-bgGray hover:border-greenTwo hover:rounded-lg relative">
    <h1 className="lg:text-8xl text-4xl font-bold opacity-10 absolute top-0">
      {number}
    </h1>
    <h3 className="font-bold lg:pt-8 pt-4 lg:text-2xl text-lg lg:h-[5rem] h-[2rem]">
      {title}
    </h3>
    <p className="lg:text-sm text-xs lg:pb-5 pb-3 pt-5">{description}</p>
  </div>
);

const HowItWorkSection: React.FC = () => {
  return (
    <section className="w-11/12 mx-auto lg:my-44 my-16">
      <div className="lg:mx-16">
        <div className="flex items-center justify-between flex-col lg:gap-y-6 gap-y-2">
          <Image
            src="/decors/decor6.svg"
            alt="Decorative Element"
            width={100}
            height={100}
            className="w-[50px] lg:w-[100px]"
          />
          <h1 className="font-bold lg:text-6xl text-3xl">How it Works</h1>
          <p className="lg:text-base text-xs font-normal mt-3">
            We have been providing great flooring solutions service.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-10 lg:mt-12 mt-6 justify-center items-center">
          <StepCard
            number="01"
            title="Create Account"
            description="Latter person am secure of estate genius at."
          />
          <StepCard
            number="02"
            title="Pay One Time Fee"
            description="Latter person am secure of estate genius at."
          />
          <StepCard
            number="03"
            title="Onboarding The Online Class"
            description="Latter person am secure of estate genius at."
          />
          <StepCard
            number="04"
            title="Start Advanced Learning"
            description="Latter person am secure of estate genius at."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
