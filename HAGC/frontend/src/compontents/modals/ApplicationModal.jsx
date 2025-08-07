import React, { useState, useRef } from 'react';
import { X, User, Phone, Heart, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Personal Information',
    icon: User,
    content: (formData, setFormData) => (
      <>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Full Name</label>
            <input 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all" 
              placeholder="Enter your full name"
              value={formData.fullName || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Email Address</label>
            <input 
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all" 
              placeholder="your@email.com"
              value={formData.email || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Contact Details',
    icon: Phone,
    content: (formData, setFormData) => (
      <>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
            <input 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all" 
              placeholder="+1 (555) 123-4567"
              value={formData.phone || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Address</label>
            <input 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all" 
              placeholder="123 Main St, City, State 12345"
              value={formData.address || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            />
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Pet Preferences',
    icon: Heart,
    content: (formData, setFormData) => (
      <>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Preferred Pet Type</label>
            <select 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all bg-white"
              value={formData.petType || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, petType: e.target.value }))}
            >
              <option value="">Select a pet type</option>
              <option value="dog">Dog</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Why do you want to adopt?</label>
            <textarea 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all resize-none" 
              rows={4} 
              placeholder="Share your motivation for pet adoption..."
              value={formData.reason || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
            />
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Confirmation',
    icon: CheckCircle,
    content: (formData, setFormData, handleSubmit, isSubmitting) => (
      <>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-gray-900 mb-3">Application Summary</h3>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{formData.fullName || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{formData.email || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium">{formData.phone || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pet Type:</span>
                <span className="font-medium capitalize">{formData.petType || 'Not selected'}</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 text-center">
            Please review your information above. Once submitted, our team will contact you within 24-48 hours.
          </p>
          
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-[#4FA3D1] text-white font-semibold hover:bg-[#3d8bb8] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shadow-lg"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <CheckCircle size={20} />
                <span>Submit Application</span>
              </>
            )}
          </button>
        </div>
      </>
    )
  }
];

export default function ApplicationModal({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef();

  // Close on outside click
  React.useEffect(() => {
    function handleClick(e) {
      if (open && modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form and close
      setStep(0);
      setFormData({});
      onClose();
      // You could show a success message here
    }, 2000);
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div 
        ref={modalRef} 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col relative animate-in slide-in-from-bottom-4 duration-300"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4FA3D1] to-[#5fb3e1] text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Heart size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Pet Adoption Application</h2>
              <p className="text-white/80 text-sm">Step {step + 1} of {steps.length}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Stepper */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            {steps.map((s, idx) => {
              const IconComponent = s.icon;
              const isActive = idx <= step;
              const isCurrent = idx === step;
              
              return (
                <React.Fragment key={s.title}>
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#4FA3D1] text-white shadow-lg' 
                          : 'bg-gray-200 text-gray-500'
                      } ${isCurrent ? 'scale-110 ring-4 ring-[#4FA3D1]/20' : ''}`}
                    >
                      <IconComponent size={18} />
                    </div>
                    <div className={`mt-2 text-xs font-medium transition-colors ${
                      isActive ? 'text-[#4FA3D1]' : 'text-gray-400'
                    }`}>
                      {s.title.split(' ')[0]}
                    </div>
                  </div>
                  {idx < steps.length - 1 && (
                    <div 
                      className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${
                        idx < step ? 'bg-[#4FA3D1]' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{steps[step].title}</h3>
            <div className="w-12 h-1 bg-[#4FA3D1] rounded-full"></div>
          </div>
          
          <div className="animate-in fade-in-50 duration-300">
            {steps[step].content(formData, setFormData, handleSubmit, isSubmitting)}
          </div>
        </div>

        {/* Navigation */}
        <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
          <div className="flex justify-between items-center">
            <button
              className="px-4 py-2 rounded-xl inline-flex items-center space-x-2 hover:bg-gray-200 text-gray-600 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              onClick={prevStep}
              disabled={step === 0}
            >
              <ArrowLeft size={16} />
              <span>Previous</span>
            </button>
            
            {step < steps.length - 1 && (
              <button
                className="px-6 py-3 rounded-xl bg-[#4FA3D1] text-white font-semibold hover:bg-[#3d8bb8] transition-all hover:scale-105 active:scale-95 flex items-center space-x-2 shadow-lg"
                onClick={nextStep}
              >
                <span>Next</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}