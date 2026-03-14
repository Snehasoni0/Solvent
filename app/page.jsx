import About from "@/components/home/HomeAbout";
import Blog from "@/components/home/HomeBlog";
import Categories from "@/components/home/HomeCategory";
import CategorySlider from "@/components/home/HomeCategory";
import Hero from "@/components/home/HomeHero";
import Newsletter from "@/components/home/NewsLetter";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/Whyus";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <Newsletter />
    </>
  );
}
