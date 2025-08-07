import React, { useState } from "react";
import Navbar from "@/compontents/Admin/Navbar";
import Sidenav from "@/compontents/Admin/Sidenav";
import PetManagement from "./PetManagement";
import Message from "./Message";
import ContentManagement from "./ContentManagement";
import Settings from "./Settings";
import Donation from "./Donation";
import DataManagement from "./DataManagement";
import { FaPaw, FaHandHoldingHeart, FaDonate } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";

const pageComponents = {
  dashboard: null, // Dashboard overview
  pet: PetManagement,
  messages: Message,
  content: ContentManagement,
  settings: Settings,
  donation: Donation,
  data: DataManagement,
};

const cardData = [
  {
    title: "Total Pets",
    value: 120,
    icon: <FaPaw className="text-white text-3xl" />, 
    color: "bg-[#4FA3D1]"
  },
  {
    title: "Pending Adoption",
    value: 8,
    icon: <SiGoogleforms className="text-white text-3xl" />, 
    color: "bg-[#F2786D]"
  },
  {
    title: "Rescue Requests",
    value: 15,
    icon: <FaHandHoldingHeart className="text-white text-3xl" />, 
    color: "bg-[#FF814C]"
  },
  {
    title: "Donation Received",
    value: "$2,500",
    icon: <FaDonate className="text-white text-3xl" />, 
    color: "bg-[#6BBF59]"
  },
];

const recentActivity = [
  { text: "Bella was adopted", time: "2 hours ago" },
  { text: "New rescue request received", time: "5 hours ago" },
  { text: "Donation received from John Doe", time: "1 day ago" },
  { text: "Max added to pet list", time: "2 days ago" },
];

const quickActions = [
  "Add Pet", "Review Requests", "Send Message", "Update Content"
];


export default function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Render dashboard overview if activePage is "dashboard"
  const renderDashboard = () => (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        Dashboard Overview
      </h1>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
        {cardData.map((card, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg flex items-center gap-4 py-6 px-6 w-full">
                {/* Icon */}
                <div className={`w-14 h-14 flex items-center justify-center rounded-full ${card.color}`}>
                    {card.icon}
                </div>

                {/* Text content */}
                <div className="flex flex-col">
                    <div className="text-2xl font-bold text-gray-800">
                    {card.value}
                    </div>
                    <div className="text-gray-500 font-medium">
                    {card.title}
                    </div>
                    <div className="text-green-500 text-sm font-semibold mt-5">
                    +5% This week
                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions in a row */}
      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        {/* Recent Activity Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1" style={{flexBasis: '70%'}}>
          <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-4">
                Recent Activity
              </h2>
              <button className="text-sm font-semibold text-[#4FA3D1] underline">View all</button>
          </div>
          <ul className="space-y-2">
            {recentActivity.map((act, idx) => (
              <li key={idx} className="bg-[#FDF8F1] rounded-lg px-4 py-3 flex justify-between items-center shadow">
                <span className="text-gray-700">{act.text}</span>
                <span className="text-gray-400 text-sm">{act.time}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Actions Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-shrink-0" style={{flexBasis: '30%'}}>
          <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-4">
            Quick Actions
          </h2>
          <div className="flex flex-col gap-4">
            {quickActions.map((action, idx) => (
              <button 
                key={idx} 
                className="bg-[#4FA3D1] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#3b8bb7] transition-all w-full"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  // Get the page component for the active page
  const PageComponent = pageComponents[activePage];

  return (
    <div className="bg-[#FDF8F1] min-h-screen flex">
      {/* Sidenav with dynamic width */}
      <div className={`fixed top-0 left-0 h-full z-40 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <Sidenav 
          activePage={activePage} 
          setActivePage={setActivePage} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />
      </div>
      {/* Main content area that adjusts based on sidebar */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Sticky Navbar */}
        <div className="w-full sticky top-0 z-30">
          <Navbar adminName="Jane Doe" />
        </div>
        {/* Main content */}
        <main className="flex-1 p-4 sm:p-8">
          {activePage === "dashboard"
            ? renderDashboard()
            : PageComponent && (
                <PageComponent />
              )}
        </main>
      </div>
    </div>
  );
}