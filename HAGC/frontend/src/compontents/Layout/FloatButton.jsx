import React, { useState } from 'react';
import { FiPlus, FiMessageCircle, FiEdit3, FiFileText } from 'react-icons/fi';
import { BsFilePostFill } from "react-icons/bs";
import { AiOutlineForm } from "react-icons/ai";
import ApplicationModal from '../modals/ApplicationModal';
import RescueModal from '../modals/RescueModal';
import ChatModal from '../modals/ChatModal';
import PostModal from '../modals/PostModal';

const FloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(null); // 'rescue' | 'application' | 'post' | 'chat' | null

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = (type) => {
    setModal(type);
    setIsOpen(false);
  };

  const closeModal = () => setModal(null);

  const subButtons = [
    {
      id: 'rescue-form',
      label: 'Rescue Form',
      icon: <FiFileText size={30} />,
      onClick: () => openModal('rescue'),
    },
    {
      id: 'application-form',
      label: 'Application Form',
      icon: <AiOutlineForm size={30} />,
      onClick: () => openModal('application'),
    },
    {
      id: 'new-post',
      label: 'New Post (Blog)',
      icon: <BsFilePostFill size={30} />,
      onClick: () => openModal('post'),
    },
    {
      id: 'new-chat',
      label: 'New Chat',
      icon: <FiMessageCircle size={30} />,
      onClick: () => openModal('chat'),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Sub-buttons */}
      <div className={`mb-4 space-y-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {subButtons.map((button, index) => (
          <div
            key={button.id}
            className="flex items-center justify-end group"
            style={{ 
              animationDelay: `${index * 50}ms`,
              animation: isOpen ? 'slideInUp 0.3s ease-out forwards' : 'none'
            }}
          >
            {/* Label */}
            <div className="mr-3 px-3 py-2 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-sm font-medium text-gray-700 pointer-events-none">
              {button.label}
            </div>
            
            {/* Sub-button */}
            <button
              onClick={button.onClick}
              className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              style={{ backgroundColor: '#4FA3D1' }}
              aria-label={button.label}
            >
              <span className="text-white">
                {button.icon}
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Main floating button */}
        <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
            className="group relative flex h-15 w-15 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r 
                        dark:from-[#070e41] dark:to-[#263381] from-[#e7a19a] to-[#F2786D] 
                        font-medium text-white border-2 border-[#e25448] 
                        transition-all duration-300 hover:w-40"
            >
            {/* Text: appears on hover, centered */}
            <span className="absolute left-0 right-10 mx-auto text-center opacity-0 text-sm font-semibold transition-all duration-300 group-hover:opacity-100">
                Action Button
            </span>

            {/* Icon: moves from center to right on hover */}
            <span
                className="flex items-center justify-center transition-all duration-300 
                        group-hover:ml-auto group-hover:mr-2"
            >
                <FiPlus
                size={40}
                className={`transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                }`}
                />
            </span>
        </button>

      {/* Modals */}
      <ApplicationModal open={modal === 'application'} onClose={closeModal} />
      <RescueModal open={modal === 'rescue'} onClose={closeModal} />
      <PostModal open={modal === 'post'} onClose={closeModal} />
      <ChatModal open={modal === 'chat'} onClose={closeModal} />

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive adjustments for small devices */
        @media (max-width: 640px) {
          .fixed {
            bottom: 1rem;
            right: 1rem;
          }
        }

        @media (max-width: 480px) {
          .fixed {
            bottom: 0.75rem;
            right: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatButton;