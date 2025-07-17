import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const BontangMangrovePark = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-100">
                <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
                    {/* Main Content */}
                    <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
                        {/* Breadcrumb Navigation */}
                        <nav className="text-sm mb-5 text-gray-600">
                            <Link to="/" className="hover:underline">Home</Link> 
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/bontang" className="hover:underline">Bontang</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/bontang-mangrove-park" className="hover:underline font-semibold">Bontang Mangrove Park</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Bontang Mangrove Park, Ekowisata Alam Bontang</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bontang/bontang mangrove park.jpeg' 
                            alt="Bontang Mangrove Park"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Bontang Mangrove Park merupakan kawasan ekowisata yang memamerkan keindahan dan pentingnya hutan mangrove di Bontang, Kalimantan Timur. Destinasi ini menawarkan pengalaman edukatif dan rekreasi, di mana pengunjung dapat menjelajahi jalur kayu yang rapi di tengah rimbunnya pohon mangrove. 
                        Selain menjadi habitat bagi berbagai jenis flora dan fauna, kawasan ini juga berfungsi sebagai pelindung alami pantai dari abrasi. 
                        Bontang Mangrove Park adalah tempat yang ideal untuk menikmati keanekaragaman hayati, berfoto dengan latar hijau yang memukau, serta belajar mengenai peran vital ekosistem mangrove dalam menjaga keseimbangan lingkungan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Di Bontang Mangrove Park, pengunjung dapat menikmati berbagai aktivitas menarik, seperti berjalan di atas jembatan bambu yang membentang di tengah hutan mangrove, memberikan pengalaman unik menyatu dengan alam. Selama perjalanan, pengunjung dapat mengamati satwa liar seperti burung-burung eksotis, kepiting, dan ikan yang hidup di sekitar ekosistem mangrove. 
                        Bagi pecinta fotografi, tempat ini menawarkan banyak spot menarik dengan latar pemandangan hijau yang asri. 
                        Kawasan ini juga menjadi lokasi edukasi lingkungan, di mana pengunjung dapat belajar tentang pentingnya mangrove dalam menjaga keseimbangan ekosistem pesisir dan melindungi pantai dari abrasi.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Bontang Mangrove Park terletak tidak jauh dari pusat kota Bontang, sehingga mudah dijangkau dengan kendaraan pribadi maupun kendaraan umum. Perjalanan menuju lokasi memberikan pemandangan khas daerah pesisir yang menarik. 
                        Setibanya di sana, pengunjung dapat menjelajahi kawasan ekowisata ini melalui jalur-jalur yang telah disediakan, termasuk jembatan bambu yang melintasi hutan mangrove. 
                        Akses yang cukup baik membuat tempat ini menjadi destinasi favorit bagi keluarga, pelajar, dan pecinta alam yang ingin menikmati suasana asri sekaligus belajar tentang pentingnya pelestarian ekosistem mangrove.
                        </p>
                    </div>

                    {/* BlogRandom Section */}
                    <BlogRandom />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BontangMangrovePark;
