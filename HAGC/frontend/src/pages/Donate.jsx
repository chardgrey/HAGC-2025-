import React, { useState } from 'react';
import Navbar from '@/compontents/layout/Navbar';
import gcash from '@/assets/Gcash.png';

const Donate = () => {
  const [selectedMethod, setSelectedMethod] = useState('gcash');
  const [amount, setAmount] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [goodsType, setGoodsType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setUploadedFile(null);
    const fileInput = document.getElementById('file-upload');
    if (fileInput) fileInput.value = '';
  };

  const handleDonateNow = () => {
    if (selectedMethod === 'gcash') {
      console.log('GCash donation:', { amount, uploadedFile });
      alert('GCash donation submitted!');
    } else {
      console.log('Goods donation:', { goodsType, quantity, description, uploadedFile });
      alert('Goods donation submitted!');
    }
  };

  const handleCancel = () => {
    setAmount('');
    setUploadedFile(null);
    setGoodsType('');
    setQuantity('');
    setDescription('');
    const fileInput = document.getElementById('file-upload');
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="min-h-screen dosis bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className='flex justify-center items-center'>
        <div className="bg-white mt-20 rounded-2xl shadow-xl border border-slate-100 p-8 w-full max-w-lg backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Make a Donation</h2>
            <p className="text-slate-600">Choose your preferred donation method</p>
          </div>
          {/* Payment Method Selection */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div
              className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                selectedMethod === 'gcash'
                  ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
              onClick={() => setSelectedMethod('gcash')}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  selectedMethod === 'gcash' ? 'bg-blue-100 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  <img src={gcash} alt="gcash icon" className='w-8 h-8'/>
                </div>
                <span className="font-semibold text-slate-700">GCash</span>
                <p className="text-xs text-slate-400">Online Payment</p>
                {selectedMethod === 'gcash' && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                selectedMethod === 'goods'
                  ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
              onClick={() => setSelectedMethod('goods')}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  selectedMethod === 'goods' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700">Goods</span>
                <p className="text-xs text-slate-400">(Food, Clothing, Shelter, etc)</p>
                {selectedMethod === 'goods' && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Dynamic Content */}
          <div className="space-y-6 mb-8">
            {selectedMethod === 'gcash' ? (
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Donation Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium">₱</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg font-medium"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Type of Goods
                  </label>
                  <select
                    value={goodsType}
                    onChange={(e) => setGoodsType(e.target.value)}
                    className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700"
                  >
                    <option value="">Select goods type</option>
                    <option value="food">🍎 Food Items</option>
                    <option value="clothing">👕 Clothing</option>
                    <option value="medical">🏥 Medical Supplies</option>
                    <option value="educational">📚 Educational Materials</option>
                    <option value="other">📦 Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Quantity/Amount
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 10 kg, 5 pieces, 2 boxes"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Description
                  </label>
                  <textarea
                    placeholder="Brief description of the goods..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>
            )}
          </div>
          {/* File Upload Section */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Upload Proof of Donation
            </label>
            <div className="relative">
              <div className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
                uploadedFile
                  ? 'border-green-300 bg-green-50'
                  : 'border-slate-300 hover:border-blue-400 hover:bg-blue-50'
              }`}>
                {uploadedFile ? (
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700 truncate max-w-xs mx-auto">
                        {uploadedFile.name}
                      </p>
                      <p className="text-sm text-green-600 mt-1">File uploaded successfully</p>
                    </div>
                    <button
                      onClick={handleRemoveFile}
                      className="inline-flex items-center space-x-2 text-red-500 hover:text-red-700 transition-colors font-medium"
                      type="button"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span>Remove</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700 mb-1">
                        Click to upload photo or receipt
                      </p>
                      <p className="text-sm text-slate-500">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                )}
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleCancel}
              className="flex-1 px-6 py-4 text-slate-600 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-all font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleDonateNow}
              className="flex-1 px-6 py-4 text-white bg-[#4FA3D1] rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;