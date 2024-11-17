import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const BukitPelangi = () => {
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
                            <Link to="/bukit-pelangi" className="hover:underline font-semibold">Bukit Pelangi</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Bukit Pelangi, Pemandangan Spektakuler di Kutai Timur</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kutim/bukit-pelangi.jpg' 
                            alt="Bukit Pelangi"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Bukit Pelangi merupakan salah satu destinasi populer di Kutai Timur yang menawarkan pemandangan kota Sangatta dari ketinggian. Bukit ini sangat cocok bagi pengunjung yang ingin menikmati suasana alam dengan udara yang segar, terutama saat matahari terbit atau terbenam.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung dapat bersantai, mengambil foto, atau melakukan aktivitas olahraga ringan seperti trekking. Bukit ini dilengkapi dengan tempat duduk dan area parkir yang memadai, sehingga cocok untuk dikunjungi bersama keluarga atau teman.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Terletak di kota Sangatta Utara, Bukit Pelangi mudah dijangkau dengan kendaraan roda dua maupun roda empat. Hanya perlu waktu singkat dari pusat kota untuk mencapai tempat ini.
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

export default BukitPelangi
