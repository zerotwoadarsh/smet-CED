import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const [temp , setTemp] = useState(false);

    return (
        <nav>
            <div className=" flex justify-center h-10 fixed bg-lime-600 w-full top-0 list-none">

                <li className="mr-6 relative flex items-center hover:bg-lime-800 p-2">
                    <NavLink to="/" className="text-white  hover:text-white">Home</NavLink>
                </li>

                <li className="mr-6 relative flex items-center hover:bg-lime-800 p-2">
                    <NavLink to="/conference-track" className="text-white hover:text-white">Conference Track</NavLink>
                </li>

                <li className="mr-6 relative flex items-center hover:bg-lime-800 p-2" onMouseOver={setTemp(temp)} onMouseOut={setTemp(false)}>
                    <NavLink to="/about" className="text-white hover:text-white">About</NavLink>

                    <ul className="submenu absolute top-full left-0 bg-white p-2 shadow-md hover:bg-lime-800 ${temp ? block : hidden}">
                        <li className="submenu-item"><NavLink to="/about/nit-kurukshetra" className="text-black">About NIT Kurukshetra</NavLink></li>
                        <li className="submenu-item"><NavLink to="/about/kurukshetra" className="text-white">About Kurukshetra</NavLink></li>
                        <li className="submenu-item"><NavLink to="/about/sdcee-23" className="text-white">About SDCEE-23</NavLink></li>
                    </ul>   
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
