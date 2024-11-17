import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const WisataTelukPrancis = () => {
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
                            <Link to="/kutai-timur" className="hover:underline">Kutai Timur</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/wisata-teluk-prancis" className="hover:underline font-semibold">Wisata Teluk Prancis</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Wisata Teluk Prancis, Pesona Eksotis di Kutai Timur</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kutim/wisata-teluk-prancis.jpg' 
                            alt="Wisata Teluk Prancis"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Teluk Prancis adalah destinasi wisata yang menampilkan keindahan alam yang masih alami di Kutai Timur. Lokasi ini menawarkan pemandangan laut biru dan tebing-tebing yang menawan, menjadikannya spot favorit untuk fotografi dan relaksasi.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung dapat menjelajahi pantai, memancing, atau menikmati piknik di Teluk Prancis. Terdapat juga area parkir dan beberapa warung yang menyediakan makanan ringan dan minuman.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Berada di Kecamatan Sangkulirang, Teluk Prancis dapat diakses dengan perjalanan darat dari Sangatta. Jalannya cukup mudah dilalui, sehingga cocok untuk kunjungan keluarga.
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

export default WisataTelukPrancis;
