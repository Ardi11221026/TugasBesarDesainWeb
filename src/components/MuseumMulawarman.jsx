import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom'; // Import BlogRandom

const MuseumMulawarman = () => {
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
                            <Link to="/kutai-kartanegara" className="hover:underline">Kutai Kartanegara</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/museum-mulawarman" className="hover:underline font-semibold">Museum Mulawarman</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Museum Mulawarman, Sejarah dan Budaya Kutai Kartanegara</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kukar/museum mulawarman.jpg' 
                            alt="Museum Mulawarman"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Museum Mulawarman yang terletak di Tenggarong, Kutai Kartanegara, Kalimantan Timur, merupakan salah satu museum penting yang memamerkan berbagai koleksi sejarah, budaya, dan seni yang berhubungan dengan kerajaan Kutai Kartanegara. Museum ini menjadi saksi bisu perjalanan panjang sejarah Kutai, menyimpan artefak bersejarah, serta berbagai koleksi yang menceritakan kehidupan masyarakat Kutai dari zaman dahulu.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Museum Mulawarman, pengunjung dapat menikmati berbagai koleksi menarik seperti arca, keris, peralatan tradisional, dan foto-foto dokumentasi yang menggambarkan perkembangan kerajaan Kutai Kartanegara. Selain itu, museum ini juga sering mengadakan pameran seni dan budaya, serta kegiatan edukatif bagi pelajar dan masyarakat. Fasilitas di museum ini cukup lengkap, termasuk area parkir yang luas dan ruang pameran yang nyaman.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Museum Mulawarman terletak di pusat kota Tenggarong, yang merupakan ibu kota Kabupaten Kutai Kartanegara. Museum ini dapat dicapai dengan kendaraan pribadi atau transportasi umum dari kota Samarinda. Akses jalan yang mudah dan lokasi yang strategis menjadikan museum ini salah satu destinasi wisata sejarah yang wajib dikunjungi saat berada di Kalimantan Timur.
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

export default MuseumMulawarman;
