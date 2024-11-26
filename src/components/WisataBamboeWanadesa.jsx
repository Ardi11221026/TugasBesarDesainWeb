import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const WisataBamboeWanadesa = () => {
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
                            <Link to="/balikpapan" className="hover:underline">Balikpapan</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/wisata-bamboe-wanadesa" className="hover:underline font-semibold">Wisata Bamboe Wanadesa</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Wisata Bamboe Wanadesa</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bpp/wisata bamboe wanadesa.jpeg' 
                            alt="Wisata Bamboe Wanadesa"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Wisata Bamboe Wanadesa di Balikpapan adalah destinasi wisata alam yang unik, menawarkan suasana asri dan tradisional yang jauh dari hiruk-pikuk kota. Dikelilingi oleh hutan bambu yang rindang dan pemandangan pedesaan yang menenangkan, tempat ini menjadi pilihan ideal untuk melepas penat dan menikmati ketenangan alam. Selain menikmati udara segar dan keindahan alam, pengunjung dapat berjalan-jalan di jalur trekking bambu, berfoto dengan latar alam yang indah, atau sekadar bersantai di area yang telah disediakan. Dengan akses yang mudah dan suasana yang ramah keluarga, Wisata Bamboe Wanadesa menawarkan pengalaman yang menyegarkan dan menyatu dengan alam.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Fasilitas dan Aktivitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Wisata ini menyediakan fasilitas seperti rumah bambu, jalan setapak, dan tempat bersantai. Anda juga bisa berfoto dengan latar alam yang cantik atau menikmati makanan lokal di area warung tradisional yang tersedia.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Wisata Bamboe Wanadesa terletak di kawasan yang sejuk dan asri, dapat diakses dengan mudah menggunakan kendaraan pribadi. Lokasinya yang berada jauh dari keramaian kota membuat tempat ini menjadi pilihan sempurna bagi wisatawan yang mencari kedamaian dan ketenangan. Dengan hutan bambu yang rindang, suasana pedesaan yang alami, dan pemandangan yang menawan, wisata ini menawarkan pengalaman yang menyegarkan. Tempat ini menarik bagi wisatawan lokal maupun mancanegara yang ingin menikmati alam sambil bersantai atau beraktivitas ringan seperti trekking. Wisata Bamboe Wanadesa memberikan kesempatan untuk merasakan keindahan alam yang autentik dan menenangkan.
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

export default WisataBamboeWanadesa;
