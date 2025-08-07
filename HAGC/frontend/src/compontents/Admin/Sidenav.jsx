import React from "react";
import Logo from "@/assets/Logo.svg";
import { FaPaw, FaCog } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { BsPostcard } from "react-icons/bs";
import { BiDonateHeart } from "react-icons/bi";
import { TbDatabase } from "react-icons/tb";

const links = [
  { name: "Dashboard", key: "dashboard", icon: <LuLayoutDashboard /> },
  { name: "Pet Management", key: "pet", icon: <FaPaw /> },
  { name: "Messages", key: "messages", icon: <AiOutlineMessage /> },
  { name: "Content Panel", key: "content", icon: <BsPostcard /> },
  { name: "Donation & Finance", key: "donation", icon: <BiDonateHeart /> },
  { name: "Data Management", key: "data", icon: <TbDatabase /> },
  { name: "Settings", key: "settings", icon: <FaCog /> },
];

const Sidenav = ({ activePage, setActivePage, sidebarOpen, setSidebarOpen }) => {
  return (
    <aside className={`bg-white shadow-lg h-screen fixed left-0 top-0 z-40 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} flex flex-col items-center py-6`}>
      <div className="flex items-center justify-between w-full px-4 mb-8">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <button onClick={() => setSidebarOpen((o) => !o)} className="ml-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      <nav className="flex-1 w-full">
        {links.map((link) => (
          <div key={link.key} className="relative group">
            <button
              onClick={() => setActivePage(link.key)}
              className={`w-full flex items-center gap-4 px-6 py-3 rounded-lg mb-2 font-medium transition-all duration-200 ${activePage === link.key ? 'bg-[#FDF8F1] text-[#4FA3D1]' : 'text-[#333333] hover:bg-gray-50'}`}
            >
              <span className="text-2xl">{link.icon}</span>
              {sidebarOpen && <span className="text-lg">{link.name}</span>}
            </button>
            {/* Tooltip */}
            {!sidebarOpen && (
              <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 bg-gray-900 text-white text-xs rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {link.name}
              </span>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidenav;
