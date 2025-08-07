import React from 'react'
import Navbar from '@/compontents/Layout/Navbar';
import HeroSection from '@/compontents/Home/HeroSection';
import CardSection from '@/compontents/Home/CardSection';
import ProcessSection from '@/compontents/Home/ProcessSection';
import TestimonialsSection from '@/compontents/Home/TestimonialsSection';
import BlogSection from '@/compontents/Home/BlogSection'; 
import FAQSection from '@/compontents/Home/FAQSection';
import Footer from '@/compontents/Layout/Footer';
import FloatButton from '@/compontents/Layout/FloatButton';

function Home() {
  return (
    <div>
      <Navbar />
      <FloatButton />
      
      <HeroSection />
      <CardSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />

      <Footer />
      
    </div>
  )
}

export default Home;