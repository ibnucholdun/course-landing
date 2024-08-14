import React from "react";
import Image from "next/image";

const StatsHeader = () => (
  <div className="flex flex-col justify-center items-center lg:gap-y-10 lg:mb-20 gap-y-5 mb-10">
    <Image
      src="/decors/decor3.svg"
      width={100}
      height={100}
      alt="Decorative element"
    />
    <h1 className="lg:text-6xl text-3xl font-bold text-center lg:leading-[60px]">
      My Stats show that I&apos;ve <br />
      Happy Students
    </h1>
    <p className="lg:text-lg text-xs">
      And excellence partiality estimating terminated day everything.
    </p>
  </div>
);

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col lg:gap-y-5 gap-y-1 items-center">
    <h3 className="lg:text-5xl text-2xl font-bold">{value}</h3>
    <p className="lg:text-lg text-xs">{label}</p>
  </div>
);

const StathSection: React.FC = () => {
  return (
    <section className="bg-bgGray lg:py-20 py-10">
      <div className="w-11/12 mx-auto">
        <StatsHeader />
        <div className="flex lg:justify-evenly justify-between items-center">
          <StatItem value="25,356" label="Students Enrolled" />
          <StatItem value="1,050" label="Hours of Tutorials" />
          <StatItem value="12" label="Subjects" />
          <StatItem value="95%" label="Success Rate" />
        </div>
      </div>
    </section>
  );
};

export default StathSection;
