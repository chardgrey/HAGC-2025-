import React, { useState } from 'react';
import paw from '@/assets/cardpaw.svg'
const ChevronDownIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We provide a comprehensive range of digital services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to meet your business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while more complex applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital solutions continue to perform optimally. This includes regular updates, security monitoring, and technical support."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on your specific requirements, timeline, and complexity. We provide transparent, detailed quotes with no hidden fees after our initial consultation."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We have extensive experience integrating with existing systems and platforms. We'll assess your current setup and recommend the best approach for seamless integration."
    }
  ];

  return (
    <div className="bg-white relative dosis min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex">
              <span className="bg-[#4FA3D1] text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                Testimonials
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Frequently Asked{' '}
              <span className="text-[#4FA3D1]">Questions</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
              Find answers to common questions about our services, processes, and how we can help transform your digital presence. Can't find what you're looking for? Feel free to reach out to us directly.
            </p>
          </div>

          {/* Right Side - FAQ Dropdown */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4FA3D1] focus:rounded-t-2xl focus:ring-inset"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 text-[#4FA3D1]">
                    {openIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </div>
                </button>
                {/* Smooth dropdown animation (always render content for smooth close) */}
                <div
                  className={`transition-all duration-500 ease-in-out px-6 pt-0 overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'}`}
                  style={{
                    transitionProperty: 'max-height, opacity, padding-bottom',
                  }}
                >
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[450px] pointer-events-none z-0">
        <img src={paw} alt="paw background" className="w-full h-full object-cover object-top opacity-10" />
      </div>
    </div>
  )
}
