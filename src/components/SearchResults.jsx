import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import About from "./About1";
import Balikpapan from "./Balikpapan1";
import Berau from "./Berau1";
import Bontang from "./Bontang1";
import KutaiBarat from "./KutaiBarat1";
import KutaiKartanegara from "./KutaiKartanegara1";
import KutaiTimur from "./KutaiTimur1";
import MahakamUlu from "./MahakamUlu1";
import Paser from "./Paser1";
import PPU from "./PPU1";
import Samarinda from "./Samarinda1";

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const allContent = [
            { title: "About", content: About },
            { title: "Balikpapan", content: Balikpapan },
            { title: "Berau", content: Berau },
            { title: "Bontang", content: Bontang },
            { title: "Kutai Barat", content: KutaiBarat },
            { title: "Kutai Kartanegara", content: KutaiKartanegara },
            { title: "Kutai Timur", content: KutaiTimur },
            { title: "Mahakam Ulu", content: MahakamUlu },
            { title: "Paser", content: Paser },
            { title: "PPU", content: PPU },
            { title: "Samarinda", content: Samarinda },
        ];

        const filteredResults = allContent.filter(item =>
            item.title.toLowerCase().includes(query?.toLowerCase() || "") ||
            item.content.toLowerCase().includes(query?.toLowerCase() || "")
        );

        setResults(filteredResults);
    }, [query]);

    return (
        <>
            <Header />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">
                    {query ? `Results for "${query}"` : "No search query"}
                </h1>
                {results.length > 0 ? (
                    <ul>
                        {results.map((item, index) => (
                            <li key={index} className="mb-4">
                                <h2 className="text-xl font-semibold">{item.title}</h2>
                                <p>{item.content}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default SearchResults;
