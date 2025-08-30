import { navLists } from '../constants';
import { Link } from 'react-router-dom';
import ProjectsDropdown from './ProjectsDropdown';

const DesktopNavbar = () => {
  const renderNavLink = (nav) => {
    const baseClasses = "px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all";
    
    if (nav === "Contact") {
      return (
        <Link to="/contact">
          <div className={baseClasses}>{nav}</div>
        </Link>
      );
    } else if (nav === "Home") {
      return (
        <Link to="/">
          <div className={baseClasses}>{nav}</div>
        </Link>
      );
    } else if (nav === "Founders") {
      return (
        <Link to="/founder">
          <div className={baseClasses}>{nav}</div>
        </Link>
      );
    } else if (nav === "AI") {
      return (
        <Link to="/ai">
          <div className={baseClasses}>{nav}</div>
        </Link>
      );
    } else if (nav === "Engineering") {
      return (
        <Link to="/engineering">
          <div className={baseClasses}>{nav}</div>
        </Link>
      );
    } else if (nav === "Social Impact") {
      return (
        <Link to="/social-impact">
          <div className={baseClasses}>{nav}</div>
        </Link>
      );
    } else if (nav === "Labs") {
      return (
        <Link to="/labs">
          <div className={baseClasses}>{nav}</div>
        </Link>
      );
    } else {
      return (
        <a href={`#${nav.toLowerCase()}`}>
          <div className={baseClasses}>{nav}</div>
        </a>
      );
    }
  };

  return (
    <div className="flex flex-1 justify-center max-sm:hidden">
      {navLists.map((nav, index) => {
        // Create an array of items to render for this position
        const itemsToRender = [
          <div key={nav}>
            {renderNavLink(nav)}
          </div>
        ];
        
        // Insert Projects dropdown after Home
        if (nav === "Home") {
          itemsToRender.push(
            <div key="Projects">
              <ProjectsDropdown />
            </div>
          );
        }
        
        return itemsToRender;
      })}
    </div>
  );
};

export default DesktopNavbar;
