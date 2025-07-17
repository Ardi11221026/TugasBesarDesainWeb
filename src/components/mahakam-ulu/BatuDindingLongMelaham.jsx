import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const BatuDindingLongMelaham = () => {
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
                            <Link to="/mahakam-ulu" className="hover:underline">Mahakam Ulu</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/batu-dinding-long-melaham" className="hover:underline font-semibold">Batu Dinding Long Melaham</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Batu Dinding Long Melaham, Keindahan Alam Mahakam Ulu</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/mahulu/batu dinding long melaham.jpg' 
                            alt="Batu Dinding Long Melaham"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Batu Dinding Long Melaham adalah salah satu formasi batuan unik yang terletak di kawasan Mahakam Ulu, Kalimantan Timur. Tempat ini dikenal dengan pemandangan alam yang spektakuler, dikelilingi oleh hutan tropis dan udara yang sejuk. Batu Dinding ini merupakan tempat yang sangat cocok bagi penggemar petualangan dan pendakian.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung dapat melakukan aktivitas trekking untuk mencapai Batu Dinding Long Melaham, serta menikmati keindahan alam sekitar. Fasilitas di area ini masih terbatas, namun suasana alam yang tenang dan pemandangan yang indah menjadikan tempat ini sangat populer bagi para wisatawan yang mencari kedamaian.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Untuk menuju Batu Dinding Long Melaham, pengunjung bisa memulai perjalanan dari kota Balikpapan atau Samarinda, menuju kawasan Mahakam Ulu. Perjalanan akan melewati jalanan yang berkelok dan menantang, namun pemandangan alam yang indah akan membuat perjalanan ini sangat berkesan.
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

export default BatuDindingLongMelaham;
