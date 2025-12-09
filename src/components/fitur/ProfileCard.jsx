import React from 'react';

const ProfileCard = ({ cityData }) => {
  return (
    <div className="lg:col-span-1 w-full">
      <div className="bg-[#2c5845] p-5 sm:p-6 rounded-xl shadow-md sticky top-24 max-h-[600px] overflow-y-auto border-2 border-white">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {cityData.name}
        </h2>
        <p className="text-sm sm:text-base text-gray-300 mb-6">
          Kalimantan Timur
        </p>

        {/* Logo placeholder */}
        <div className="text-center mb-6 flex items-center justify-center h-40">
          {cityData.logo ? (
            <img
              src={cityData.logo}
              alt={`Logo ${cityData.name}`}
              className="max-h-40 max-w-full object-contain"
            />
          ) : (
            <p className="text-xs sm:text-sm text-gray-400">
              [Logo {cityData.name}]
            </p>
          )}
        </div>

        {/* Info Table */}
        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-4">Informasi Umum</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-xs sm:text-sm py-2 border-b border-gray-600">
              <span className="font-semibold text-gray-300">Luas Wilayah</span>
              <span className="text-gray-400">{cityData.area || '-'}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm py-2 border-b border-gray-600">
              <span className="font-semibold text-gray-300">Populasi</span>
              <span className="text-gray-400">{cityData.population}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm py-2 border-b border-gray-600">
              <span className="font-semibold text-gray-300">Bupati/Walikota</span>
              <span className="text-gray-400 text-right text-xs">{cityData.regent || '-'}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm py-2 border-b border-gray-600">
              <span className="font-semibold text-gray-300">Hari Jadi</span>
              <span className="text-gray-400 text-right text-xs">{cityData.founded || '-'}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileCard;
