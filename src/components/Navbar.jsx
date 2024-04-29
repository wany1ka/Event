import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="py-2 mb-6">
            <div className="mx-auto flex justify-between items-center mb-4">
                <li>
                    <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
                </li>

                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link to="/screen" className="text-blue-500 hover:text-blue-700">Live</Link>
                    </li>
                    <li>
                        <Link to="/chat" className="text-blue-500 hover:text-blue-700">Chats</Link>
                    </li>
                    <li>
                        <Link to="/conference" className="text-blue-500 hover:text-blue-700">Conference</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link>
                    </li>
                </ul>

            </div>

            <hr />

        </nav>
    )
}


export default Navbar;