import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReachOutNow = () => {
  const [activeTab, setActiveTab] = useState('student');
  const navigate = useNavigate();

  const studentContent = (
    <div className="text-center px-2 sm:px-4 w-full max-w-md mx-auto">
      
      <h3 className="text-2xl sm:text-3xl md:text-2xl font-bold text-white mb-4 sm:mb-6">For Students</h3>
      <p className="text-white/80 text-base sm:text-lg md:text-base mb-6 sm:mb-8 leading-relaxed">
        Join our research programs and work on cutting-edge projects
      </p>
      
      <div className="bg-white/10 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg md:text-base">What You'll Get:</h4>
        <ul className="text-white/80 space-y-2 sm:space-y-3 text-left text-sm sm:text-base md:text-sm max-w-full">
          <li>• Hands-on research experience</li>
          <li>• Mentorship from experts</li>
          <li>• Access to advanced technology</li>
          <li>• Real-world project opportunities</li>
        </ul>
      </div>

      <a 
        href="https://forms.gle/CwSMa81S3iAhXUPv6" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg md:text-base
          hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
      >
        Apply as Student
      </a>
    </div>
  );

  const contributorContent = (
    <div className="text-center px-2 sm:px-4 w-full max-w-md mx-auto">
      
      <h3 className="text-2xl sm:text-3xl md:text-2xl font-bold text-white mb-4 sm:mb-6">For Contributors</h3>
      <p className="text-white/80 text-base sm:text-lg md:text-base mb-6 sm:mb-8 leading-relaxed">
        Support our mission and help shape the future of innovation
      </p>
      
      <div className="bg-white/10 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg md:text-base">How You Can Help:</h4>
        <ul className="text-white/80 space-y-2 sm:space-y-3 text-left text-sm sm:text-base md:text-sm max-w-full">
          <li>• Mentor students</li>
          <li>• Provide resources</li>
          <li>• Share expertise</li>
          <li>• Support research initiatives</li>
        </ul>
      </div>

      <button 
        onClick={() => navigate('/contact')}
        className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg md:text-base
          hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto cursor-pointer"
      >
        Become a Contributor
      </button>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col">
      {/* Content Area */}
      <div className="flex-1 min-h-[320px] sm:min-h-[280px] md:min-h-[240px] flex items-center justify-center px-4 sm:px-6 py-4 sm:py-6">
        {activeTab === 'student' ? studentContent : contributorContent}
      </div>

      {/* Tabs at Bottom */}
      <div className="flex justify-center mt-4 sm:mt-6 pt-2 sm:pt-4 pb-2">
                <div className="flex bg-white/10 rounded-xl p-1 relative w-full max-w-sm sm:max-w-xs md:w-auto">
          {/* Animated Background Slider */}
          <div 
            className={`absolute top-1 bottom-1 rounded-lg transition-all duration-500 ease-out ${
              activeTab === 'student' 
                ? 'left-1 right-1/2 mr-0.5 bg-blue-500 shadow-lg' 
                : 'right-1 left-1/2 ml-0.5 bg-green-500 shadow-lg'
            }`}
          />
          
          <button
            onClick={() => setActiveTab('student')}
            className={`relative z-10 flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
              activeTab === 'student'
                ? 'text-white transform scale-105'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setActiveTab('contributor')}
            className={`relative z-10 flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
              activeTab === 'contributor'
                ? 'text-white transform scale-105'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
             Contributors
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReachOutNow;
