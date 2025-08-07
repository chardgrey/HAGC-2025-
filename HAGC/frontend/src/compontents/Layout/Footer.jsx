import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/Logo2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-2xl border-t border-gray-300 text-gray-800">
      <hr className="border-t-[2px] border-[#00000043] w-full max-w-7xl mx-auto px-6 mt-4" />
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left section */}
        <div className="flex flex-col items-left gap-4 space-x-4">
          <img src={logo} alt="Logo" className="h-15 w-auto" />

           <Link to="/adopt-a-pet" className="bg-[#4FA3D1] text-white px-5 py-2 w-fit rounded-full shadow font-semibold hover:bg-opacity-90 transition transform hover:-translate-y-1">
            Adopt a pet
          </Link>
        </div>


        {/* Social Icons */}
        <div className="flex space-x-3 items-start">
          <a href="#" className="bg-[#4FA3D1] p-2 rounded-full text-white hover:opacity-80 transition">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="bg-[#4FA3D1] p-2 rounded-full text-white hover:opacity-80 transition">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="bg-[#4FA3D1] p-2 rounded-full text-white hover:opacity-80 transition">
            <FaXTwitter size={16} />
          </a>
        </div>
      </div>
      <hr className="border-t-[2px] border-[#00000043] w-full max-w-7xl mx-auto px-6 mt-4" />
      {/* Bottom copyright and links */}
      <div className="max-w-7xl mx-auto px-6 pb-4 pt-2 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-2 md:space-y-0">
        <p>Copyright © 2025. Capstone Inc.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Private Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;