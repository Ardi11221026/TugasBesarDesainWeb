import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const TamanTepianMahakam = () => {
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
                            <Link to="/samarinda" className="hover:underline">Samarinda</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/taman-tepian-mahakam" className="hover:underline font-semibold">Taman Tepian Mahakam</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Taman Tepian Mahakam, Tempat Rekreasi Keluarga di Samarinda</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/smd/taman tepian mahakam.jpg' 
                            alt="Taman Tepian Mahakam"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Tepian Mahakam adalah taman kota yang terletak di tepi Sungai Mahakam, Samarinda. Taman ini menjadi salah satu tempat rekreasi favorit keluarga dan wisatawan, dengan pemandangan yang indah dan berbagai fasilitas untuk menikmati waktu santai di luar ruangan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di taman ini, pengunjung bisa berjalan-jalan di sepanjang tepian sungai, menikmati pemandangan, bersepeda, atau sekadar duduk santai sambil menikmati udara segar. Taman ini dilengkapi dengan berbagai fasilitas seperti tempat duduk, jalan setapak, dan area bermain anak-anak.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Taman Tepian Mahakam terletak di Jalan Gadjah Mada, Kelurahan Bugis, Kecamatan Samarinda Kota. Taman ini mudah diakses menggunakan kendaraan pribadi atau transportasi umum, dan menjadi salah satu tempat yang sangat populer untuk menghabiskan waktu sore hari.
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

export default TamanTepianMahakam;
