import { navLists } from '../constants';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 py-5 sm:px-10 px-5 flex justify-between items-center backdrop-blur-md bg-gradient-to-b from-zinc-900/90 to-transparent shadow-md"
      id="navbar"
    >
      <nav className="flex w-full max-w-screen-xl mx-auto">
        <Link to="/">
          <img src="/assets/images/ArendaLogo.svg" alt="Logo" width={24} height={28} />
        </Link>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav}>
              {nav === "Contact" ? (
                <Link to="/contact">
                  <div className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all">
                    {nav}
                  </div>
                </Link>
              ) : nav === "Home" ? (
                <Link to="/">
                  <div className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all">
                    {nav}
                  </div>
                </Link>
              ) : nav === "Founders" ? (
                <Link to="/founder">
                  <div className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all">
                    {nav}
                  </div>
                </Link>
              ) : nav === "A.I." ? (
                <Link to="/ai">
                  <div className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all">
                    {nav}
                  </div>
                </Link>
              ) : nav === "Engineering" ? (
                <Link to="/engineering">
                  <div className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all">
                    {nav}
                  </div>
                </Link>
              ) : nav === "Social Impact" ? (
                <Link to="/social-impact">
                  <div className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all">
                    {nav}
                  </div>
                </Link>
              ) : (
                <a href={`#${nav.toLowerCase()}`}>
                  <div className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all">
                    {nav}
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;