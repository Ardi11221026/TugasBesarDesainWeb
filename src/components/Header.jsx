import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { FaChevronDown, FaSearch, FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const destinationRef = useRef(null);
    const navigate = useNavigate();

    // Data statis untuk pencarian
    const pages = [
        { title: "Balikpapan", url: "/balikpapan" },
        { title: "Berau", url: "/berau" },
        { title: "Bontang", url: "/bontang" },
        { title: "Kutai Barat", url: "/kutai-barat" },
        { title: "Kutai Kartanegara", url: "/kutai-kartanegara" },
        { title: "Kutai Timur", url: "/kutai-timur" },
        { title: "Mahakam Ulu", url: "/mahakam-ulu" },
        { title: "Paser", url: "/paser" },
        { title: "Penajam Paser Utara", url: "/penajam-paser-utara" },
        { title: "Samarinda", url: "/samarinda" },
    ];

    const toggleSearch = () => setSearchOpen((prev) => !prev);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            // Filter data berdasarkan query
            const results = pages.filter((page) =>
                page.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle("dark-mode");
    };

    return (
        <header className={`bg-white shadow-md py-1 px-6 mt-3 flex justify-between items-center relative z-50 ${darkMode ? "dark-mode" : ""}`}>
            {/* Logo Section */}
            <div className="logo-section flex justify-center items-center mb-4">
                <Link to="/" className="flex items-center">
                    <img
                        src="/img/Kalimantan Timur.png"
                        alt="Ragam Kaltim Logo"
                        className="h-12"
                    />
                    <div className="ml-3 text-xl font-bold leading-none text-center">
                        Ragam <br /> Kaltim
                    </div>
                </Link>
            </div>

            {/* Navigation Section */}
            <nav>
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
                            className="absolute bg-gray-800 text-white mt-0 rounded shadow-md w-48 transform transition-transform duration-300 origin-top opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 z-50"
                            style={{ position: "absolute", top: "100%", left: 0 }}
                        >
                            {pages
                                .filter((page) => page.url.startsWith("/"))
                                .map((destination) => (
                                    <li key={destination.url}>
                                        <Link
                                            to={destination.url}
                                            className="block px-4 py-2 rounded hover:bg-gray-700"
                                        >
                                            {destination.title}
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
                        <button
                            onClick={toggleSearch}
                            className="font-bold hover:text-white hover:bg-gray-700 px-2 py-2 rounded flex items-center"
                        >
                            <FaSearch className="h-6 w-6 cursor-pointer" />
                        </button>
                        {searchOpen && (
                            <form
                                onSubmit={handleSearchSubmit}
                                className="absolute top-10 right-0 bg-white rounded shadow-md p-2 w-64 z-50"
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

                    {/* Dark Mode Toggle */}
                    <li>
                        <button
                            onClick={toggleDarkMode}
                            className="text-2xl p-2"
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Search Results */}
            {searchResults.length > 0 && (
                <div className="absolute top-16 right-0 bg-white shadow-md rounded p-4 w-96 z-50">
                    <h3 className="font-bold text-lg mb-2">Search Results:</h3>
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.url} className="border-b border-gray-200 py-2">
                                <Link to={result.url} className="hover:underline">
                                    {result.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
