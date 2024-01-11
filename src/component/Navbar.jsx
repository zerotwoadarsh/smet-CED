import { NavLink } from 'react-router-dom'
import { useState } from 'react';

const DropdownMenu = ({ items }) => {
    return (
        <ul className="submenu hidden absolute top-full left-0 bg-white p-2 shadow-md">
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

    const handleMouseOver = () => {
        setAboutDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setAboutDropdownOpen(false);
    };


    const aboutDropdownItems = [
        { to: '/about/nit-kurukshetra', label: 'About NIT Kurukshetra' },
        { to: '/about/kurukshetra', label: 'About Kurukshetra' },
        { to: '/about/sdcee-23', label: 'About SDCEE-23' },
    ];

    return (
        <nav>
            <div className=" flex justify-center align-baseline h-10 bg-lime-600  fixed w-full top-0 list-none">

                <li className="mr-6 relative flex items-center hover:bg-lime-800 p-2">
                    <NavLink to="/" className="text-white  hover:text-white">Home</NavLink>
                </li>

                <li className="mr-6 relative flex items-center hover:bg-lime-800 p-2">
                    <NavLink to="/conference-track" className="text-white hover:text-white">Conference Track</NavLink>
                </li>

                <li className="mr-6 relative flex items-center hover:bg-lime-800 p-2">
                    <div
                        className="relative"
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                    >
                        <NavLink to="/about" className="text-white hover:text-white">
                            About
                        </NavLink>
                        {isAboutDropdownOpen && <DropdownMenu items={aboutDropdownItems} />}
                    </div>
                </li>

                <li className="mr-6 relative flex items-center hover:bg-lime-800 p-2">
                    <NavLink to="/registration-information" className="text-white hover:text-white">Registration Information</NavLink>
                </li>

                <li className="mr-6 relative flex items-center hover:bg-lime-800 p-2">
                    <NavLink to="/submissions" className="text-white hover:text-white">Submissions</NavLink>
                </li>

                <li className="mr-6 relative flex items-center hover:bg-lime-800 p-2">
                    <NavLink to="/committee" className="text-white hover:text-white">Committee</NavLink>
                    <ul className="submenu hidden absolute top-full left-0 bg-white p-2 shadow-md">
                        <li className="submenu-item"><NavLink to="/committee/organizing" className="text-white">Organizing Committee</NavLink></li>
                        <li className="submenu-item"><NavLink to="/committee/internal-advisory" className="text-white">Internal Advisory Committee</NavLink></li>
                        <li className="submenu-item"><NavLink to="/committee/external-advisory" className="text-white">External Advisory Committee</NavLink></li>
                        <li className="submenu-item"><NavLink to="/committee/technical" className="text-white">Technical Committee</NavLink></li>
                    </ul>
                </li>

                <li className="mr-6 relative flex items-center hover:bg-lime-800 p-2">
                    <NavLink to="/sponsorships" className="text-white hover:text-white">Sponsorships</NavLink>
                </li>

                <li className="relative flex items-center hover:bg-lime-800 p-2">
                    <NavLink to="/contact" className="text-white hover:text-white">Contact</NavLink>
                </li>

            </div>
        </nav>
    )
}
