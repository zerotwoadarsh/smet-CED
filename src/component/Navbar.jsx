import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinkStyles = ({ isActive }) => {
  return {
    textDecoration: isActive ? 'underline' : 'none'
  }
}


const DropdownMenu = ({ items }) => {
  return (
    <ul className="submenu absolute top-full left-0  text-white p-2 shadow-md w-max bg-green-800">
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
    <nav className="Navbar">
      <div
        className="flex justify-between items-center h-10 bg-green-800 w-[100vw] list-none max-lg:justify-end"
      >
        <div className="flex items-center justify-between m-auto max-lg:hidden">
          <li className="mr-6 relative">
            <NavLink style = {navLinkStyles} to="/" className="text-white hover:text-blue-900">
              Home
            </NavLink>
          </li>
          <li className="mr-6 relative">
            <NavLink style = {navLinkStyles} to="/conference-track" className="text-white hover:text-blue-900">
              Conference Track
            </NavLink>
          </li>
          <NavLink  to="#" className="text-white hover:text-blue-900">
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
            <NavLink style = {navLinkStyles} to="/registration-information" className="text-white hover:text-blue-900">
              Registration Information
            </NavLink>
          </li>

          <li className="mr-6 relative">
            <NavLink style = {navLinkStyles} to="/submissions" className="text-white hover:text-blue-900">
              Submissions
            </NavLink>
          </li>
          <li
            className="mr-6 relative"
            onMouseOver={handleMouseOverCommety}
            onMouseLeave={handleMouseLeaveCommety}
          >
            <NavLink to="#" className="text-white hover:text-blue-900">
              Committee
            </NavLink>
            {isCommetyDropdownOpen && (
              <DropdownMenu items={commietyDropdownItems} />
            )}
          </li>

          <li className="mr-6 relative">
            <NavLink style = {navLinkStyles} to="/sponsorships" className="text-white hover:text-blue-900">
              Sponsorships
            </NavLink>
          </li>

          <li className="relative">
            <NavLink style = {navLinkStyles} to="/contact" className="text-white hover:text-blue-900">
              Contact
            </NavLink>
          </li>
        </div>

        <div
          className="cursor-pointer  text-white pr-4 hamburger md:hidden"
          onClick={handleMobileMenuToggle}
        >
          &#9776;
        </div>

        <div
          className={`flex flex-col  justify-center items-center absolute top-10 right-0 bg-green-800 p-4 ${isMobileMenuOpen ? "block" : "hidden"
            } lg:hidden`}
        >
          <NavLink to="/" className="text-white mb-2">
            Home
          </NavLink>
          <NavLink to="/conference-track" className="text-white mb-2">
            Conference Track
          </NavLink>
          <NavLink to="/registration-information" className="text-white mb-2">
            Registration Information
          </NavLink>
          <NavLink to="/submissions" className="text-white mb-2">
            Submissions
          </NavLink>
          <NavLink to="/sponsorships" className="text-white mb-2">
            Sponsorships
          </NavLink>
          <NavLink to="/contact" className="text-white mb-2">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
