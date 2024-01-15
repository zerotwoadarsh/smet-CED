import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from '../assets/images/icon.jpg'

const navLinkStyles = ({ isActive }) => {
  return {
    textDecoration: isActive ? 'underline' : 'none'
  }
}


const DropdownMenu = ({ items }) => {
  return (
    <ul className="absolute top-full text-white p-2 shadow-md max-sm:right-16 w-max bg-green-800">
      {items.map((item, index) => (
        <NavLink style={navLinkStyles} to={item.to} className="text-black">
          <li key={index} className="submenu-item text-white hover:text-blue-900">
            {item.label}
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isCommetyDropdownOpen, setCommetyDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseOver = () => {
    console.log("Over")
    setAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setAboutDropdownOpen(false);
  };

  const handleMouseOverCommety = () => {
    setCommetyDropdownOpen(true);
  };

  const handleMouseLeaveCommety = () => {
    setCommetyDropdownOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const aboutDropdownItems = [
    { to: "/about/nit-kurukshetra", label: "About NIT Kurukshetra" },
    { to: "/about/kurukshetra", label: "About Kurukshetra" },
    { to: "/about/sdcee-23", label: "About SMET-24" },
  ];

  const commietyDropdownItems = [
    { to: "/committee/organizing", label: "Organizing Committee" },
    {
      to: "/committee/internal-advisory",
      label: "Internal Advisory Committee",
    },
    {
      to: "/committee/external-advisory",
      label: "External Advisory Committee",
    },
    { to: "/committee/technical", label: "Technical Committee" },
  ];

  return (
    <nav className="Navbar" >
      <div
        className="flex justify-between items-center h-10 max-md:h-[3.5rem] bg-green-800 w-[100vw] list-none max-lg:justify-end"
      >
        <div className="flex items-center justify-between m-auto max-lg:hidden">
          <li className="mr-6 relative">
            <NavLink style={navLinkStyles} to="/" className="text-white hover:text-blue-900">
              Home
            </NavLink>
          </li>
          <li className="mr-6 relative">
            <NavLink style={navLinkStyles} to="/conference-track" className="text-white hover:text-blue-900">
              Conference Track
            </NavLink>
          </li>
          <NavLink className="text-white hover:text-blue-900">
            <li className="mr-6 relative">
              <div
                className="relative"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                About
                {isAboutDropdownOpen && (
                  <DropdownMenu items={aboutDropdownItems} />
                )}
              </div>
            </li>
          </NavLink>
          <li className="mr-6 relative">
            <NavLink style={navLinkStyles} to="/registration-information" className="text-white hover:text-blue-900">
              Registration Information
            </NavLink>
          </li>

          <li className="mr-6 relative">
            <NavLink style={navLinkStyles} to="/submissions" className="text-white hover:text-blue-900">
              Submissions
            </NavLink>
          </li>
          <NavLink className="text-white hover:text-blue-900" onClick={handleMouseOverCommety}>
            <li
              className="mr-6 relative"

            >
              <div
                className="relative"
                onMouseOver={handleMouseOverCommety}
                onMouseLeave={handleMouseLeaveCommety}>
                Committee
                {isCommetyDropdownOpen && (
                  <DropdownMenu items={commietyDropdownItems} />
                )}
              </div>
            </li>
          </NavLink>

          <li className="mr-6 relative">
            <NavLink style={navLinkStyles} to="/sponsorship" className="text-white hover:text-blue-900">
              Sponsorship
            </NavLink>
          </li>

          <li className="relative">
            <NavLink style={navLinkStyles} to="/contact" className="text-white hover:text-blue-900">
              Contact
            </NavLink>
          </li>
        </div>

        <div
          className="cursor-pointer  text-white pr-8 hamburger md:hidden justify-between flex"
          onClick={handleMobileMenuToggle}
        >
          <div className="flex flex-row justify-between w-[90vw] items-center">
            <div className="">
              <img src={logo} width={120} height={120} className="mix-blend-color-burn"/>
            </div>
            <div className="">&#9776;</div>
          </div>

        </div>

        <div
          className={`flex flex-col justify-center items-center absolute top-10 bg-green-800 p-4 ${isMobileMenuOpen ? "block" : "hidden"
            } md:hidden`}
        >
          <NavLink to="/" className="text-white mb-2">
            Home
          </NavLink>
          <NavLink to="/conference-track" className="text-white mb-2">
            Conference Track
          </NavLink>
          <NavLink className="text-white mb-2">
            <div
              className="relative"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              About
              {isAboutDropdownOpen && (
                <DropdownMenu items={aboutDropdownItems} />
              )}
            </div>
          </NavLink>
          <NavLink to="/registration-information" className="text-white mb-2">
            Registration Information
          </NavLink>
          <NavLink to="/submissions" className="text-white mb-2">
            Submissions
          </NavLink>
          <NavLink className="text-white mb-2">
            <div
              className="relative"
              onMouseOver={handleMouseOverCommety}
              onMouseLeave={handleMouseLeaveCommety}>
              Committee
              {isCommetyDropdownOpen && (
                <DropdownMenu items={commietyDropdownItems} />
              )}
            </div>
          </NavLink>
          <NavLink to="/sponsorship" className="text-white mb-2">
            Sponsorship
          </NavLink>
          <NavLink to="/contact" className="text-white mb-2">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
