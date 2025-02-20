import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About1';
import Blog from './components/Blog1';

// 10 Kota dan Kabupaten Routes
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

// Tempat Wisata Balikpapan Imports
import KebunRayaBalikpapan from './components/KebunRayaBalikpapan';
import PantaiBSB from './components/PantaiBSB';
import PantaiKemala from './components/PantaiKemala';
import PantaiManggar from './components/PantaiManggar';
import WisataBamboeWanadesa from './components/WisataBamboeWanadesa';

// Tempat Wisata Berau Imports
import AirTerjunBawanBatu from './components/AirTerjunBawanBatu';
import DanauLabuanCermin from './components/DanauLabuanCermin';
import PulauDerawan from './components/PulauDerawan';
import PulauKakaban from './components/PulauKakaban';
import PulauMaratua from './components/PulauMaratua';

// Tempat Wisata Bontang Imports
import BontangKuala from './components/BontangKuala';
import BontangMangrovePark from './components/BontangMangrovePark';
import PantaiMarina from './components/PantaiMarina';
import PantaiTanjungLaut from './components/PantaiTanjungLaut';
import PulauBerasBasah from './components/PulauBerasBasah';

// Tempat Wisata Kutai Barat Imports
import AirTerjunJanturInar from './components/AirTerjunJanturInar';
import DanauAco from './components/DanauAco';
import DanauJempang from './components/DanauJempang';
import LaminEheng from './components/LaminEheng';
import TamanBudayaSentawar from './components/TamanBudayaSentawar';

// Tempat Wisata Kutai Kartanegara Imports
import BukitBangkirai from './components/BukitBangkirai';
import MuseumMulawarman from './components/MuseumMulawarman';
import PantaiAmbalat from './components/PantaiAmbalat';
import PulauKumala from './components/PulauKumala';
import TamanKotaRaja from './components/TamanKotaRaja';

// Tempat Wisata Kutai Timur Imports
import BukitPelangi from './components/BukitPelangi';
import TamanNasionalKutai from './components/TamanNasionalKutai';
import PantaiTelukLombok from './components/PantaiTelukLombok';
import WisataTelukPrancis from './components/WisataTelukPrancis';

// Tempat Wisata Mahakam Ulu Imports
import BatuDindingLongMelaham from './components/BatuDindingLongMelaham';
import DatahBilangIlir from './components/DatahBilangIlir';
import DesaBatuMajang from './components/DesaBatuMajang';
import KampungLongTuyoq from './components/KampungLongTuyoq';
import RiamUdang from './components/RiamUdang';

// Tempat Wisata Paser Imports
import AirTerjunDoyamSeriam from './components/AirTerjunDoyamSeriam';
import GunungEmbun from './components/GunungEmbun';
import MuseumSadurengas from './components/MuseumSadurengas';
import PantaiPasirMayang from './components/PantaiPasirMayang';
import TelagaUngu from './components/TelagaUngu';

// Tempat Wisata PPU Imports
import PantaiSaloloang from './components/PantaiSaloloang';
import PantaiSipakarioNipahNipah from './components/PantaiSipakarioNipahNipah';
import TamanAlunAlun from './components/TamanAlunAlun';
import TamanBungaRozeline from './components/TamanBungaRozeline';
import WisataSawahGunungMulia from './components/WisataSawahGunungMulia';

// Tempat Wisata Samarinda Imports
import AirTerjunTanahMerah from './components/AirTerjunTanahMerah';
import MasjidIslamicCenter from './components/MasjidIslamicCenter';
import TamanTepianMahakam from './components/TamanTepianMahakam';

