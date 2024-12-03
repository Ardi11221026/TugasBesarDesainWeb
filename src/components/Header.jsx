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
        
        // Tempat Wisata Balikpapan
        { title: "Kebun Raya Balikpapan", url: "/kebun-raya-balikpapan" },
        { title: "Pantai BSB", url: "/pantai-bsb" },
        { title: "Pantai Kemala", url: "/pantai-kemala" },
        { title: "Pantai Manggar", url: "/pantai-manggar" },
        { title: "Wisata Bamboe Wanadesa", url: "/wisata-bamboe-wanadesa" },
        
        // Tempat Wisata Berau
        { title: "Air Terjun Bawan Batu", url: "/air-terjun-bawan-batu" },
        { title: "Danau Labuan Cermin", url: "/danau-labuan-cermin" },
        { title: "Pulau Derawan", url: "/pulau-derawan" },
        { title: "Pulau Kakaban", url: "/pulau-kakaban" },
        { title: "Pulau Maratua", url: "/pulau-maratua" },
        
        // Tempat Wisata Bontang
        { title: "Bontang Kuala", url: "/bontang-kuala" },
        { title: "Bontang Mangrove Park", url: "/bontang-mangrove-park" },
        { title: "Pantai Marina", url: "/pantai-marina" },
        { title: "Pantai Tanjung Laut", url: "/pantai-tanjung-laut" },
        { title: "Pulau Beras Basah", url: "/pulau-beras-basah" },
        
        // Tempat Wisata Kutai Barat
        { title: "Air Terjun Jantur Inar", url: "/air-terjun-jantur-inar" },
        { title: "Danau Aco", url: "/danau-aco" },
        { title: "Danau Jempang", url: "/danau-jempang" },
        { title: "Lamin Eheng", url: "/lamin-eheng" },
        { title: "Taman Budaya Sentawar", url: "/taman-budaya-sentawar" },
        
        // Tempat Wisata Kutai Kartanegara
        { title: "Bukit Bangkirai", url: "/bukit-bangkirai" },
        { title: "Museum Mulawarman", url: "/museum-mulawarman" },
        { title: "Pantai Ambalat", url: "/pantai-ambalat" },
        { title: "Pulau Kumala", url: "/pulau-kumala" },
        { title: "Taman Kota Raja", url: "/taman-kota-raja" },
        
        // Tempat Wisata Kutai Timur
        { title: "Bukit Pelangi", url: "/bukit-pelangi" },
        { title: "Taman Nasional Kutai", url: "/taman-nasional-kutai" },
        { title: "Pantai Teluk Lombok", url: "/pantai-teluk-lombok" },
        { title: "Wisata Teluk Prancis", url: "/wisata-teluk-prancis" },
        
        // Tempat Wisata Mahakam Ulu
        { title: "Batu Dinding Long Melaham", url: "/batu-dinding-long-melaham" },
        { title: "Datah Bilang Ilir", url: "/datah-bilang-ilir" },
        { title: "Desa Batu Majang", url: "/desa-batu-majang" },
        { title: "Kampung Long Tuyoq", url: "/kampung-long-tuyoq" },
        { title: "Riam Udang", url: "/riam-udang" },
        
        // Tempat Wisata Paser
        { title: "Air Terjun Doyam Seriam", url: "/air-terjun-doyam-seriam" },
        { title: "Gunung Embun", url: "/gunung-embun" },
        { title: "Museum Sadurengas", url: "/museum-sadurengas" },
        { title: "Pantai Pasir Mayang", url: "/pantai-pasir-mayang" },
        { title: "Telaga Ungu", url: "/telaga-ungu" },
        
        // Tempat Wisata PPU
        { title: "Pantai Saloloang", url: "/pantai-saloloang" },
        { title: "Pantai Sipakario Nipah-Nipah", url: "/pantai-sipakario-nipah-nipah" },
        { title: "Taman Alun-Alun", url: "/taman-alun-alun" },
        { title: "Taman Bunga Rozeline", url: "/taman-bunga-rozeline" },
        { title: "Wisata Sawah Gunung Mulia", url: "/wisata-sawah-gunung-mulia" },
        
        // Tempat Wisata Samarinda
        { title: "Air Terjun Tanah Merah", url: "/air-terjun-tanah-merah" },
        { title: "Masjid Islamic Center", url: "/masjid-islamic-center" },
        { title: "Taman Tepian Mahakam", url: "/taman-tepian-mahakam" },
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
                        src="/img/ragam kaltim.png"
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
                            Beranda
                        </Link>
                    </li>

                   {/* Destinasi Dropdown */}
<li className="relative group" ref={destinationRef}>
    <button
        className="font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded flex items-center"
    >
        Destinasi
        <FaChevronDown className="ml-1" />
    </button>
    <ul className="absolute bg-gray-700 text-white mt-1 rounded shadow-md w-48 transform transition-transform duration-300 origin-top opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 z-50">
        {[
            { title: "Balikpapan", url: "/balikpapan" },
            { title: "Berau", url: "/berau" },
            { title: "Bontang", url: "/bontang" },
            { title: "Kutai Barat", url: "/kutai-barat" },
            { title: "Kutai Kartanegara", url: "/kutai-kartanegara" },
            { title: "Kutai Timur", url: "/kutai-timur" },
            { title: "Mahakam Ulu", url: "/mahakam-ulu" },
            { title: "Paser", url: "/paser" },
            { title: "Penajam Paser Utara", url: "/penajam-paser-utara" },
            { title: "Samarinda", url: "/samarinda" }
        ].map((destination) => (
            <li key={destination.url}>
                <Link
                    to={destination.url}
                    className="block px-4 py-2 rounded hover:bg-gray-800"
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
                            Tentang
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
                                    placeholder="Cari..."
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <button
                                    type="submit"
                                    className="mt-2 w-full bg-blue-500 text-white rounded py-1 hover:bg-blue-600"
                                >
                                    Cari
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
                <div className="absolute top-20 mt-10 right-0 bg-white shadow-md rounded p-4 w-96 z-50">
                    <h3 className="font-bold text-lg mb-2">Hasil Pencarian:</h3>
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
