import React, { useState, useRef } from 'react';
import { X, Home, Heart, Users, CheckCircle, ArrowLeft, ArrowRight, Dog } from 'lucide-react';

const steps = [
  {
    title: 'Living Situation',
    icon: Home,
    content: (formData, setFormData) => (
      <>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">What type of home do you live in?</label>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: 'apartment', label: 'Apartment/Condo', description: 'Limited outdoor space' },
                { value: 'house_no_yard', label: 'House without yard', description: 'Indoor living primarily' },
                { value: 'house_small_yard', label: 'House with small yard', description: 'Some outdoor space' },
                { value: 'house_large_yard', label: 'House with large yard', description: 'Plenty of outdoor space' }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, livingSpace: option.value }))}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.livingSpace === option.value
                      ? 'border-[#4FA3D1] bg-[#4FA3D1]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-gray-900">{option.label}</div>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block mb-2 font-medium text-gray-700">How active are you?</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'low', label: 'Low Activity', color: 'bg-blue-100 text-blue-800', description: 'Prefer indoor activities' },
                { value: 'moderate', label: 'Moderate Activity', color: 'bg-green-100 text-green-800', description: 'Regular walks & some exercise' },
                { value: 'high', label: 'High Activity', color: 'bg-orange-100 text-orange-800', description: 'Daily runs, hiking, sports' }
              ].map((activity) => (
                <button
                  key={activity.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, activityLevel: activity.value }))}
                  className={`p-3 rounded-xl border-2 transition-all text-center ${
                    formData.activityLevel === activity.value
                      ? 'border-[#4FA3D1] bg-[#4FA3D1]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`text-xs font-medium px-2 py-1 rounded-full mb-1 ${activity.color}`}>
                    {activity.label}
                  </div>
                  <p className="text-xs text-gray-600">{activity.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Dog Preferences',
    icon: Heart,
    content: (formData, setFormData) => (
      <>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">What size dog are you looking for?</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { value: 'small', label: 'Small', description: 'Under 25 lbs' },
                { value: 'medium', label: 'Medium', description: '25-60 lbs' },
                { value: 'large', label: 'Large', description: '60-90 lbs' },
                { value: 'extra_large', label: 'Extra Large', description: 'Over 90 lbs' }
              ].map((size) => (
                <button
                  key={size.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, dogSize: option.value }))}
                  className={`p-3 rounded-xl border-2 transition-all text-center ${
                    formData.dogSize === size.value
                      ? 'border-[#4FA3D1] bg-[#4FA3D1]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-sm">{size.label}</div>
                  <p className="text-xs text-gray-600 mt-1">{size.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Age preference?</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'puppy', label: 'Puppy', description: 'Under 1 year' },
                { value: 'young_adult', label: 'Young Adult', description: '1-3 years' },
                { value: 'adult', label: 'Adult', description: '3-7 years' },
                { value: 'senior', label: 'Senior', description: '7+ years' },
                { value: 'any', label: 'Any Age', description: 'Open to all ages' }
              ].map((age) => (
                <button
                  key={age.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, dogAge: age.value }))}
                  className={`p-3 rounded-xl border-2 transition-all text-center ${
                    formData.dogAge === age.value
                      ? 'border-[#4FA3D1] bg-[#4FA3D1]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-sm">{age.label}</div>
                  <p className="text-xs text-gray-600">{age.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Energy level preference?</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'calm', label: 'Calm & Gentle', color: 'bg-blue-100 text-blue-800', description: 'Relaxed companion' },
                { value: 'moderate', label: 'Moderate Energy', color: 'bg-green-100 text-green-800', description: 'Balanced activity' },
                { value: 'energetic', label: 'High Energy', color: 'bg-yellow-100 text-yellow-800', description: 'Playful & active' }
              ].map((energy) => (
                <button
                  key={energy.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, energyLevel: energy.value }))}
                  className={`p-3 rounded-xl border-2 transition-all text-center ${
                    formData.energyLevel === energy.value
                      ? 'border-[#4FA3D1] bg-[#4FA3D1]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`text-xs font-medium px-2 py-1 rounded-full mb-1 ${energy.color}`}>
                    {energy.label}
                  </div>
                  <p className="text-xs text-gray-600">{energy.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Family & Experience',
    icon: Users,
    content: (formData, setFormData) => (
      <>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Do you have children at home?</label>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: 'no_children', label: 'No children', description: 'Adult-only household' },
                { value: 'young_children', label: 'Young children (under 5)', description: 'Toddlers and preschoolers' },
                { value: 'older_children', label: 'Older children (5+)', description: 'School-age children' },
                { value: 'mixed_ages', label: 'Mixed ages', description: 'Children of various ages' }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, children: option.value }))}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.children === option.value
                      ? 'border-[#4FA3D1] bg-[#4FA3D1]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-gray-900">{option.label}</div>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Do you have other pets?</label>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: 'no_pets', label: 'No other pets' },
                { value: 'dogs', label: 'Other dogs' },
                { value: 'cats', label: 'Cats' },
                { value: 'multiple_pets', label: 'Multiple different pets' }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, otherPets: option.value }))}
                  className={`p-3 rounded-xl border-2 transition-all text-left ${
                    formData.otherPets === option.value
                      ? 'border-[#4FA3D1] bg-[#4FA3D1]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-gray-900">{option.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Experience with dogs?</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'first_time', label: 'First Time', color: 'bg-purple-100 text-purple-800', description: 'New to dog ownership' },
                { value: 'some_experience', label: 'Some Experience', color: 'bg-blue-100 text-blue-800', description: 'Had dogs before' },
                { value: 'very_experienced', label: 'Very Experienced', color: 'bg-green-100 text-green-800', description: 'Longtime dog owner' }
              ].map((exp) => (
                <button
                  key={exp.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, experience: exp.value }))}
                  className={`p-3 rounded-xl border-2 transition-all text-center ${
                    formData.experience === exp.value
                      ? 'border-[#4FA3D1] bg-[#4FA3D1]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`text-xs font-medium px-2 py-1 rounded-full mb-1 ${exp.color}`}>
                    {exp.label}
                  </div>
                  <p className="text-xs text-gray-600">{exp.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Find Your Match!',
    icon: CheckCircle,
    content: (formData, setFormData, handleSubmit, isSubmitting) => (
      <>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-gray-900 mb-3">Your Quiz Answers</h3>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Living Space:</span>
                <span className="font-medium text-right capitalize">{formData.livingSpace?.replace('_', ' ') || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Activity Level:</span>
                <span className="font-medium capitalize">{formData.activityLevel || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Preferred Size:</span>
                <span className="font-medium capitalize">{formData.dogSize?.replace('_', ' ') || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Age Preference:</span>
                <span className="font-medium capitalize">{formData.dogAge?.replace('_', ' ') || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Energy Level:</span>
                <span className="font-medium capitalize">{formData.energyLevel || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Children:</span>
                <span className="font-medium capitalize">{formData.children?.replace('_', ' ') || 'Not specified'}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#4FA3D1]/10 to-[#5fb3e1]/10 border border-[#4FA3D1]/20 rounded-xl p-4 flex items-start space-x-3">
            <Heart className="text-[#4FA3D1] flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-[#4FA3D1] font-medium text-sm">Ready to Find Your Perfect Match!</p>
              <p className="text-gray-700 text-sm">We'll analyze your answers and show you dogs that would be perfect companions for your lifestyle.</p>
            </div>
          </div>
          
          <p className="text-gray-600 text-center text-sm">
            Click below to see your personalized dog matches based on your quiz responses.
          </p>
          
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-[#4FA3D1] text-white font-semibold hover:bg-[#3d8bb8] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shadow-lg"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Finding Your Matches...</span>
              </>
            ) : (
              <>
                <Dog size={20} />
                <span>Find My Perfect Dog Match!</span>
              </>
            )}
          </button>
        </div>
      </>
    )
  }
];

export default function TakeQuizModal({ open, onClose }) {
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
    
    // Simulate API call for finding matches
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form and close
      setStep(0);
      setFormData({});
      onClose();
      // You could redirect to a results page or show matches here
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
              <Dog size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Dog Matching Quiz</h2>
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