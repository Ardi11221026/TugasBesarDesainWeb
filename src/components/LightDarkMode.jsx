import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const LightDarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleMode = () => setDarkMode((prev) => !prev);

    return (
        <button
            onClick={toggleMode}
            className="font-bold hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
        >
            {darkMode ? (
                <FaSun className="text-yellow-400 w-6 h-6" /> // Ukuran ikon diperbesar
            ) : (
                <FaMoon className="text-black w-6 h-6" /> // Ukuran ikon diperbesar
            )}
        </button>
    );
};

export default LightDarkMode;
