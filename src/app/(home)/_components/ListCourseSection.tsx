import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const CourseCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="lg:w-[390px] w-[250px] p-5 border-b-4 hover:border-greenTwo border-slate-300 bg-white">
    <Image
      src={imageSrc}
      alt={title}
      width={300}
      height={300}
      className="w-full"
    />
    <div className="flex flex-col lg:gap-y-3 gap-y-1 lg:my-5 my-3">
      <h3 className="font-bold lg:text-2xl text-lg">{title}</h3>
      <div className="flex flex-row">
        <Star fill="#FFC700" color="" className="w-4 h-4" />
        <Star fill="#FFC700" color="" className="w-4 h-4" />
        <Star fill="#FFC700" color="" className="w-4 h-4" />
        <Star fill="#FFC700" color="" className="w-4 h-4" />
        <Star fill="#FFC700" color="" className="w-4 h-4" />
      </div>
      <p className="lg:text-base text-xs line-clamp-3">{description}</p>
    </div>
    <div className="flex gap-x-3 justify-between">
      <Button className="bg-greenTwo lg:text-sm text-xs w-3/4" size={"sm"}>
        Get Started
      </Button>
      <Button
        variant={"outline"}
        className="border-grayTwo lg:text-sm text-xs"
        size={"sm"}
      >
        View Details
      </Button>
    </div>
  </div>
);

const ListCourseSection: React.FC = () => {
  const courses = [
    {
      imageSrc: "/images/image3.png",
      title: "Quantum Physics for Beginners",
      description:
        "And excellence partiality estimating terminated day everything.",
    },
    {
      imageSrc: "/images/image4.png",
      title: "Quantum Physics for Beginners",
      description:
        "And excellence partiality estimating terminated day everything.",
    },
    {
      imageSrc: "/images/image5.png",
      title: "Quantum Physics for Beginners",
      description:
        "And excellence partiality estimating terminated day everything.",
    },
  ];

  return (
    <section className="bg-bgGray py-20">
      <div className="mx-auto w-11/12">
        <div className="mx-16">
          <div className="flex items-center justify-between flex-col gap-y-8">
            <Image
              src={"/decors/decor7.svg"}
              alt="decors"
              width={100}
              height={100}
            />
            <h1 className="font-bold text-6xl">My Most Famous Courses</h1>
            <p className="text-base font-normal mt-5">
              Beyond genius really enough passed is up.
            </p>
          </div>
          <div className="mt-12 w-full">
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {courses.map((course, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <CourseCard
                      imageSrc={course.imageSrc}
                      title={course.title}
                      description={course.description}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListCourseSection;