// Komponen untuk menangani scroll ke atas
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
           <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />

                    {/* 10 Kota dan Kabupaten Routes */}
                    <Route path="/balikpapan" element={<Balikpapan />} />
                    <Route path="/berau" element={<Berau />} />
                    <Route path="/bontang" element={<Bontang />} />
                    <Route path="/kutai-barat" element={<KutaiBarat />} />
                    <Route path="/kutai-kartanegara" element={<KutaiKartanegara />} />
                    <Route path="/kutai-timur" element={<KutaiTimur />} />
                    <Route path="/mahakam-ulu" element={<MahakamUlu />} />
                    <Route path="/paser" element={<Paser />} />
                    <Route path="/penajam-paser-utara" element={<PPU />} />
                    <Route path="/samarinda" element={<Samarinda />} />

                    {/* Tempat Wisata Balikpapan Routes */}
                    <Route path="/kebun-raya-balikpapan" element={<KebunRayaBalikpapan />} />
                    <Route path="/pantai-bsb" element={<PantaiBSB />} />
                    <Route path="/pantai-kemala" element={<PantaiKemala />} />
                    <Route path="/pantai-manggar" element={<PantaiManggar />} />
                    <Route path="/wisata-bamboe-wanadesa" element={<WisataBamboeWanadesa />} />

                    {/* Tempat Wisata Berau Routes */}
                    <Route path="/air-terjun-bawan-batu" element={<AirTerjunBawanBatu />} />
                    <Route path="/danau-labuan-cermin" element={<DanauLabuanCermin />} />
                    <Route path="/pulau-derawan" element={<PulauDerawan />} />
                    <Route path="/pulau-kakaban" element={<PulauKakaban />} />
                    <Route path="/pulau-maratua" element={<PulauMaratua />} />

                    {/* Tempat Wisata Bontang Routes */}
                    <Route path="/bontang-kuala" element={<BontangKuala />} />
                    <Route path="/bontang-mangrove-park" element={<BontangMangrovePark />} />
                    <Route path="/pantai-marina" element={<PantaiMarina />} />
                    <Route path="/pantai-tanjung-laut" element={<PantaiTanjungLaut />} />
                    <Route path="/pulau-beras-basah" element={<PulauBerasBasah />} />

                    {/* Tempat Wisata Kutai Barat Routes */}
                    <Route path="/air-terjun-jantur-inar" element={<AirTerjunJanturInar />} />
                    <Route path="/danau-aco" element={<DanauAco />} />
                    <Route path="/danau-jempang" element={<DanauJempang />} />
                    <Route path="/lamin-eheng" element={<LaminEheng />} />
                    <Route path="/taman-budaya-sentawar" element={<TamanBudayaSentawar />} />

                    {/* Tempat Wisata Kutai Kartanegara Routes */}
                    <Route path="/bukit-bangkirai" element={<BukitBangkirai />} />
                    <Route path="/museum-mulawarman" element={<MuseumMulawarman />} />
                    <Route path="/pantai-ambalat" element={<PantaiAmbalat />} />
                    <Route path="/pulau-kumala" element={<PulauKumala />} />
                    <Route path="/taman-kota-raja" element={<TamanKotaRaja />} />

                    {/* Tempat Wisata Kutai Timur Routes */}
                    <Route path="/bukit-pelangi" element={<BukitPelangi />} />
                    <Route path="/taman-nasional-kutai" element={<TamanNasionalKutai />} />
                    <Route path="/pantai-teluk-lombok" element={<PantaiTelukLombok />} />
                    <Route path="/wisata-teluk-prancis" element={<WisataTelukPrancis />} />

                    {/* Tempat Wisata Mahakam Ulu Routes */}
                    <Route path="/batu-dinding-long-melaham" element={<BatuDindingLongMelaham />} />
                    <Route path="/datah-bilang-ilir" element={<DatahBilangIlir />} />
                    <Route path="/desa-batu-majang" element={<DesaBatuMajang />} />
                    <Route path="/kampung-long-tuyoq" element={<KampungLongTuyoq />} />
                    <Route path="/riam-udang" element={<RiamUdang />} />

                    {/* Tempat Wisata Paser Routes */}
                    <Route path="/air-terjun-doyam-seriam" element={<AirTerjunDoyamSeriam />} />
                    <Route path="/gunung-embun" element={<GunungEmbun />} />
                    <Route path="/museum-sadurengas" element={<MuseumSadurengas />} />
                    <Route path="/pantai-pasir-mayang" element={<PantaiPasirMayang />} />
                    <Route path="/telaga-ungu" element={<TelagaUngu />} />

                    {/* Tempat Wisata PPU Routes */}
                    <Route path="/pantai-saloloang" element={<PantaiSaloloang />} />
                    <Route path="/pantai-sipakario-nipah-nipah" element={<PantaiSipakarioNipahNipah />} />
                    <Route path="/taman-alun-alun" element={<TamanAlunAlun />} />
                    <Route path="/taman-bunga-rozeline" element={<TamanBungaRozeline />} />
                    <Route path="/wisata-sawah-gunung-mulia" element={<WisataSawahGunungMulia />} />

                    {/* Tempat Wisata Samarinda Routes */}
                    <Route path="/air-terjun-tanah-merah" element={<AirTerjunTanahMerah />} />
                    <Route path="/masjid-islamic-center" element={<MasjidIslamicCenter />} />
                    <Route path="/taman-tepian-mahakam" element={<TamanTepianMahakam />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
