import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const LaminEheng = () => {
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
                            <Link to="/kutai-barat" className="hover:underline">Kutai Barat</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/lamin-eheng" className="hover:underline font-semibold">Lamin Eheng</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Lamin Eheng, Tradisi dan Budaya Kutai Barat</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kubar/lamin eheng.jpg' 
                            alt="Lamin Eheng"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Lamin Eheng adalah sebuah rumah adat yang terletak di Kampung Pepas Eheng, Kutai Barat, Kalimantan Timur. Tempat ini dikenal sebagai pusat budaya dan tradisi suku Dayak. Lamin Eheng memberikan pengalaman budaya yang autentik dengan arsitektur rumah adat khas yang menarik dan kegiatan budaya yang masih dilestarikan oleh masyarakat setempat.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Lamin Eheng, pengunjung dapat menikmati berbagai kegiatan budaya, seperti melihat tarian adat, mencoba pakaian tradisional, dan memahami kehidupan masyarakat Dayak. Fasilitas di sekitar Lamin Eheng sudah cukup memadai bagi para wisatawan yang ingin belajar lebih banyak tentang budaya Dayak.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Akses menuju Lamin Eheng dapat dicapai melalui perjalanan darat, dan pengunjung dapat menggunakan kendaraan pribadi atau mengikuti tur yang disediakan oleh penduduk lokal. Lokasi ini tidak terlalu jauh dari pusat kota, namun perjalanan menuju tempat ini tetap menawarkan pemandangan alam yang indah.
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

export default LaminEheng;
