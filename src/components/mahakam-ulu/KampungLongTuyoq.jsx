import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const KampungLongTuyoq = () => {
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
                            <Link to="/kampung-long-tuyoq" className="hover:underline font-semibold">Kampung Long Tuyoq</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Kampung Long Tuyoq, Warisan Budaya Mahakam Ulu</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/mahulu/kampung long tuyoq.jpg' 
                            alt="Kampung Long Tuyoq"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Kampung Long Tuyoq adalah salah satu kampung adat yang kaya akan budaya dan tradisi Dayak di Mahakam Ulu, Kalimantan Timur. Kampung ini menawarkan pengalaman unik untuk mengenal lebih dekat kehidupan masyarakat Dayak, termasuk seni ukir, tarian tradisional, dan rumah lamin yang khas.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Tradisi dan Budaya</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pengunjung Kampung Long Tuyoq dapat menyaksikan berbagai tradisi seperti upacara adat, musik khas dengan alat musik Sape, serta mencicipi kuliner khas Dayak. Penduduk setempat dengan ramah akan berbagi cerita tentang sejarah dan makna budaya mereka.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Kampung Long Tuyoq dapat dicapai melalui perjalanan sungai menggunakan perahu tradisional atau kendaraan darat tergantung pada musim. Meskipun perjalanan mungkin memakan waktu, pengalaman yang didapatkan akan sepadan dengan keindahan dan kekayaan budaya yang ditawarkan.
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

export default KampungLongTuyoq;
