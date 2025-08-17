import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const ProjectsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  const navigate = useNavigate();

  // GSAP animation for dropdown
  useEffect(() => {
    if (dropdownMenuRef.current) {
      if (isOpen) {
        // Opening animation - sliding out from under navbar
        gsap.fromTo(dropdownMenuRef.current, 
          {
            opacity: 0,
            scaleY: 0,
            transformOrigin: "top center"
          },
          {
            opacity: 1,
            scaleY: 1,
            duration: 0.3,
            ease: "power2.out"
          }
        );
      }
    }
  }, [isOpen]);

  // Handle hover events
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isOpen && dropdownMenuRef.current) {
      // Closing animation - sliding back under navbar
      gsap.to(dropdownMenuRef.current, {
        opacity: 0,
        scaleY: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => setIsOpen(false)
      });
    } else {
      setIsOpen(false);
    }
  };

  const handleNavigation = (path) => {
    if (dropdownMenuRef.current) {
      // Animate out before navigation - sliding back up
      gsap.to(dropdownMenuRef.current, {
        opacity: 0,
        y: -200,
        z: 40,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          navigate(path);
          setIsOpen(false);
        }
      });
    } else {
      navigate(path);
      setIsOpen(false);
    }
  };

  // (no fixed-position recalculation needed)

  const dropdownOptions = [
    {
      label: 'AI',
      path: '/ai',
      description: 'Artificial Intelligence Projects'
    },
    {
      label: 'Engineering',
      path: '/engineering',
      description: 'Engineering Solutions'
    },
    {
      label: 'Social Impact',
      path: '/social-impact',
      description: 'Social Impact Initiatives'
    }
  ];

    return (
    <div 
      className="relative hidden lg:block" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown Trigger */}
      <div
        className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all flex items-center space-x-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Projects</span>
      </div>

      {/* Dropdown Menu (absolute under trigger) */}
      {isOpen && (
        <div 
          ref={dropdownMenuRef}
          className="absolute top-full left-0 w-32 bg-black backdrop-blur-sm border-gray-700/50 z-40 opacity-0"
          style={{ paddingTop: '16px', height: '144px' }}
        >
          <div className="flex flex-col" style={{ height: '128px' }}>
            {dropdownOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(option.path)}
                className="flex-1 text-left px-4 py-2 hover:bg-gray-800/50 transition-colors duration-200 group first:mt-lg "
              >
                <div className="flex flex-col justify-center h-full">
                  <span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200 text-sm">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsDropdown;
