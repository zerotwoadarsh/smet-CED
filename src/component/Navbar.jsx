import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex list-none">
                <li className="mr-6 relative">
                    <NavLink to="/" className="text-blue-500">Home</NavLink>
                </li>
                <li className="mr-6 relative">
                    <NavLink to="/conference-track" className="text-blue-500">Conference Track</NavLink>
                </li>
                <li className="mr-6 relative">
                    <NavLink to="/about" className="text-blue-500">About</NavLink>
                    <ul className="submenu hidden absolute top-full left-0 bg-white p-2 shadow-md">
                        <li className="submenu-item"><NavLink to="/about/nit-kurukshetra" className="text-blue-500">About NIT Kurukshetra</NavLink></li>
                        <li className="submenu-item"><NavLink to="/about/kurukshetra" className="text-blue-500">About Kurukshetra</NavLink></li>
                        <li className="submenu-item"><NavLink to="/about/sdcee-23" className="text-blue-500">About SDCEE-23</NavLink></li>
                    </ul>
                </li>
                <li className="mr-6 relative">
                    <NavLink to="/registration-information" className="text-blue-500">Registration Information</NavLink>
                </li>
                <li className="mr-6 relative">
                    <NavLink to="/submissions" className="text-blue-500">Submissions</NavLink>
                </li>
                <li className="mr-6 relative">
                    <NavLink to="/committee" className="text-blue-500">Committee</NavLink>
                    <ul className="submenu hidden absolute top-full left-0 bg-white p-2 shadow-md">
                        <li className="submenu-item"><NavLink to="/committee/organizing" className="text-blue-500">Organizing Committee</NavLink></li>
                        <li className="submenu-item"><NavLink to="/committee/internal-advisory" className="text-blue-500">Internal Advisory Committee</NavLink></li>
                        <li className="submenu-item"><NavLink to="/committee/external-advisory" className="text-blue-500">External Advisory Committee</NavLink></li>
                        <li className="submenu-item"><NavLink to="/committee/technical" className="text-blue-500">Technical Committee</NavLink></li>
                    </ul>
                </li>
                <li className="mr-6 relative">
                    <NavLink to="/sponsorships" className="text-blue-500">Sponsorships</NavLink>
                </li>
                <li className="relative">
                    <NavLink to="/contact" className="text-blue-500">Contact</NavLink>
                </li>
            </ul>

        </nav>
    )
}
