import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home (){
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white text-white">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      </main> 
  )
} 


