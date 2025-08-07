import React from 'react'
import paw from '@/assets/paw.svg'
import dog from '@/assets/heroimg.svg'

export default function HeroSection() {
  return (
    <div className="bg-[#F7E9D7] min-h-screen relative overflow-hidden">
      {/* Main content container */}
      <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="absolute inset-0 opacity-30 z-0">
            <img src={paw} alt="" className='absolute top-0 left-0 w-full h-full object-cover'/>
        </div>
        <div className="w-full max-w-7xl mx-auto z-20 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
              <h1 className="text-4xl fredoka sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
                <span className="text-gray-800 block">Find Your Perfect</span>
                <span className="inline bg-white text-[#F2786D] px-4 py-1 rounded-3xl shadow-md">
                    Furry Friend!
                </span>
              </h1>
              
              <p className="text-[#333333] text-lg sm:text-xl lg:text-2xl mb-8 max-w-md mx-auto lg:mx-0 port-lligat-slab-regular tracking-wide">
                You can make a difference in their lives!!
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row mt-20 gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-transparent border-2 border-[#4FA3D1] text-[#4FA3D1] rounded-2xl font-semibold hover:bg-[#4FA3D1] hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg transform hover:-translate-y-1">
                  Report Rescue
                </button>
                <button className="px-6 py-3 shadow-lg bg-[#4FA3D1] hover:bg-[#4f8ed1] text-white rounded-2xl font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base transform hover:-translate-y-1">
                  Find Your Furever Friend
                </button>
              </div>
            </div>
            
            {/* Right content - Dog image covers all right side */}
            <div className="flex-1 relative flex items-end justify-end h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
              <div className="w-full h-full relative flex items-end justify-end z-10">
                <img
                  src={dog}
                  alt="Dog"
                  className="w-[120%] sm:w-[130%] md:w-[150%] h-full max-w-none object-contain object-bottom"
                  style={{ minHeight: 0, maxHeight: 'none' }}
                />
              </div>

              {/* Decorative blue circle */}
              <div className="absolute top-20 right-8 w-16 h-16 bg-[#4FA3D1] rounded-full opacity-80"></div>
              
              {/* Decorative green circle */}
              <div className="absolute top-[35%] left-11 w-16 h-16 bg-[#F2786D] rounded-full opacity-80"></div>
            
              {/* Decorative green circle */}
              <div className="absolute bottom-20 left-2 w-16 h-16 bg-[#6BBF59] rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative red circle */}
      <div className="absolute bottom-[-20%] right-[-2%] w-[700px] h-[700px] bg-[#F2786D] rounded-full opacity-100 z-0"></div>
    </div>
  )
}