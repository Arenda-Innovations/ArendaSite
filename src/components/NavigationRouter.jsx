import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLists } from '../constants';

const NavigationRouter = ({ 
  children,
  route = null,
  onNavigate,
  className = '',
  disabled = false
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route && !disabled) {
      navigate(route);
      if (onNavigate) {
        onNavigate();
      }
    }
  };

  return (
    <div 
      className={`${className} ${route && !disabled ? 'cursor-pointer' : ''}`}
      onClick={route && !disabled ? handleClick : undefined}
    >
      {children}
    </div>
  );
};

export const NavigationLinks = ({ 
  variant = 'default', 
  showActive = true, 
  className = '', 
  onNavigate,
  mobileFriendly = true,
  route = null
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOuterClick = () => {
    if (route) {
      navigate(route);
      if (onNavigate) {
        onNavigate();
      }
    }
  };

  const getBaseClasses = (isActive = false) => {
    const baseClasses = {
      default: `px-5 text-sm cursor-pointer transition-all ${
        isActive ? 'text-white font-semibold' : 'text-gray-500 hover:text-white'
      }`,
      minimal: `px-3 text-sm cursor-pointer transition-all ${
        isActive ? 'text-blue-400 font-medium' : 'text-gray-400 hover:text-blue-300'
      }`,
      card: `px-4 py-2 text-sm cursor-pointer transition-all rounded-lg ${
        isActive 
          ? 'bg-white/10 text-white font-medium shadow-lg' 
          : 'text-gray-300 hover:text-white hover:bg-white/5'
      }`
    };
    
    return baseClasses[variant] || baseClasses.default;
  };

  const getMobileClasses = (isActive = false) => {
    const mobileClasses = {
      default: `px-8 py-4 text-lg cursor-pointer transition-all border-b border-gray-700 last:border-b-0 ${
        isActive ? 'text-white font-semibold bg-white/5' : 'text-gray-500 hover:text-white'
      }`,
      minimal: `px-6 py-3 text-base cursor-pointer transition-all border-b border-gray-700 last:border-b-0 ${
        isActive ? 'text-blue-400 font-medium' : 'text-gray-400 hover:text-blue-300'
      }`,
      card: `px-6 py-4 text-base cursor-pointer transition-all border-b border-gray-700 last:border-b-0 ${
        isActive 
          ? 'bg-white/10 text-white font-medium' 
          : 'text-gray-300 hover:text-white hover:bg-white/5'
      }`
    };
    
    return mobileClasses[variant] || mobileClasses.default;
  };

  const handleNavigation = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  const renderNavLink = (nav, isMobile = false) => {
    const isActive = showActive && location.pathname === getRoutePath(nav);
    const classes = isMobile ? getMobileClasses(isActive) : getBaseClasses(isActive);
    
    const linkProps = {
      onClick: handleNavigation,
      className: classes
    };

    const routePath = getRoutePath(nav);
    
    if (routePath) {
      return (
        <Link to={routePath} {...linkProps}>
          {nav}
        </Link>
      );
    } else {
      return (
        <a href={`#${nav.toLowerCase().replace(/\s+/g, '-')}`} {...linkProps}>
          {nav}
        </a>
      );
    }
  };

  const getRoutePath = (nav) => {
    const routeMap = {
      'Home': '/',
      'Contact': '/contact',
      'Founders': '/founder',
      'A.I.': '/ai',
      'Engineering': '/engineering',
      'Social Impact': '/social-impact'
    };
    
    return routeMap[nav] || null;
  };

  const getContainerClasses = () => {
    const containerClasses = {
      default: 'flex flex-wrap justify-center gap-2',
      minimal: 'flex flex-wrap justify-center gap-1',
      card: 'flex flex-wrap justify-center gap-3'
    };
    
    return `${containerClasses[variant] || containerClasses.default} ${className}`;
  };

  const getMobileContainerClasses = () => {
    const mobileContainerClasses = {
      default: 'flex flex-col w-full',
      minimal: 'flex flex-col w-full',
      card: 'flex flex-col w-full space-y-2'
    };
    
    return mobileContainerClasses[variant] || mobileContainerClasses.default;
  };

  return (
    <div 
      className={`w-full ${route ? 'cursor-pointer' : ''}`}
      onClick={route ? handleOuterClick : undefined}
    >
      <div className={`${getContainerClasses()} max-sm:hidden`}>
        {navLists.map((nav) => (
          <div key={nav}>
            {renderNavLink(nav, false)}
          </div>
        ))}
      </div>

      {mobileFriendly && (
        <div className={`${getMobileContainerClasses()} sm:hidden`}>
          {navLists.map((nav) => (
            <div key={nav} className="w-full">
              {renderNavLink(nav, true)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationRouter; 