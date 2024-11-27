import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const LightDarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        // Apply the theme class to the root HTML element
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleMode = () => setDarkMode((prev) => !prev);

    return (
        <button
            onClick={toggleMode}
            className="flex items-center justify-center p-2 rounded-md transition duration-300 ease-in-out bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            aria-label="Toggle Dark Mode"
        >
            {darkMode ? (
                <FaSun className="text-yellow-400 w-6 h-6" />
            ) : (
                <FaMoon className="text-gray-900 w-6 h-6" />
            )}
        </button>
    );
};

export default LightDarkMode;