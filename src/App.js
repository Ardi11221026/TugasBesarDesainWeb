import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './components/fitur/Home';
import About from './components/fitur/About1';
import Blog from './components/fitur/Blog1';

// Kota dan Kabupaten
import Balikpapan from './components/balikpapan/Balikpapan1';
import Berau from './components/berau/Berau1';
import Bontang from './components/bontang/Bontang1';
import KutaiBarat from './components/kutai-barat/KutaiBarat1';
import KutaiKartanegara from './components/kutai-kartanegara/KutaiKartanegara1';
import KutaiTimur from './components/kutai-timur/KutaiTimur1';
import MahakamUlu from './components/mahakam-ulu/MahakamUlu1';
import Paser from './components/paser/Paser1';
import PPU from './components/ppu/PPU1';
import Samarinda from './components/samarinda/Samarinda1';

// Wisata Balikpapan
import KebunRayaBalikpapan from './components/balikpapan/KebunRayaBalikpapan';
import PantaiBSB from './components/balikpapan/PantaiBSB';
import PantaiKemala from './components/balikpapan/PantaiKemala';
import PantaiManggar from './components/balikpapan/PantaiManggar';
import WisataBamboeWanadesa from './components/balikpapan/WisataBamboeWanadesa';

// Wisata Berau
import AirTerjunBawanBatu from './components/berau/AirTerjunBawanBatu';
import DanauLabuanCermin from './components/berau/DanauLabuanCermin';
import PulauDerawan from './components/berau/PulauDerawan';
import PulauKakaban from './components/berau/PulauKakaban';
import PulauMaratua from './components/berau/PulauMaratua';

// Wisata Bontang
import BontangKuala from './components/bontang/BontangKuala';
import BontangMangrovePark from './components/bontang/BontangMangrovePark';
import PantaiMarina from './components/bontang/PantaiMarina';
import PantaiTanjungLaut from './components/bontang/PantaiTanjungLaut';
import PulauBerasBasah from './components/bontang/PulauBerasBasah';

// Wisata Kutai Barat
import AirTerjunJanturInar from './components/kutai-barat/AirTerjunJanturInar';
import DanauAco from './components/kutai-barat/DanauAco';
import DanauJempang from './components/kutai-barat/DanauJempang';
import LaminEheng from './components/kutai-barat/LaminEheng';
import TamanBudayaSentawar from './components/kutai-barat/TamanBudayaSentawar';

// Wisata Kutai Kartanegara
import BukitBangkirai from './components/kutai-kartanegara/BukitBangkirai';
import MuseumMulawarman from './components/kutai-kartanegara/MuseumMulawarman';
import PantaiAmbalat from './components/kutai-kartanegara/PantaiAmbalat';
import PulauKumala from './components/kutai-kartanegara/PulauKumala';
import TamanKotaRaja from './components/kutai-kartanegara/TamanKotaRaja';

// Wisata Kutai Timur
import BukitPelangi from './components/kutai-timur/BukitPelangi';
import TamanNasionalKutai from './components/kutai-timur/TamanNasionalKutai';
import PantaiTelukLombok from './components/kutai-timur/PantaiTelukLombok';
import WisataTelukPrancis from './components/kutai-timur/WisataTelukPrancis';

// Wisata Mahakam Ulu
import BatuDindingLongMelaham from './components/mahakam-ulu/BatuDindingLongMelaham';
import DatahBilangIlir from './components/mahakam-ulu/DatahBilangIlir';
import DesaBatuMajang from './components/mahakam-ulu/DesaBatuMajang';
import KampungLongTuyoq from './components/mahakam-ulu/KampungLongTuyoq';
import RiamUdang from './components/mahakam-ulu/RiamUdang';

// Wisata Paser
import AirTerjunDoyamSeriam from './components/paser/AirTerjunDoyamSeriam';
import GunungEmbun from './components/paser/GunungEmbun';
import MuseumSadurengas from './components/paser/MuseumSadurengas';
import PantaiPasirMayang from './components/paser/PantaiPasirMayang';
import TelagaUngu from './components/paser/TelagaUngu';

// Wisata PPU
import PantaiSaloloang from './components/ppu/PantaiSaloloang';
import PantaiSipakarioNipahNipah from './components/ppu/PantaiSipakarioNipahNipah';
import TamanAlunAlun from './components/ppu/TamanAlunAlun';
import TamanBungaRozeline from './components/ppu/TamanBungaRozeline';
import WisataSawahGunungMulia from './components/ppu/WisataSawahGunungMulia';

