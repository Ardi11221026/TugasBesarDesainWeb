import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const BukitBangkirai = () => {
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
                            <Link to="/bukit-bangkirai" className="hover:underline font-semibold">Bukit Bangkirai</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Bukit Bangkirai, Pesona Hutan Hujan Tropis</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kukar/bukit bangkirai.jpg' 
                            alt="Bukit Bangkirai"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Bukit Bangkirai, yang berlokasi di Kecamatan Samboja, Kabupaten Kutai Kartanegara, adalah destinasi wisata alam yang menawarkan pengalaman luar biasa di tengah hutan hujan tropis Kalimantan. Tempat ini terkenal dengan canopy bridge, jembatan gantung yang menghubungkan pohon-pohon besar dan memberikan pemandangan menakjubkan dari atas hutan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Bukit Bangkirai, pengunjung dapat menikmati hiking, trekking, dan menyusuri jembatan gantung yang menjadi daya tarik utama. Selain itu, terdapat area berkemah bagi pecinta alam dan pusat informasi tentang flora dan fauna di kawasan ini. Tempat ini juga dilengkapi dengan fasilitas restoran dan penginapan sederhana.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Bukit Bangkirai berjarak sekitar 38 kilometer dari kota Balikpapan, dengan akses yang relatif mudah melalui jalan darat. Pengunjung dapat menggunakan kendaraan pribadi atau menyewa transportasi lokal untuk mencapai lokasi ini.
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

export default BukitBangkirai;
