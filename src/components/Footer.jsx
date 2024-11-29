import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-10 shadow-inner">
            <div className="container mx-auto flex flex-col items-center text-center">
                {/* Logo and Info Section */}
                <div className="mb-8">
                    <img
                        src="/img/Kalimantan Timur.png"
                        alt="Discovery East Borneo"
                        className="h-12 mb-4 mx-auto"
                    />
                    <h4 className="text-2xl font-bold mb-4">
                        Ragam <br /> Kaltim
                    </h4>
                    <div className="text-gray-600 text-sm">
                        <p>
                            Jl. Soekarno Hatta No.KM 15, Karang Joang, Kec. Balikpapan Utara, Kota
                            Balikpapan, Kalimantan Timur 76127, Indonesia.
                        </p>
                        <p className="mt-2">
                            <strong>Phone:</strong> +62 361 475 4416
                        </p>
                        <p className="mt-2">
                            <strong>Email:</strong> discoveryeastborneo.id@gmail.com
                        </p>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-gray-500">
                    <p>&copy; 2024 Ragam Kaltim. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
