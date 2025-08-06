import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header
  className="fixed top-0 left-0 w-full z-50 py-5 sm:px-10 px-5 flex justify-between items-center backdrop-blur-md bg-gradient-to-b from-zinc-900/90 to-transparent shadow-md"
  id="navbar"
>

      <nav className="flex w-full max-w-screen-xl mx-auto">
        
        <img src="public/assets/images/ArendaLogo.svg" alt="Logo" width={24} height={28} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <a href={`#${nav}`}>
            <button>
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all">
              {nav}
            </div>
            </button>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;