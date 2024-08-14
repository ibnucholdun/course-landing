import HeroSection from "./_components/HeroSection";
import StathSection from "./_components/StathSection";
import AboutUsSection from "./_components/AboutUsSection";
import HowItWorkSection from "./_components/HowItWorkSection";
import ListCourseSection from "./_components/ListCourseSection";
import TestimonialSection from "./_components/TestimonialSection";
import NewsLetterSection from "./_components/NewsLetterSection";
import FooterSection from "./_components/FooterSection";

export default function Home() {
  return (
    <main className="text-grayTwo">
      <HeroSection />
      <StathSection />
      <AboutUsSection />
      <HowItWorkSection />
      <ListCourseSection />
      <TestimonialSection />
      <NewsLetterSection />
      <FooterSection />
    </main>
  );
}
