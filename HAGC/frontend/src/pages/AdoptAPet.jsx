import React, { useState } from 'react'
import ApplicationModal from '../compontents/modals/ApplicationModal';
import Navbar from '../compontents/layout/Navbar'
import Image from '@/assets/adoptapetimg.svg'
import Process from '@/compontents/home/ProcessSection'
import TakeQuizModal from '../compontents/modals/TakeQuizModal';
import { FaRegHeart, FaSearch, FaHandHoldingHeart } from "react-icons/fa";
import { IoMdPaw, IoMdFemale, IoMdMale } from "react-icons/io";
import paw from '@/assets/cardpaw.svg';

export default function AdoptAPet() {
    const [likedPets, setLikedPets] = useState(new Set());
    const [showApplication, setShowApplication] = useState(false);
    const [showTakeQuiz, setShowTakeQuiz] = useState(false);

  const toggleLike = (petId) => {
    const newLikedPets = new Set(likedPets);
    if (newLikedPets.has(petId)) {
      newLikedPets.delete(petId);
    } else {
      newLikedPets.add(petId);
    }
    setLikedPets(newLikedPets);
  };

  const pets = [
    { id: 1, name: 'Bella', type: 'Dog', age: '2 years', location: 'San Francisco, CA', distance: '5 miles away', label: 'Staff Pick' },
    { id: 2, name: 'Bella', type: 'Cat', age: '1 year', location: 'Oakland, CA', distance: '8 miles away', label: 'New Arrival' },
    { id: 3, name: 'Bella', type: 'Dog', age: '3 years', location: 'Berkeley, CA', distance: '12 miles away', label: 'Popular' },
    { id: 4, name: 'Bella', type: 'Cat', age: '4 years', location: 'San Jose, CA', distance: '15 miles away', label: 'Staff Pick' },
    { id: 5, name: 'Bella', type: 'Dog', age: '2 years', location: 'Palo Alto, CA', distance: '20 miles away', label: 'New Arrival' },
    { id: 6, name: 'Bella', type: 'Cat', age: '1 year', location: 'Mountain View, CA', distance: '18 miles away', label: 'Popular' },
  ];

  const PetCard = ({ pet }) => {
    // CardSection design logic
    const isLiked = likedPets.has(pet.id);
    const labelColors = {
      'Staff Pick': 'bg-yellow-400',
      'New Arrival': 'bg-green-400',
      'Popular': 'bg-red-400'
    };
    // Add breed and gender for demo
    const breed = pet.breed || 'Unknown';
    const gender = pet.gender || (pet.type === 'Dog' ? 'male' : 'female');
    const isReady = true;
    const isFavorited = isLiked;
    return (
      <div className="bg-white w-full border-2 relative border-black rounded-3xl shadow-lg max-w-sm mx-auto">
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
          <button
            onClick={() => toggleLike(pet.id)}
            className="absolute top-9 md:top-2 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
          >
            <FaRegHeart className={`w-5 h-5 ${isFavorited ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
          </button>
          {/* Ready for Adoption badge */}
          {isReady && (
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
              {gender === 'female' ? (
                <IoMdFemale className="text-[#F2786D] w-8 h-8"/>
              ) : (
                <IoMdMale className="text-[#4FA3D1] w-8 h-8"/>
              )}
            </div>
          </div>
          {/* Breed */}
          <p className="text-gray-600 font-medium mb-3">{breed}</p>
          {/* Description */}
          <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3 min-h-16 text-justify">{pet.description || 'No description.'}</p>
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
    <div>
        <Navbar />

        <div 
            className="relative min-h-screen bg-gray-100 flex items-center"
            style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>

            <div className="w-full max-w-7xl mx-auto z-20 overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Left content */}
                <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
                    <h1 className="text-5xl fredoka sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-wider mb-4">
                        <span className="text-white block">Find Your Perfect</span>
                        <span className="text-[#F2786D]">
                            Companion
                        </span>
                    </h1>
                    
                    <p className="text-[#E9E9E9] text-lg sm:text-xl lg:text-2xl mb-8 max-w-md mx-auto lg:mx-0 port-lligat-slab-regular tracking-wide">
                    You can make a difference in their lives!!
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-[#4f8ed1] transition-all duration-300 text-sm sm:text-base hover:shadow-lg transform hover:-translate-y-1">
                        Browse Pets 
                    </button>
                    <button
                      className="px-6 py-3 shadow-lg bg-[#4FA3D1] hover:bg-[#4f8ed1] text-white rounded-2xl font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base transform hover:-translate-y-1"
                      onClick={() => setShowTakeQuiz(true)}
                    >
                        Take the Matchy Quiz
                    </button>
                    </div>
                </div>
                </div>
            </div>

            <div className="pointer-events-none absolute left-0 bottom-0 w-full h-[80%] z-10">
                <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
        </div>

        <Process />

        {/* CardSection background decoration */}
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
            <p className="text-sm md:text-base text-[#666666] mt-2">Browse our available pets for adoption</p>
          </div>
          <div className="bg-[#E7F5FE] border-1 border-[#4FA3D1] text-white rounded-lg px-6 py-8 mb-8 flex items-center justify-between">
            <div>
                <h2 className="font-extrabold text-2xl mb-1 text-[#146FA1]">Not sure which pet is right for you?</h2>
                <p className="text-sm opacity-90 text-[#3FA0D5]">Take our Matchy Quiz to find your pet soulmate!</p>
            </div>
            <button className="bg-[#4FA3D1] text-white px-4 py-2 rounded-2xl  font-medium hover:bg-[#3f96d5] transition-colors"
                    onClick={() => setShowTakeQuiz(true)}>
                Take the Matchy Quiz
            </button>
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

        <footer className='bg-[#4FA3D1] text-white py-8 dosis'>
            <div className='max-w-7xl mx-auto text-center'>
                <h1 className='text-4xl font-bold'>Ready to Adopt?</h1>
                <p className='text-md font-light mb-4'>Start your application today and take the first step towards bringing home your new best friend.</p>
                
                <button
                  className='bg-white text-[#4FA3D1] px-4 py-2 rounded-2xl font-semibold text-xl hover:bg-gray-100 mt-4 hover:shadow-lg transform hover:-translate-y-1 duration-300 transition-all'
                  onClick={() => setShowApplication(true)}
                >
                  Start Your Application
                </button>
                
            </div>
        </footer>

        <ApplicationModal open={showApplication} onClose={() => setShowApplication(false)} />
        <TakeQuizModal open={showTakeQuiz} onClose={() => setShowTakeQuiz(false)} />
    </div>
  )
}
