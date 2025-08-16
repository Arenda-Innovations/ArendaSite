import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const projectCategories = [
    {
      name: "AI Projects",
      description: "Artificial Intelligence & Machine Learning",
      href: "/ai",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Engineering",
      description: "Hardware & Physical Systems",
      href: "/engineering", 
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Social Impact",
      description: "Healthcare & Community Solutions",
      href: "/social-impact",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all relative group"
        onMouseEnter={() => setIsOpen(true)}
      >
        Projects
        <svg 
          className={`w-4 h-4 ml-1 inline transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-black/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="p-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-white mb-1">Our Projects</h3>
              <p className="text-sm text-gray-400">Explore our innovative research areas</p>
            </div>
            
            <div className="space-y-3">
              {projectCategories.map((category, index) => (
                <Link
                  key={index}
                  to={category.href}
                  onClick={() => setIsOpen(false)}
                  className="block p-3 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-200 hover:bg-gray-800/50 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                    <svg 
                      className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <Link
                to="/research"
                onClick={() => setIsOpen(false)}
                className="block text-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                View All Research →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsDropdown;
