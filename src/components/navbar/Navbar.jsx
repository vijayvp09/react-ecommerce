import { Link } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar"

const Navbar =() => {
    const navlist = (
        <ul className="flex space-x-3 text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allproducts">All Products</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/cart">Cart({0})</Link></li>
        </ul>
    )
    return (
        <nav className="bg-blue-300 top-0 sticky shadow-md z-50 ">
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                <div className="left py-3 lg:py-0 ">
                    <Link to="/">
                        <h2 className="font-bold text-white text-2xl text-center ">SHop</h2>
                    </Link>
                </div>
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navlist}
                </div>
                <SearchBar />

            </div>
        </nav>
    )
}

export default Navbar;