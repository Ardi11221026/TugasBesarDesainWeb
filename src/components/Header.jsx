import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import LightDarkMode from './LightDarkMode';

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const destinationRef = useRef(null);
    const navigate = useNavigate();

    // Toggle search input visibility
    const toggleSearch = () => setSearchOpen((prev) => !prev);

    // Handle search form submit
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
            setSearchOpen(false);
        }
    };

    return (
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative z-50">
            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <img
                        src="/img/Kalimantan Timur.png"
                        alt="Ragam Kaltim Logo"
                        className="h-12"
                    />
                    <div className="ml-3 text-xl font-bold leading-none">
                        Ragam <br /> Kaltim
                    </div>
                </Link>
            </div>

            <nav className="relative">
                <ul className="flex space-x-4 items-center">
                    <li>
                        <Link
                            to="/"
                            className="font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
                        >
                            Home
                        </Link>
                    </li>

                    {/* Destinasi Dropdown */}
                    <li className="relative group" ref={destinationRef}>
                        <button
                            className="font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Destination
                            <FaChevronDown className="ml-1" />
                        </button>
                        <ul
                            className="absolute bg-gray-800 text-white mt-2 rounded shadow-md w-48 transform transition-transform duration-300 origin-top opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 z-50"
                            style={{ position: 'absolute', top: '100%', left: 0 }}
                        >
                            {[
                                'balikpapan',
                                'berau',
                                'bontang',
                                'kutai-barat',
                                'kutai-kartanegara',
                                'kutai-timur',
                                'mahakam-ulu',
                                'paser',
                                'penajam-paser-utara',
                                'samarinda',
                            ].map((destination) => (
                                <li key={destination}>
                                    <Link
                                        to={`/${destination}`}
                                        className="block px-4 py-2 rounded hover:bg-gray-700"
                                    >
                                        {destination
                                            .replace(/-/g, ' ')
                                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li>
                        <Link
                            to="/blog"
                            className="font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
                        >
                            About
                        </Link>
                    </li>

                    {/* Search Icon */}
                    <li className="relative flex items-center space-x-4">
                        <LightDarkMode />
                        <button
                            onClick={toggleSearch}
                            className="font-bold hover:text-white hover:bg-gray-700 px-2 py-2 rounded flex items-center"
                        >
                            <FaSearch className="h-6 w-6 cursor-pointer" />
                        </button>
                        {searchOpen && (
                            <form
                                onSubmit={handleSearchSubmit}
                                className="absolute top-10 right-0 mt-2 bg-white rounded shadow-md p-2 w-64 z-50"
                            >
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <button
                                    type="submit"
                                    className="mt-2 w-full bg-blue-500 text-white rounded py-1 hover:bg-blue-600"
                                >
                                    Search
                                </button>
                            </form>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
