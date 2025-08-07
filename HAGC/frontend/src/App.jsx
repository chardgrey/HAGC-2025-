import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdoptAPet from './pages/AdoptAPet';
import Donate   from './pages/Donate';

// Admin Side
import Dashboard from './pages/admin/Dashboard';
import Donation from './pages/admin/Donation';
import ContentManagement from './pages/admin/ContentManagement';
import PetManagement from './pages/admin/PetManagement'; 
import DataManagement from './pages/admin/DataManagement';
import Message from './pages/admin/Message';
import Settings from './pages/admin/Settings';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adopt-a-pet" element={<AdoptAPet />} />
          <Route path="/donate" element={<Donate />} />

          {/* Admin Side Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/donation" element={<Donation />} />
          <Route path="/admin/content-management" element={<ContentManagement />} />
          <Route path="/admin/pet-management" element={<PetManagement />} />
          <Route path="/admin/data-management" element={<DataManagement />} />
          <Route path="/admin/messages" element={<Message />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
