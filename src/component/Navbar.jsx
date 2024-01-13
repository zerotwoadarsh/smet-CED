import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const DropdownMenu = ({ items }) => {
  return (
    <ul className="submenu absolute top-full left-0  text-white p-2 shadow-md w-max bg-lime-600">
      {items.map((item, index) => (
          <NavLink to={item.to} className="text-black">
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
    <nav>
      <div
        className={`flex justify-between items-center h-10 bg-lime-600 fixed w-[100vw] top-0 list-none max-lg:justify-end z-100`}
      >
        <div className="flex items-center justify-between m-auto max-lg:hidden">
          <li className="mr-6 relative">
            <NavLink to="/" className="text-white hover:text-blue-900">
              Home
            </NavLink>
          </li>
          <li className="mr-6 relative">
            <NavLink to="/conference-track" className="text-white hover:text-blue-900">
              Conference Track
            </NavLink>
          </li>
              <NavLink to="#" className="text-white hover:text-blue-900">
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
            <NavLink to="/registration-information" className="text-white hover:text-blue-900">
              Registration Information
            </NavLink>
          </li>

          <li className="mr-6 relative">
            <NavLink to="/submissions" className="text-white hover:text-blue-900">
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
            <NavLink to="/sponsorships" className="text-white hover:text-blue-900">
              Sponsorships
            </NavLink>
          </li>

          <li className="relative">
            <NavLink to="/contact" className="text-white hover:text-blue-900">
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
          className={`flex flex-col  justify-center items-center absolute top-10 right-0 bg-lime-600 p-4 ${
            isMobileMenuOpen ? "block" : "hidden"
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

    //     <nav>
    //   <div className={`flex justify-between items-center h-16 bg-lime-600 fixed w-[100vw] top-0 list-none`}>

    //     {/* Add a logo */}
    //     <div className="flex items-center">
    //       {/* <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="Logo" className="h-8 w-8 mr-2" /> Adjust the size as needed */}

    //       <div className="flex-grow flex items-center justify-between">
    //         {/* Navigation items */}
    //         <li className="mr-6 relative">
    //           <NavLink to="/" className="text-white">
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="mr-6 relative">
    //           <NavLink to="/conference-track" className="text-white">
    //             Conference Track
    //           </NavLink>
    //         </li>
    //         <li className="mr-6 relative">
    //           <div
    //             className="relative"
    //             onMouseOver={handleMouseOver}
    //             onMouseLeave={handleMouseLeave}
    //           >
    //             <NavLink to="#" className="text-white">
    //               About
    //             </NavLink>
    //             {isAboutDropdownOpen && <DropdownMenu items={aboutDropdownItems} />}
    //           </div>
    //         </li>
    //         <li className="mr-6 relative">
    //           <NavLink to="/registration-information" className="text-white">
    //             Registration Information
    //           </NavLink>
    //         </li>
    //         <li className="mr-6 relative">
    //           <NavLink to="/submissions" className="text-white">
    //             Submissions
    //           </NavLink>
    //         </li>
    //         <li
    //           className="mr-6 relative"
    //           onMouseOver={handleMouseOverCommety}
    //           onMouseLeave={handleMouseLeaveCommety}
    //         >
    //           <NavLink to="/committee" className="text-white">
    //             Committee
    //           </NavLink>
    //           {isCommetyDropdownOpen && (
    //             <DropdownMenu items={commietyDropdownItems} />
    //           )}
    //         </li>
    //         <li className="mr-6 relative">
    //           <NavLink to="/sponsorships" className="text-white">
    //             Sponsorships
    //           </NavLink>
    //         </li>
    //         <li className="relative">
    //           <NavLink to="/contact" className="text-white">
    //             Contact
    //           </NavLink>
    //         </li>
    //       </div>
    //     </div>

    //     {/* Hamburger menu for mobile */}
    //     {/* <div className="cursor-pointer text-white pr-4 hamburger lg:hidden" onClick={handleMobileMenuToggle}>
    //       &#9776;
    //     </div> */}

    //     {/* Mobile menu */}
    //     {/* <div className={`flex flex-col justify-center items-center absolute top-16 right-0 bg-lime-600 p-4 ${isMobileMenuOpen ? 'block' : 'hidden' } lg:hidden`}>
    //       <NavLink to="/" className="text-white mb-2">
    //         Home
    //       </NavLink>
    //       <NavLink to="/conference-track" className="text-white mb-2">
    //         Conference Track
    //       </NavLink>
    //       <NavLink to="/registration-information" className="text-white mb-2">
    //         Registration Information
    //       </NavLink>
    //       <NavLink to="/submissions" className="text-white mb-2">
    //         Submissions
    //       </NavLink>
    //       <NavLink to="/sponsorships" className="text-white mb-2">
    //         Sponsorships
    //       </NavLink>
    //       <NavLink to="/contact" className="text-white mb-2">
    //         Contact
    //       </NavLink>
    //     </div> */}
    //   </div>
    // </nav>
  );
};
