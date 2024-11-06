import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaGlobe, FaSearch, FaChevronDown } from 'react-icons/fa';

const Header = () => {
    const [languageDropdown, setLanguageDropdown] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [language, setLanguage] = useState('en');
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const toggleLanguageDropdown = () => {
        setLanguageDropdown(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setLanguageDropdown(false);
        }
    };

    const toggleSearch = () => {
        setSearchOpen(prev => !prev);
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setLanguageDropdown(false);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
            setSearchQuery(''); 
            setSearchOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <img
                        src="/img/Kalimantan Timur.png"
                        alt="Ragam Kaltim Logo"
                        className="h-12"
                    />
                    <div className="ml-3 text-xl font-bold leading-none">
                        {language === 'en' ? "Ragam" : "Keberagaman"} <br /> {language === 'en' ? "Kaltim" : "Kalimantan Timur"}
                    </div>
                </Link>
            </div>

            <nav className="relative">
                <ul className="flex space-x-6 items-center">
                    <li>
                        <Link to="/" className="font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded">
                            {language === 'en' ? "Home" : "Beranda"}
                        </Link>
                    </li>

                    <li className="relative group" style={{ zIndex: 50 }}>
    <Link to="#" className="font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center">
        {language === 'en' ? "Destination" : "Destinasi"} <FaChevronDown className="ml-1" />
    </Link>
    <ul className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-md z-50">
        {["balikpapan", "berau", "bontang", "kutai-barat", "kutai-kartanegara", "kutai-timur", "mahakam-ulu", "paser", "penajam-paser utara", "samarinda"].map((destination) => (
            <li key={destination}>
                <Link to={`/${destination}`} className="block px-4 py-2 hover:bg-gray-700">
                    {destination.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
            </li>
        ))}
    </ul>
</li>

                    <li>
                        <Link to="/blog" className="font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded">
                            {language === 'en' ? "Blog" : "Blog"}
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded">
                            {language === 'en' ? "About" : "Tentang"}
                        </Link>
                    </li>

   {/* Language Selector */}
   <li className="relative" ref={dropdownRef} style={{ zIndex: 50 }}>
    <button
        onClick={toggleLanguageDropdown}
        className="flex items-center focus:outline-none"
        aria-haspopup="true"
        aria-expanded={languageDropdown}
    >
        <FaGlobe className="h-6 w-6" />
    </button>
    {languageDropdown && (
        <ul className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-md w-36 z-50">
            <li>
                <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                    English
                </button>
            </li>
            <li>
                <button
                    onClick={() => changeLanguage('id')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                    Bahasa Indonesia
                </button>
            </li>
        </ul>
    )}
</li>

                    {/* Search Icon */}
                    <li className="relative">
                        <FaSearch onClick={toggleSearch} className="h-6 w-6 cursor-pointer" />
                        {searchOpen && (
                            <form onSubmit={handleSearchSubmit} className="absolute top-10 right-0 mt-2 bg-white rounded shadow-md p-2 w-64">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} // Controlled input
                                    placeholder={language === 'en' ? "Search..." : "Cari..."}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <button type="submit" className="mt-2 w-full bg-blue-500 text-white rounded py-1 hover:bg-blue-600">
                                    {language === 'en' ? "Search" : "Cari"}
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
