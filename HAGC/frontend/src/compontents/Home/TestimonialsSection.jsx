import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoMdPaw } from "react-icons/io";
import paw from '@/assets/cardpaw.svg'
export default function TestimonialsSection() {

  const pets = [
      {
        id: 1,
        name: "Bella",
        age: "2 y/o",
        date: "2 months ago",
        description: "Energetic puppy looking for an active family. dasdad d asdas as as ad asd asd as das adas sdas hdjkashdjah jdaskjdh jaskhsad as ad as sa dasdadasd asd asd as da sad as dasd aa",
        image: null, // placeholder for now
      },
      {
        id: 2,
        name: "Max",
        age: "1 y/o", 
        date: "Few days ago",
        description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
        image: null,
      },
      {
        id: 3,
        name: "Luna",
        age: "3 y/o",
        date: "Now", 
        description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
        image: null,
      }
    ];
  
     const PetCard = ({ pet }) => {
      return (
        <div className="bg-white border-2 relative border-black rounded-3xl shadow-lg max-w-sm mx-auto duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
          {/* Image section with overlays */}
          <div className="relative">
            {/* Pet image placeholder */}
            <div className="h-48 bg-gray-200 rounded-2xl m-4 relative overflow-hidden">
              {pet.image ? (
                <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {/* Paw print placeholder */}
                  <div className="w-24 h-24 opacity-30">
                    <IoMdPaw className='w-full h-full'/>
                  </div>
                </div>
              )}
            </div>
            
            {/* Ready for Adoption badge */}
              <div className="absolute top-2 right-6 bg-[#F2786D] text-white px-3 py-1 rounded-full text-xs font-medium gap-1 flex flex-row shadow-md">
                 {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-200 text-sm" />
                  ))}
              </div>
          </div>
          
          {/* Content section */}
          <div className="p-6 pt-2 ">
            {/* Description */}
            <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3 min-h-16 text-justify">{pet.description}</p>
            
            <div className="flex items-center gap-4">
              {/* Profile Picture Placeholder */}
              <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg">
                {/* Optional Initial or Icon */}
                <img src={paw} alt="Paw Icon" className="w-8 h-8 object-cover" />
              </div>

              {/* Name and Date */}
              <div className="flex flex-col">
                <h3 className="text-3xl font-extrabold text-gray-800">{pet.name}</h3>
                <p className="text-gray-400 text-sm font-medium mb-3">{pet.date}</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

  return (
    <div className='bg-gradient-to-b p-10 from-[#F7E9D7] to-white min-h-screen dosis'>
      <div className=' flex justify-center items-center w-full'>
        <span className="bg-[#6BBF59] text-white px-7 py-1 rounded-full text-sm font-bold tracking-wide shadow-md ">
          Paw-Someee!
        </span>
      </div>
      
      <h1 className='text-4xl text-center lg:text-5xl font-bold text-[#333333] mb-12 px-8 pt-8'>
        What Our <span className='text-[#4FA3D1]'>Friends</span> Are Saying
      </h1>
      
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  )
}
