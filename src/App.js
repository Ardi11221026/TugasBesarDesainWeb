import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About1';
import Balikpapan from './components/Balikpapan1';
import Berau from './components/Berau1';
import Bontang from './components/Bontang1';
import KutaiBarat from './components/KutaiBarat1';
import KutaiKartanegara from './components/KutaiKartanegara1';
import KutaiTimur from './components/KutaiTimur1';
import MahakamUlu from './components/MahakamUlu1';
import Paser from './components/Paser1';
import PPU from './components/PPU1';
import Samarinda from './components/Samarinda1';
import SearchResults from './components/SearchResults';


const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/balikpapan" element={<Balikpapan />} />
                    <Route path="/berau" element={<Berau />} />
                    <Route path="/bontang" element={<Bontang />} />
                    <Route path="/kutai-barat" element={<KutaiBarat />} />
                    <Route path="/kutai-kartanegara" element={<KutaiKartanegara />} />
                    <Route path="/kutai-timur" element={<KutaiTimur />} />
                    <Route path="/mahakam-ulu" element={<MahakamUlu />} />
                    <Route path="/paser" element={<Paser />} />
                    <Route path="/penajam-paser utara" element={<PPU />} />
                    <Route path="/samarinda" element={<Samarinda />} />
                    <Route path="/search" element={<SearchResults />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
