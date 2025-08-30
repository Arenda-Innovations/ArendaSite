import React, { useState } from 'react';


const ReachOutNow = () => {
  const [activeTab, setActiveTab] = useState('student');

  const studentContent = (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-3">For Students</h3>
      <p className="text-white/80 text-sm mb-4">
        Join our research programs and work on cutting-edge projects
      </p>

      <div className="bg-white/10 rounded-lg p-3 mb-6">
        <h4 className="font-semibold text-white mb-2 text-sm">What You'll Get:</h4>
        <ul className="text-white/80 space-y-1 text-left text-xs max-w-xs mx-auto">
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
        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-sm
          hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Apply as Student
      </a>
    </div>
  );

  const contributorContent = (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-3">For Contributors</h3>
      <p className="text-white/80 text-sm mb-4">
        Support our mission and help shape the future of innovation
      </p>

      <div className="bg-white/10 rounded-lg p-3 mb-6">
        <h4 className="font-semibold text-white mb-2 text-sm">How You Can Help:</h4>
        <ul className="text-white/80 space-y-1 text-left text-xs max-w-xs mx-auto">
          <li>• Mentor students</li>
          <li>• Provide resources</li>
          <li>• Share expertise</li>
          <li>• Support research initiatives</li>
        </ul>
      </div>

      <a 
        href="https://forms.gle/CwSMa81S3iAhXUPv6" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm
          hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Become a Contributor
      </a>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Content Area with fixed height */}
      <div className="h-[600px] w-full md:w-[425px] flex flex-col items-center justify-start">
        {activeTab === 'student' ? studentContent : contributorContent}

        {/* Tabs closer to the button */}
        <div className="flex justify-center mt-8">
          <div className="flex bg-white/10 rounded-xl p-1 relative">
            {/* Animated Background Slider */}
            <div 
              className={`absolute top-8 bottom-8 mt-4 rounded-lg transition-all duration-500 ease-out ${
                activeTab === 'student' 
                  ? 'left-1 w-[calc(50%-2px)] bg-blue-500 shadow-lg' 
                  : 'left-[calc(50%+1px)] w-[calc(50%-2px)] bg-green-500 shadow-lg'
              }`}
            />
            
            <button
              onClick={() => setActiveTab('student')}
              className={`relative z-10 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeTab === 'student'
                  ? 'text-white transform scale-105'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab('contributor')}
              className={`relative z-10 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300  ${
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
    </div>
  );
};

export default ReachOutNow;


