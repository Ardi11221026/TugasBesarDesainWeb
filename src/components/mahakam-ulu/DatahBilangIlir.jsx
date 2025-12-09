import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import BlogRandom from '../fitur/BlogRandom';

const DatahBilangIlir = () => {
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
                            <Link to="/datah-bilang-ilir" className="hover:underline font-semibold">Datah Bilang Ilir</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Datah Bilang Ilir, Permata di Mahakam Ulu</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='/img/mahulu/datah bilang ilir.jpg' 
                            alt="Datah Bilang Ilir"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Datah Bilang Ilir adalah kampung kecil di Mahakam Ulu yang terkenal dengan pemandangan alamnya yang memukau. Kampung ini menjadi tempat persinggahan yang sempurna bagi para wisatawan yang mencari ketenangan di tengah hutan tropis dan sungai Mahakam yang megah.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Daya Tarik</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Kampung ini menawarkan pemandangan sungai yang tenang, ladang hijau yang luas, dan rumah-rumah tradisional yang dihuni oleh masyarakat Dayak. Wisatawan juga dapat menikmati aktivitas seperti memancing, menyusuri sungai dengan perahu, atau sekadar menikmati suasana pedesaan yang damai.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Perjalanan ke Datah Bilang Ilir melibatkan perjalanan air menggunakan perahu tradisional. Pengalaman menyusuri Sungai Mahakam yang luas dan melihat kehidupan di sepanjang sungai akan menjadi bagian tak terlupakan dari kunjungan ini.
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

export default DatahBilangIlir;
