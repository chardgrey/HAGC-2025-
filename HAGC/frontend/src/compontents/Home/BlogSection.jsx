import React from 'react'
import dog from '@/assets/loginbg 2.svg'
import { IoMdPaw } from "react-icons/io";
import paw from '@/assets/cardpaw.svg'

export default function BlogSection() {
  
    const pets = [
        {
          id: 1,
          name: "Bella",
          title: "Testing for now",
          date: "20 Jan 2024",
          description: "Energetic puppy looking for an active family. dasdad d asdas as as ad asd asd as das adas sdas hdjkashdjah jdaskjdh jaskhsad as ad as sa dasdadasd asd asd as da sad as dasd aa",
          image: true, // placeholder for now
        },
        {
          id: 2,
          name: "Max",
          title: "Testing for now",
          date: "20 Jan 2024",
          description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
          image: null,
        },
        {
          id: 3,
          name: "Luna",
          title: "Testing for now",
          date: "20 Jan 2024",
          description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
          image: null,
        },
        {
          id: 4,
          name: "Luna",
          title: "Testing for now",
          date: "Now", 
          description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
          image: null,
        },
        {
          id: 5,
          name: "Luna",
          title: "Testing for now",
          date: "Now", 
          description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
          image: null,
        },
        {
          id: 6,
          name: "Luna",
          title: "Testing for now",
          date: "Now", 
          description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
          image: null,
        },
        {
          id: 7,
          name: "Luna",
          title: "Testing for now",
          date: "Now", 
          description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
          image: null,
        },
        {
          id: 9,
          name: "Luna",
          title: "Testing for now",
          date: "Now", 
          description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
          image: null,
        },
        {
          id: 8,
          name: "Luna",
          title: "Testing for now",
          date: "Now", 
          description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
          image: null,
        },
        {
          id: 10,
          name: "Luna",
          title: "Testing for now",
          date: "Now", 
          description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
          image: null,
        }
      ];
    
       const PetCard = ({ pet }) => {
        return (
          <div className="relative max-w-sm mx-auto">
            {/* Image section with overlays */}
            <div className="relative">
              {/* Pet image placeholder */}
              <div className="h-48 bg-gray-200 rounded-2xl m-4 relative overflow-hidden">
                {pet.image ? (
                  <img src={dog} alt={pet.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Paw print placeholder */}
                    <div className="w-24 h-24 opacity-30">
                      <IoMdPaw className='w-full h-full'/>
                    </div>
                  </div>
                )}
              </div>
              
            </div>
            
            {/* Content section */}
            <div className="p-6 pt-2 ">
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {pet.name}
              </h3>
              {/* Description */}
              <p className="text-[#4c4c4c] text-sm mb-4 leading-relaxed line-clamp-3 min-h-16 text-justify">{pet.description}</p>
              
              <div className="flex items-center justify-between gap-4">
                {/* Profile and Name (left) */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg">
                    <img src={paw} alt="Paw Icon" className="w-5 h-5 object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-[#7D7D7D]">{pet.name}</h3>
                </div>
                {/* Date (right) */}
                <p className='text-[#b7b1b1]'>{pet.date}</p>
              </div>
            </div>
          </div>
        );
      };

  // Only show first 8 cards
  const visiblePets = pets.slice(0, 8);
  const showViewMore = pets.length > 8;

  return (
    <div className='bg-white min-h-screen dosis p-10 relative'>
      <h1 className='text-5xl text-[#333333] font-bold text-left py-10 mx-22'>
        Recent <span className='text-[#F2786D]'>blog</span> posts
      </h1>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visiblePets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>

      {/* Gradient fade effect at bottom */}
      <div className="pointer-events-none absolute left-0 bottom-0 w-full h-[50%] z-10">
        <div className="w-full h-full bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* View More button only if more than 8 cards */}
      {showViewMore && (
        <div className='flex justify-center mt-10 relative z-20'>
          <button className='bg-[#F2786D] hover:bg-[#f26d6d] text-2xl text-white py-3 px-8 rounded-3xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg transform hover:-translate-y-1'>
            View More Blogs
          </button>
        </div>
      )}
    </div>
  )
}
