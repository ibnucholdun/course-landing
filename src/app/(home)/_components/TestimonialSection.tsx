import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

type TestimonialProps = {
  review: string;
  description: string;
  name: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  review,
  description,
  name,
}) => (
  <div className="w-[350px] hover:bg-bgGray p-5 rounded-lg mx-auto bg-bgGray lg:bg-white">
    <div className="flex flex-col lg:gap-y-4 gap-y-2">
      <p className="text-sm lg:text-base">{review}</p>
      <p className="text-xs lg:text-base">{description}</p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} fill="#FFC700" color="" className="w-4 h-4" />
        ))}
      </div>
      <p className="text-sm lg:text-base">{name}</p>
    </div>
  </div>
);

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      review: "My best pick so far",
      description:
        "Warrant present garrets limited cordial in inquiry to. Supported me sweetness behaviour shameless excellent so arranging.",
      name: "Paul",
    },
    {
      review: "My best pick so far",
      description:
        "Warrant present garrets limited cordial in inquiry to. Supported me sweetness behaviour shameless excellent so arranging.",
      name: "Paul",
    },
    {
      review: "My best pick so far",
      description:
        "Warrant present garrets limited cordial in inquiry to. Supported me sweetness behaviour shameless excellent so arranging.",
      name: "Paul",
    },
  ];

  return (
    <section className="w-11/12 mx-auto lg:my-44 my-16">
      <div className="flex justify-center items-center">
        <div className="relative">
          <Image
            src={"/decors/decor6.svg"}
            alt="decor"
            width={70}
            height={70}
            className="absolute lg:-top-5 lg:-left-14 -top-5 -left-9 -rotate-45 lg:w-[70px] w-[50px]"
          />
          <h1 className="font-bold lg:text-6xl text-2xl lg:leading-[80px]">
            Reviews From Students <br /> Who Completed Course
          </h1>
        </div>
      </div>
      <div className="lg:mt-12 mt-6">
        <div className="lg:mx-44 flex lg:flex-row flex-col justify-center lg:gap-x-10 gap-y-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              review={testimonial.review}
              description={testimonial.description}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
