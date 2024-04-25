import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="py-2">
            <div className="container mx-auto flex justify-between items-center">
                <li>
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                </li>

                <ul className="flex justify-center space-x-4">
                   <li>
                        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                    </li>
                    <li>
                        <Link to="/chat" className="text-white hover:text-gray-300">Chat</Link>
                    </li>
                    <li>
                        <Link to="/conference" className="text-white hover:text-gray-300">Conference</Link>
                    </li>
                    <li>
                        <Link to="/live" className="text-white hover:text-gray-300">Live</Link>
                    </li>
                    <li>
                        <Link to="/WelcomeScreenContainer" className="text-white hover:text-gray-300">Livestream</Link>
                    </li>
                </ul>

            </div>

            <hr />

        </nav>
    )
}


export default Navbar;