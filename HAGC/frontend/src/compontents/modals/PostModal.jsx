import React, { useRef, useState } from 'react';
import { X, PenTool, Upload, Image, Hash, Eye, Send } from 'lucide-react';

export default function PostModal({ open, onClose }) {
  const modalRef = useRef();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);
  const [charCount, setCharCount] = useState(0);

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

  const handleContentChange = (e) => {
    setContent(e.target.value);
    setCharCount(e.target.value.length);
  };

  const handlePublish = async () => {
    if (!title.trim() || !content.trim()) return;
    
    setIsPublishing(true);
    
    // Simulate publishing
    setTimeout(() => {
      setIsPublishing(false);
      // Reset form
      setTitle('');
      setContent('');
      setCharCount(0);
      onClose();
    }, 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div 
        ref={modalRef} 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col relative animate-in slide-in-from-bottom-4 duration-300"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4FA3D1] to-[#5fb3e1] text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <PenTool size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Create New Post</h2>
              <p className="text-white/80 text-sm">Share your thoughts with the world</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#4FA3D1] to-[#5fb3e1] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              JD
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg">John Doe</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Publishing as John Doe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Title Input */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <Hash size={16} />
              <span>Post Title</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter an engaging title..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all text-lg"
            />
          </div>

          {/* Content Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <PenTool size={16} />
                <span>Content</span>
              </label>
              <span className="text-xs text-gray-500">
                {charCount} characters
              </span>
            </div>
            <div className="relative">
              <textarea
                value={content}
                onChange={handleContentChange}
                placeholder="Share your story, insights, or thoughts here..."
                rows={8}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4FA3D1]/50 focus:border-[#4FA3D1] transition-all resize-none leading-relaxed"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-[#4FA3D1] hover:bg-[#4FA3D1]/10 rounded-lg transition-all">
                  <Image size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-[#4FA3D1] hover:bg-[#4FA3D1]/10 rounded-lg transition-all">
                  <Upload size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Post Preview */}
          {(title || content) && (
            <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-[#4FA3D1]">
              <div className="flex items-center space-x-2 mb-3">
                <Eye size={16} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-600">Preview</span>
              </div>
              {title && (
                <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
              )}
              {content && (
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                  {content.substring(0, 150)}{content.length > 150 ? '...' : ''}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-end">
           
            <div className="flex items-center space-x-3">
              <button 
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePublish}
                disabled={!title.trim() || !content.trim() || isPublishing}
                className="px-6 py-3 bg-[#4FA3D1] text-white rounded-xl font-semibold hover:bg-[#3d8bb8] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 flex items-center space-x-2 shadow-lg"
              >
                {isPublishing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Publish Post</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}