import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-10 shadow-inner">
            <div className="container mx-auto flex flex-col items-center text-center">
                {/* Logo and Info Section */}
                <div className="mb-8">
                    <img
                        src="/img/ragam kaltim.png"
                        alt="Discovery East Borneo"
                        className="h-20 w-20 mb-4 mx-auto"
                    />
                  
                    <div className="text-gray-600 text-sm">
                        <p>
                            Jl. Soekarno Hatta No.KM 15, Kelurahan Karang Joang, Kecamatan Balikpapan Utara, Kota
                            Balikpapan, Kalimantan Timur 76127, Indonesia.
                        </p>
                        <p className="mt-2">
                            <strong>Telepon:</strong> +62 8361 475 4416
                        </p>
                        <p className="mt-2">
                            <strong>Email:</strong> ragamkaltim.id@gmail.com
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
