import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const PantaiKemala = () => {
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
                            <Link to="/pantai-kemala" className="hover:underline font-semibold">Pantai Kemala</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Pantai Kemala</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/bpp/pantai kemala.jpeg' 
                            alt="Pantai Kemala"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pantai Kemala, juga dikenal sebagai Pantai Polda, adalah salah satu destinasi wisata favorit di Balikpapan, Kalimantan Timur. Pantai ini terkenal dengan suasana santainya, pasir putih yang bersih, serta air laut yang jernih, menjadikannya tempat yang ideal untuk rekreasi keluarga atau bersantai bersama teman. Lokasinya yang mudah dijangkau dari pusat kota menambah daya tariknya, terutama bagi warga lokal yang ingin melepas penat di akhir pekan. Selain menikmati pemandangan, pengunjung dapat mencoba berbagai aktivitas, seperti bermain di tepi pantai, menikmati kuliner di restoran sekitar, atau sekadar duduk-duduk sambil menikmati angin laut yang menenangkan.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Fasilitas dan Aktivitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Pantai ini dilengkapi dengan fasilitas seperti restoran, area bermain anak-anak, dan penyewaan banana boat. Pengunjung juga dapat menikmati makanan khas lokal di pinggir pantai sambil menikmati deburan ombak.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                        Pantai Kemala, yang berlokasi strategis dekat pusat kota Balikpapan, mudah dijangkau baik dengan kendaraan pribadi maupun transportasi umum, sehingga menjadi destinasi yang sangat populer di kalangan wisatawan dan warga lokal. Dengan tiket masuk yang terjangkau, pantai ini menawarkan pengalaman rekreasi yang nyaman tanpa harus mengeluarkan banyak biaya. Suasananya yang tenang, dilengkapi dengan fasilitas seperti area parkir, warung makan, dan tempat duduk tepi pantai, membuat Pantai Kemala cocok untuk bersantai, menikmati pemandangan laut, atau menghabiskan waktu berkualitas bersama keluarga dan teman. Kombinasi antara aksesibilitas, kenyamanan, dan keindahannya menjadikan pantai ini pilihan favorit untuk mengisi waktu luang.
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

export default PantaiKemala;
