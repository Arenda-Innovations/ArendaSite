import { navLists } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const root = document.documentElement;
    if (isMobileMenuOpen) {
      root.style.setProperty('--navbar-height', '24rem');
    } else {
      root.style.setProperty('--navbar-height', '5rem');
    }

    return () => {
      root.style.setProperty('--navbar-height', '5rem');
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderNavLink = (nav, isMobile = false) => {
    const baseClasses = "px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all";
    const mobileClasses = "px-8 py-4 text-lg cursor-pointer text-white hover:text-blue transition-all border-b border-gray-700 last:border-b-0";
    
    const classes = isMobile ? mobileClasses : baseClasses;
    
    if (nav === "Contact") {
      return (
        <Link to="/contact" onClick={closeMobileMenu}>
          <div className={classes}>{nav}</div>
        </Link>
      );
    } else if (nav === "Home") {
      return (
        <Link to="/" onClick={closeMobileMenu}>
          <div className={classes}>{nav}</div>
        </Link>
      );
    } else if (nav === "Founders") {
      return (
        <Link to="/founder" onClick={closeMobileMenu}>
          <div className={classes}>{nav}</div>
        </Link>
      );
    } else if (nav === "A.I.") {
      return (
        <Link to="/ai" onClick={closeMobileMenu}>
          <div className={classes}>{nav}</div>
        </Link>
      );
    } else if (nav === "Engineering") {
      return (
        <Link to="/engineering" onClick={closeMobileMenu}>
          <div className={classes}>{nav}</div>
        </Link>
      );
    } else if (nav === "Social Impact") {
      return (
        <Link to="/social-impact" onClick={closeMobileMenu}>
          <div className={classes}>{nav}</div>
        </Link>
      );
    } else {
      return (
        <a href={`#${nav.toLowerCase()}`} onClick={closeMobileMenu}>
          <div className={classes}>{nav}</div>
        </a>
      );
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-b from-zinc-900/90 to-transparent shadow-md transition-all duration-300"
      id="navbar"
    >
      <nav className="flex w-full max-w-screen-xl mx-auto justify-between items-center py-5 sm:px-10 px-5 h-20">
        <Link to="/">
          <img src="/assets/images/ArendaLogo.svg" alt="Logo" width={24} height={28} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav}>
              {renderNavLink(nav, false)}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        id="mobile-menu"
        className={`sm:hidden overflow-hidden transition-all duration-300 bg-black/95 backdrop-blur-md ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col items-center justify-start space-y-0 w-full">
          {navLists.map((nav) => (
            <div key={nav} className="w-full text-center">
              {renderNavLink(nav, true)}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;