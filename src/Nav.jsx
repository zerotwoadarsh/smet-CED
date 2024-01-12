import { NavLink } from "react-router-dom";
import { useState } from "react";

const DropdownMenu = ({ items }) => {
  return (
    <ul className="submenu absolute top-full left-0 bg-white p-2 shadow-md">
      {items.map((item, index) => (
        <li key={index} className="submenu-item">
          <NavLink to={item.to} className="text-black">
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isCommetyDropdownOpen, setCommetyDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseOver = () => {
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
    { to: "/about/sdcee-23", label: "About SDCEE-23" },
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
    <nav>
      <div className={`flex justify-between items-center h-10 bg-lime-600 fixed w-[100vw] top-0 list-none`}>
        <div className="flex items-center">
          <li className="mr-6 relative">
            <NavLink to="/" className="text-white">
              Home
            </NavLink>
          </li>
          {/* Add more menu items as needed */}
          <li className="mr-6 relative">
          <NavLink to="/conference-track" className="text-white">
            Conference Track
          </NavLink>
        </li>

        <li className="mr-6 relative">
          <div
            className="relative"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="#" className="text-white">
              About
            </NavLink>
            {isAboutDropdownOpen && <DropdownMenu items={aboutDropdownItems} />}
          </div>
        </li>

        <li className="mr-6 relative">
          <NavLink to="/registration-information" className="text-white">
            Registration Information
          </NavLink>
        </li>

        <li className="mr-6 relative">
          <NavLink to="/submissions" className="text-white">
            Submissions
          </NavLink>
        </li>

        <li
          className="mr-6 relative"
          onMouseOver={handleMouseOverCommety}
          onMouseLeave={handleMouseLeaveCommety}
        >
          <NavLink to="/committee" className="text-white">
            Committee
          </NavLink>
          {isCommetyDropdownOpen && (
            <DropdownMenu items={commietyDropdownItems} />
          )}
        </li>

        <li className="mr-6 relative">
          <NavLink to="/sponsorships" className="text-white">
            Sponsorships
          </NavLink>
        </li>

        <li className="relative">
          <NavLink to="/contact" className="text-white">
            Contact
          </NavLink>
        </li>
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <div className="cursor-pointer text-white pr-4" onClick={handleMobileMenuToggle}>
          &#9776; {/* Hamburger Icon */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col items-end absolute top-10 right-0 bg-lime-600 p-4">
            {/* Render mobile menu items here */}
            {/* Example: */}
            <NavLink to="/mobile-link" className="text-white mb-2">
              Mobile Link
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};
