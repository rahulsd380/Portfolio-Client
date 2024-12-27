import Hero from "@/Components/Home/Hero/Hero";
import OurServices from "@/Components/Home/OurServices/OurServices";
import OurWorks from "@/Components/Home/OurWorks/OurWorks";
import TechToolBox from "@/Components/Home/TechToolBox/TechToolBox";
import WhyChooseUs from "@/Components/Home/WhyChooseUs/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Hero/>
      <TechToolBox/>
      <OurServices/>
      <WhyChooseUs/>
      <OurWorks/>
    </div>
  );
}
