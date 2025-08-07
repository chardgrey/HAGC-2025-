import React from 'react'
import paw from '@/assets/cardpaw.svg'
import { FaRegHeart, FaSearch, FaHandHoldingHeart  } from "react-icons/fa";
import { IoMdPaw, IoMdFemale, IoMdMale  } from "react-icons/io";

export default function CardSection() {
  const pets = [
    {
      id: 1,
      name: "Bella",
      age: "2 y/o",
      breed: "Golden Retriever",
      description: "Energetic puppy looking for an active family. dasdad d asdas as as ad asd asd as das adas sdas hdjkashdjah jdaskjdh jaskhsad as ad as sa dasdadasd asd asd as da sad as dasd aa",
      image: null, // placeholder for now
      gender: "female",
      isReady: true,
      isFavorited: false
    },
    {
      id: 2,
      name: "Max",
      age: "1 y/o", 
      breed: "Labrador",
      description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
      image: null,
      gender: "male",
      isReady: true,
      isFavorited: true
    },
    {
      id: 3,
      name: "Luna",
      age: "3 y/o",
      breed: "German Shepherd", 
      description: "Energetic puppy looking for an active family. dasdad sad as ad as sa dasdadasd asd asd as da sad as dasd aa",
      image: null,
      gender: "female",
      isReady: false,
      isFavorited: false
    }
  ];

   const PetCard = ({ pet }) => {
    return (
      <div className="bg-white border-2 relative border-black rounded-3xl  shadow-lg max-w-sm mx-auto">
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
          
          {/* Heart button */}
          <button className="absolute top-9 md:top-2 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
            <FaRegHeart className={`w-5 h-5 ${pet.isFavorited ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
          </button>
          
          {/* Ready for Adoption badge */}
          {pet.isReady && (
            <div className="absolute top-2 right-6 bg-[#6BBF59] text-white px-3 py-1 rounded-full text-xs font-medium">
              Ready for Adoption
            </div>
          )}
        </div>
        
        {/* Content section */}
        <div className="p-6 pt-2 ">
          {/* Name, Age, and Gender */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-gray-800">{pet.name}</h3>
              <span className="bg-[#F2786D] text-white px-2 py-1 rounded-full text-xs font-medium">
                Age: {pet.age}
              </span>
            </div>
            
            {/* Gender icon */}
            <div className="w-8 h-8">
              {pet.gender === 'female' ? (
                <IoMdFemale className="text-[#F2786D] w-8 h-8"/>
              ) : (
                <IoMdMale className="text-[#4FA3D1] w-8 h-8"/>
              )}
            </div>
          </div>
          
          {/* Breed */}
          <p className="text-gray-600 font-medium mb-3">{pet.breed}</p>
          
          {/* Description */}
          <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3 min-h-16 text-justify">{pet.description}</p>
          
          {/* View Details button */}
          <button className="flex items-center gap-2 text-[#4FA3D1] font-medium text-sm mb-6 hover:underline">
            <FaSearch className="w-4 h-4" />
            View Details
          </button>
          
          {/* Adopt Me button centered at bottom border */}
          <button className="w-fit absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%] bg-[#4FA3D1] text-white py-2 px-3 md:px-8 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300 shadow-lg transform hover:translate-y-[40%]">
            <FaHandHoldingHeart className="w-7 h-7" />
            Adopt Me!
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen py-12 px-4 dosis relative overflow-hidden">
      {/* Large paw background decoration (upper half only) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[450px] pointer-events-none z-0">
        <img src={paw} alt="paw background" className="w-full h-full object-cover object-top opacity-10" />
      </div>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#333333] max-w-4xl mx-auto leading-tight">
          Meet the Puppies Waiting for You
        </h1>
      </div>
      
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
      
      <div className='flex justify-center mt-20'>
        <button className='bg-[#4FA3D1] z-20 hover:bg-[#4f8ed1] text-2xl text-white py-3 px-8 rounded-3xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg transform hover:-translate-y-1'>
          View More
        </button>
      </div>
    </div>
  );
}
