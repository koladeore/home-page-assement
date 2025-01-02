import { useState } from "react";

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };
  const hamburgerIcon = (
    <button
      className="md:hidden flex flex-col space-y-1 mt-2"
      aria-label="Toggle Mobile Menu"
      onClick={toggleMobileNav}
    >
      <span className="w-6 h-1 bg-gray-600"></span>
      <span className="w-6 h-1 bg-gray-600"></span>
      <span className="w-6 h-1 bg-gray-600"></span>
    </button>
  );
  const closeIcon = (
    <button
      className="md:hidden flex items-center"
      aria-label="Close Mobile Menu"
      onClick={() => setIsMobileNavOpen(false)}
    >
      <svg
        className="w-6 h-6 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="flex justify-center font-redhat mt-6">
          <nav className="border-2 border-[#E0E2E6] rounded-full shadow-sm items-center justify-center w-[80%] p-1">
            <div className="container mx-auto flex  p-2 sm:justify-between">
              {/* Logo */}
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="w-12 h-12 ml-1"
              />
              <ul className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-12 text-[#121212] font-[400] text-xs lg:text-lg">
                <li className="hover:text-[#CB6686]">
                  <a href="#">Home</a>
                </li>
                <li className="flex items-center hover:text-[#CB6686]">
                  <a href="#" className="pr-2">Our Services</a>
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </li>
                <li className="flex items-center hover:text-[#CB6686]">
                  <a href="#" className="pr-2">Domains</a>
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </li>
                <li className="flex items-center hover:text-[#CB6686]">
                  <a href="#" className="pr-2">Pages</a>
                  <svg
                    className="w-4 h-4 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </li>
                <img src="/images/Nav-frame.svg"  className="w-10 h-10" />
              </ul>
              
              <ul className="hidden md:flex items-center gap-4 lg:gap-10 text-[#121212] font-[400] text-sm">

                <li>
                  <button className="hover:bg-gray-700 px-4 py-2 rounded-full bg-[#1E222F] text-[#FFFFFF] text-lg ml-4 lg:ml-10">
                    Sign in
                  </button>
                </li>
                <li>
                  <button className="bg-[#CB6686] text-[#FFFFFF] text-lg px-4 py-2 rounded-full">
                    Get started
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between m-4">
          {/* Logo */}
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="w-10 h-10 mt-[-2px]"
          />
          {isMobileNavOpen ? closeIcon : hamburgerIcon}
        </div>
        {isMobileNavOpen && (
          <div
            onClick={() => setIsMobileNavOpen(false)}
            className="fixed w-full h-full top-0 left-0 bg-black/25 z-50 md:hidden overflow-hidden"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute h-full left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10"
            >
              <ul className="space-y-6 text-[#121212] font-[400] text-lg text-center p-8 mt-10">
                <li className="hover:text-[#CB6686]" onClick={() => setIsMobileNavOpen(false)}>
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-[#CB6686]" onClick={() => setIsMobileNavOpen(false)}>
                  <a href="#">Our Services</a>
                </li>
                <li className="hover:text-[#CB6686]" onClick={() => setIsMobileNavOpen(false)}>
                  <a href="#">Domains</a>
                </li>
                <li className="hover:text-[#CB6686]" onClick={() => setIsMobileNavOpen(false)}>
                  <a href="#">Pages</a>
                </li>
                <li>
                  <button className="hover:bg-gray-700 px-4 py-2 rounded-full bg-[#1E222F] text-[#FFFFFF] text-sm">
                    Sign in
                  </button>
                </li>
                <li>
                  <button className="bg-[#CB6686] text-[#FFFFFF] px-4 py-2 rounded-full">
                    Get started
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
