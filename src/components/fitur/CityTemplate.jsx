import React from 'react';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';
import Breadcrumb from '../fitur/Breadcrumb';
import { citiesData } from '../../data/citiesData';

// Template komponen untuk semua kota - import dan gunakan sesuai kota
// Contoh: const cityKey = 'balikpapan'; const cityData = citiesData[cityKey];

const CityTemplate = ({ cityKey, cityUrl }) => {
  const cityData = citiesData[cityKey];

  if (!cityData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600 text-lg">Data kota tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumb cityName={cityData.name} cityUrl={cityUrl} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 bg-white p-5 sm:p-6 lg:p-7 rounded-xl shadow-md">
              <h1 className="text-center mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold">
                {cityData.name}
              </h1>

              {/* Sejarah */}
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Sejarah</h2>
                <p className="leading-relaxed text-sm sm:text-base text-justify text-gray-700">
                  {cityData.history}
                </p>
              </section>

              {/* Geografis */}
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Geografis</h2>
                <p className="leading-relaxed text-sm sm:text-base text-justify text-gray-700">
                  {cityData.geography}
                </p>
              </section>

              {/* Wisata */}
              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Destinasi Wisata</h2>
                <p className="leading-relaxed text-sm sm:text-base mb-6 text-gray-700">
                  {cityData.name} menawarkan berbagai destinasi wisata menarik yang bisa dijelajahi:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {cityData.attractions.map((place, index) => (
                    <div key={index} className="bg-gray-50 p-4 sm:p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {place.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">
                        <strong>Alamat:</strong> {place.address}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 mb-4">
                        {place.description}
                      </p>
                      <a 
                        href={place.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-red-600 hover:text-red-700 font-semibold text-sm"
                      >
                        Lihat di Maps →
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md sticky top-24 max-h-[600px] overflow-y-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {cityData.name}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-6">
                  Kalimantan Timur
                </p>

                {/* Logo placeholder */}
                <div className="text-center mb-6 bg-gray-100 p-4 rounded-lg h-32 sm:h-40 flex items-center justify-center">
                  <p className="text-xs sm:text-sm text-gray-600">
                    [Logo {cityData.name}]
                  </p>
                </div>

                {/* Info Table */}
                <section className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Umum</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs sm:text-sm py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Populasi</span>
                      <span className="text-gray-600">{cityData.population}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Ekonomi</span>
                      <span className="text-gray-600 text-right text-xs">{cityData.economy}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Deskripsi</span>
                      <span className="text-gray-600 text-right text-xs">{cityData.description}</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CityTemplate;
