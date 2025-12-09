import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const MuseumSadurengas = () => {
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
                            <Link to="/paser" className="hover:underline">Paser</Link>
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/museum-sadurengas" className="hover:underline font-semibold">Museum Sadurengas</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Museum Sadurengas, Sejarah Paser</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/paser/museum sadurengas.jpeg' 
                            alt="Museum Sadurengas"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Museum Sadurengas adalah museum yang terletak di Tanah Grogot, Kabupaten Paser, Kalimantan Timur. Museum ini memiliki koleksi benda-benda sejarah dan budaya yang menggambarkan kehidupan masyarakat Paser dari masa lalu hingga kini. Tempat ini merupakan destinasi edukasi yang cocok untuk wisatawan yang tertarik dengan sejarah dan budaya lokal.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Koleksi dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Museum Sadurengas menyimpan berbagai artefak bersejarah, termasuk alat-alat tradisional, pakaian adat, serta foto-foto lama yang menceritakan perjalanan sejarah daerah Paser. Selain itu, museum ini juga menyediakan fasilitas seperti ruang pameran yang nyaman dan tempat parkir.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Museum Sadurengas dapat dicapai dengan kendaraan pribadi dari pusat kota Tanah Grogot. Akses jalan menuju museum cukup baik, dan museum ini terletak di area yang strategis sehingga mudah diakses oleh wisatawan yang ingin mempelajari sejarah Paser.
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

export default MuseumSadurengas;
