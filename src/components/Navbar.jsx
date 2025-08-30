import { Link } from 'react-router-dom';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {

  return (
    <header
      className="fixed z-50 top-0 left-0 w-full  transparent-div backdrop-blur-md bg-black/95 sm:bg-gradient-to-b sm:from-zinc-900/90 sm:to-transparent shadow-md transition-all duration-300"
      id="navbar"
    >
      <nav className="flex w-full max-w-screen-xl mx-auto justify-between items-center py-5 sm:px-10 px-5 h-20">
        <Link to="/">
          <img src="/assets/images/ArendaLogo.svg" alt="Logo" width={24} height={28} />
        </Link>
        <DesktopNavbar />
        <MobileNavbar />
      </nav>
    </header>
  );
};

export default Navbar;