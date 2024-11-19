import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BlogRandom from './BlogRandom';

const TempatWisata = ({ title, imageSrc, description, activities, facilities, location, breadcrumbLinks }) => {
    return (
        <div>
            <Header />
            <div className="bg-gray-100">
                <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
                    {/* Main Content */}
                    <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
                        {/* Breadcrumb Navigation */}
                        <nav className="text-sm mb-5 text-gray-600">
                            {breadcrumbLinks.map((link, index) => (
                                <span key={index}>
                                    <Link to={link.url} className={`hover:underline ${index === breadcrumbLinks.length - 1 ? 'font-semibold' : ''}`}>
                                        {link.name}
                                    </Link>
                                    {index < breadcrumbLinks.length - 1 && <span className="mx-2">{'>>'}</span>}
                                </span>
                            ))}
                        </nav>

                        <h2 className="text-left mb-5 text-2xl font-bold font-arial">{title}</h2>
                        <img
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto mb-5"
                            src={imageSrc}
                            alt={title}
                        />

                        <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                            {description}
                        </p>

                        {activities && (
                            <div>
                                <h2 className="text-left mb-5 text-2xl font-semibold">Aktivitas dan Fasilitas</h2>
                                <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                                    {activities}
                                </p>
                            </div>
                        )}

                        {facilities && (
                            <div>
                                <h2 className="text-left mb-5 text-2xl font-semibold">Fasilitas</h2>
                                <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                                    {facilities}
                                </p>
                            </div>
                        )}

                        {location && (
                            <div>
                                <h2 className="text-left mb-5 text-2xl font-semibold">Akses dan Lokasi</h2>
                                <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
                                    {location}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* BlogRandom Section */}
                    <BlogRandom />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TempatWisata;
