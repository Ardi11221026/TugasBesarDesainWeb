import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const MasjidIslamicCenter = () => {
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
                            <Link to="/masjid-islamic-center" className="hover:underline font-semibold">Masjid Islamic Center</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Masjid Islamic Center, Ikon Kota Samarinda</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/smd/masjid islamic center.jpg' 
                            alt="Masjid Islamic Center"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Masjid Islamic Center Samarinda adalah salah satu masjid terbesar dan termegah di Indonesia, terletak di tepi Sungai Mahakam, Samarinda, Kalimantan Timur. Masjid ini menjadi landmark penting dan tempat beribadah utama bagi umat Muslim di Samarinda, dengan arsitektur yang megah dan fasilitas yang lengkap.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung Masjid Islamic Center dapat beribadah, mengikuti pengajian, atau hanya menikmati keindahan arsitektur dan suasana tenang masjid. Tersedia fasilitas seperti tempat parkir yang luas, ruang ibadah yang nyaman, dan aula untuk berbagai acara keagamaan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Masjid ini berlokasi di pusat Kota Samarinda, menjadikannya mudah diakses baik dengan kendaraan pribadi maupun transportasi umum. Lokasinya yang strategis di tepi Sungai Mahakam membuatnya menjadi daya tarik tersendiri bagi wisatawan yang berkunjung ke Samarinda.
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

export default MasjidIslamicCenter;
