import React, { useState, useRef } from 'react';
import { X, MapPin, AlertTriangle, Phone, CheckCircle, ArrowLeft, ArrowRight, Shield } from 'lucide-react';

const steps = [
  {
    title: 'Location & Animal',
    icon: MapPin,
    content: (formData, setFormData) => (
      <>
        <div className="space-y-4">
          {/* Image Upload */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Upload Photo of Animal (optional)</label>
            <div className="flex items-center gap-4">
              {formData.imagePreview && (
                <img src={formData.imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-xl border" />
              )}
              <input
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#4FA3D1]/10 file:text-[#4FA3D1] hover:file:bg-[#4FA3D1]/20"
                onChange={e => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setFormData(prev => ({ ...prev, image: file, imagePreview: reader.result }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">A clear photo helps our team assess the situation faster.</p>
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Current Location</label>
            <input 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all" 
              placeholder="Where is the animal located?"
              value={formData.location || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            />
            <p className="text-xs text-gray-500 mt-1">Be as specific as possible (address, landmarks, etc.)</p>
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Type of Animal</label>
            <select 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all bg-white"
              value={formData.animalType || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, animalType: e.target.value }))}
            >
              <option value="">Select animal type</option>
              <option value="dog">Dog</option>
            </select>
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Condition Assessment',
    icon: AlertTriangle,
    content: (formData, setFormData) => (
      <>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Describe the Animal's Condition</label>
            <textarea 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all resize-none" 
              rows={4} 
              placeholder="Describe injuries, behavior, or any immediate concerns..."
              value={formData.condition || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Urgency Level</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800', description: 'Stable, no immediate danger' },
                { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800', description: 'Needs attention soon' },
                { value: 'high', label: 'High', color: 'bg-red-100 text-red-800', description: 'Emergency, immediate help needed' }
              ].map((urgency) => (
                <button
                  key={urgency.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, urgency: urgency.value }))}
                  className={`p-3 rounded-xl border-2 transition-all text-center ${
                    formData.urgency === urgency.value
                      ? 'border-[#4FA3D1] bg-[#4FA3D1]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`text-xs font-medium px-2 py-1 rounded-full mb-1 ${urgency.color}`}>
                    {urgency.label}
                  </div>
                  <p className="text-xs text-gray-600">{urgency.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Contact Information',
    icon: Phone,
    content: (formData, setFormData) => (
      <>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Your Name</label>
            <input 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all" 
              placeholder="Enter your full name"
              value={formData.name || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all" 
              placeholder="+1 (555) 123-4567"
              value={formData.phone || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Email Address (Optional)</label>
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
    title: 'Confirmation',
    icon: CheckCircle,
    content: (formData, setFormData, handleSubmit, isSubmitting) => (
      <>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-gray-900 mb-3">Rescue Request Summary</h3>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium text-right">{formData.location || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Animal:</span>
                <span className="font-medium capitalize">{formData.animalType || 'Not specified'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Urgency:</span>
                <span className={`font-medium px-2 py-1 rounded-full text-xs ${
                  formData.urgency === 'high' ? 'bg-red-100 text-red-800' :
                  formData.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  formData.urgency === 'low' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {formData.urgency ? formData.urgency.charAt(0).toUpperCase() + formData.urgency.slice(1) : 'Not set'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Contact:</span>
                <span className="font-medium">{formData.name || 'Not provided'}</span>
              </div>
            </div>
          </div>
          
          {formData.urgency === 'high' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3">
              <AlertTriangle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-red-800 font-medium text-sm">High Priority Rescue</p>
                <p className="text-red-700 text-sm">Our emergency team will be dispatched immediately upon submission.</p>
              </div>
            </div>
          )}
          
          <p className="text-gray-600 text-center text-sm">
            Our rescue team will be notified immediately and will contact you shortly to coordinate the rescue operation.
          </p>
          
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-[#4FA3D1] text-white font-semibold hover:bg-[#3d8bb8] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shadow-lg"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Submitting Rescue Request...</span>
              </>
            ) : (
              <>
                <Shield size={20} />
                <span>Submit Rescue Request</span>
              </>
            )}
          </button>
        </div>
      </>
    )
  }
];

export default function RescueModal({ open, onClose }) {
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
              <Shield size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Emergency Animal Rescue</h2>
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
                    <div className={`mt-2 text-xs font-medium transition-colors text-center ${
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