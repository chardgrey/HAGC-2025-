import React from 'react'
import image from '@/assets/processimg.png'
import paw from '@/assets/paw.svg'
import { FaSearch, FaFileAlt, FaHeart, FaCheckCircle, FaHome } from 'react-icons/fa';

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Browse Pets",
      description: "Find the perfect furry friend.",
      icon: FaSearch
    },
    {
      id: 2,
      title: "Submit Application",
      description: "Fill out a quick adoption form.",
      icon: FaFileAlt
    },
    {
      id: 3,
      title: "Meet & Greet",
      description: "Visit or schedule a meeting with the pet.",
      icon: FaHeart
    },
    {
      id: 4,
      title: "Get Approved",
      description: "Wait for confirmation from our team.",
      icon: FaCheckCircle
    },
    {
      id: 5,
      title: "Bring Love home",
      description: "Finalize and welcome your new buddy!",
      icon: FaHome
    }
  ];

  return (
    <div className="bg-white min-h-screen flex items-center dosis">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-stretch w-full h-full">
          {/* Left Section - Process Steps */}
          <div className=" relative w-full md:w-1/2 flex flex-col justify-center p-0 m-0 h-full">
            {/* Title */}
            <h2 className="text-4xl text-center lg:text-5xl font-bold text-gray-800 mb-12 px-8 pt-8">
              Adoption Process
            </h2>
             <div className="absolute inset-0 opacity-20 z-0">
                  <img src={paw} alt="" className='absolute top-0 left-0 w-full h-full object-cover'/>
              </div>
            
            {/* Steps */}
            <div className="space-y-8 px-8 pb-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isLast = index === steps.length - 1;
                
                return (
                  <div key={step.id} className="relative flex items-start">
                    {/* Connecting Line */}
                    {!isLast && (
                      <div className="absolute left-9 top-12 h-16 border-l-3 border-dashed border-[#F2786D]"></div>
                    )}
                    
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 w-18 h-18 bg-white rounded-full border-4 border-[#F2786D] flex items-center justify-center z-10">
                      <IconComponent className="text-[#F2786D] text-3xl" />
                    </div>
                    
                    {/* Step Content */}
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Step {step.id}: {step.title}
                      </h3>
                      <p className="text-gray-600 text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Section - Image with Background */}
          <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center p-0 m-0 h-full">
            <div className="inline-block mb-6 absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-[#4FA3D1] text-white px-6 py-2 rounded-full text-sm font-medium">
                Paw-Someee!
              </span>
            </div>
            <div className="bg-[#F2786D] relative rounded-l-[60px] w-full h-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center p-0 m-0">
              {/* glowing orb */}
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-[#eac7c4] rounded-full blur-3xl opacity-100 z-0"></div>
              <div className="absolute bottom-0 w-full h-full flex items-center justify-center">
                {/* Large image fills right side */}
                <img src={image} alt="" className="w-full h-full object-contain max-h-[700px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
