import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom'; // Import BlogRandom

const AirTerjunJanturInar = () => {
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
                            <Link to="/air-terjun-jantur-inar" className="hover:underline font-semibold">Air Terjun Jantur Inar</Link>
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">Air Terjun Jantur Inar, Air Terjun Tersembunyi di Kutai Barat</h2>
                        <img 
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5" 
                            src='img/kubar/air terjun jantur inar.jpg' 
                            alt="Air Terjun Jantur Inar"
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Air Terjun Jantur Inar, yang terletak di Kutai Barat, Kalimantan Timur, adalah salah satu destinasi wisata alam yang masih terjaga keasriannya. 
                            Air terjun ini menawarkan pemandangan alam yang menakjubkan, dengan aliran air yang jatuh dari ketinggian, dikelilingi oleh hutan tropis yang lebat. 
                            Tempat ini menjadi pilihan bagi para wisatawan yang mencari ketenangan dan keindahan alam yang masih alami.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Di Air Terjun Jantur Inar, pengunjung dapat menikmati kegiatan seperti trekking, berfoto, dan menikmati suasana alam yang sejuk. 
                            Trek menuju air terjun ini cukup menantang, sehingga cocok untuk para pecinta petualangan dan alam bebas. 
                            Selain itu, pemandangan air terjun yang indah juga menjadi spot favorit untuk fotografi. Fasilitas yang ada di sekitar air terjun ini masih cukup sederhana, namun cukup untuk memenuhi kebutuhan dasar pengunjung.
                        </p>

                        <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            Air Terjun Jantur Inar terletak di Kutai Barat, Kalimantan Timur, dan dapat dicapai dengan kendaraan pribadi atau transportasi lokal. 
                            Meskipun aksesnya cukup jauh dan medan yang harus ditempuh tidak selalu mudah, namun pemandangan yang disuguhkan sangat memuaskan bagi mereka yang berhasil sampai ke lokasi. 
                            Tempat ini sangat cocok untuk pengunjung yang mencari petualangan alam dan keindahan yang belum banyak diketahui orang.
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

export default AirTerjunJanturInar;