// Wisata Samarinda
import AirTerjunTanahMerah from './components/samarinda/AirTerjunTanahMerah';
import MasjidIslamicCenter from './components/samarinda/MasjidIslamicCenter';
import TamanTepianMahakam from './components/samarinda/TamanTepianMahakam';

// Scroll to top
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />

        {/* Kota dan Kabupaten */}
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

        {/* Wisata per daerah - semua rute tetap sama, tidak diubah */}
        <Route path="/kebun-raya-balikpapan" element={<KebunRayaBalikpapan />} />
        <Route path="/pantai-bsb" element={<PantaiBSB />} />
        <Route path="/pantai-kemala" element={<PantaiKemala />} />
        <Route path="/pantai-manggar" element={<PantaiManggar />} />
        <Route path="/wisata-bamboe-wanadesa" element={<WisataBamboeWanadesa />} />
        <Route path="/air-terjun-bawan-batu" element={<AirTerjunBawanBatu />} />
        <Route path="/danau-labuan-cermin" element={<DanauLabuanCermin />} />
        <Route path="/pulau-derawan" element={<PulauDerawan />} />
        <Route path="/pulau-kakaban" element={<PulauKakaban />} />
        <Route path="/pulau-maratua" element={<PulauMaratua />} />
        <Route path="/bontang-kuala" element={<BontangKuala />} />
        <Route path="/bontang-mangrove-park" element={<BontangMangrovePark />} />
        <Route path="/pantai-marina" element={<PantaiMarina />} />
        <Route path="/pantai-tanjung-laut" element={<PantaiTanjungLaut />} />
        <Route path="/pulau-beras-basah" element={<PulauBerasBasah />} />
        <Route path="/air-terjun-jantur-inar" element={<AirTerjunJanturInar />} />
        <Route path="/danau-aco" element={<DanauAco />} />
        <Route path="/danau-jempang" element={<DanauJempang />} />
        <Route path="/lamin-eheng" element={<LaminEheng />} />
        <Route path="/taman-budaya-sentawar" element={<TamanBudayaSentawar />} />
        <Route path="/bukit-bangkirai" element={<BukitBangkirai />} />
        <Route path="/museum-mulawarman" element={<MuseumMulawarman />} />
        <Route path="/pantai-ambalat" element={<PantaiAmbalat />} />
        <Route path="/pulau-kumala" element={<PulauKumala />} />
        <Route path="/taman-kota-raja" element={<TamanKotaRaja />} />
        <Route path="/bukit-pelangi" element={<BukitPelangi />} />
        <Route path="/taman-nasional-kutai" element={<TamanNasionalKutai />} />
        <Route path="/pantai-teluk-lombok" element={<PantaiTelukLombok />} />
        <Route path="/wisata-teluk-prancis" element={<WisataTelukPrancis />} />
        <Route path="/batu-dinding-long-melaham" element={<BatuDindingLongMelaham />} />
        <Route path="/datah-bilang-ilir" element={<DatahBilangIlir />} />
        <Route path="/desa-batu-majang" element={<DesaBatuMajang />} />
        <Route path="/kampung-long-tuyoq" element={<KampungLongTuyoq />} />
        <Route path="/riam-udang" element={<RiamUdang />} />
        <Route path="/air-terjun-doyam-seriam" element={<AirTerjunDoyamSeriam />} />
        <Route path="/gunung-embun" element={<GunungEmbun />} />
        <Route path="/museum-sadurengas" element={<MuseumSadurengas />} />
        <Route path="/pantai-pasir-mayang" element={<PantaiPasirMayang />} />
        <Route path="/telaga-ungu" element={<TelagaUngu />} />
        <Route path="/pantai-saloloang" element={<PantaiSaloloang />} />
        <Route path="/pantai-sipakario-nipah-nipah" element={<PantaiSipakarioNipahNipah />} />
        <Route path="/taman-alun-alun" element={<TamanAlunAlun />} />
        <Route path="/taman-bunga-rozeline" element={<TamanBungaRozeline />} />
        <Route path="/wisata-sawah-gunung-mulia" element={<WisataSawahGunungMulia />} />
        <Route path="/air-terjun-tanah-merah" element={<AirTerjunTanahMerah />} />
        <Route path="/masjid-islamic-center" element={<MasjidIslamicCenter />} />
        <Route path="/taman-tepian-mahakam" element={<TamanTepianMahakam />} />
      </Routes>
    </Router>
  );
};

export default App;
