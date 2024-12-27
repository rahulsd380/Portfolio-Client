import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Hero from "@/Components/Home/Hero/Hero";
import TechToolBox from "@/Components/Home/TechToolBox/TechToolBox";
import WhyChooseUs from "@/Components/Home/WhyChooseUs/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Hero/>
      <TechToolBox/>
      <WhyChooseUs/>
      <ContactUs/>
    </div>
  );
}
