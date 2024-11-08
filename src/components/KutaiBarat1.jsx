import React from 'react';
import Header from './Header';
import Footer from './Footer';

const KutaiBarat = () => {
    return (
      <div className="bg-gray-100"> {/* Corrected className */}
      <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
        {/* Main Content */}
        <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-center mb-2 text-3xl font-bold font-arial">Kabupaten Kutai Barat</h1>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Sejarah</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Kabupaten Kutai Barat merupakan wilayah hasil pemekaran dari Kabupaten Kutai, yang 
            resmi terbentuk pada tahun 1999. Daerah ini memiliki sejarah panjang terkait dengan 
            suku Dayak dan kaya akan budaya lokal serta tradisi yang masih terjaga hingga kini.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Geografis</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Kutai Barat memiliki luas sekitar 20.381 km² dan terdiri dari wilayah perbukitan, 
            hutan hujan tropis, serta sungai-sungai besar. Iklim tropis mendukung keanekaragaman 
            hayati di wilayah ini, menjadikannya salah satu pusat ekowisata di Kalimantan Timur.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Wisata di Kutai Barat</h2>
          <p className="leading-relaxed mb-8">
            Beberapa destinasi wisata menarik di Kutai Barat adalah:
          </p>
  
          <div className="wisata">
            <ul className="list-none p-0">
              {[
                {
                  title: "Danau Jempang",
                  imgSrc: "img/danau_jempang.png",
                  description:
                    "Danau alami yang luas dengan pemandangan indah, menjadi tempat favorit untuk berwisata alam.",
                },
                {
                  title: "Air Terjun Gemuruh",
                  imgSrc: "img/air_terjun_gemuruh.png",
                  description:
                    "Air terjun yang menawan di tengah hutan, menawarkan pengalaman trekking dan keindahan alam.",
                },
                {
                  title: "Taman Budaya Sendawar",
                  imgSrc: "img/taman_budaya_sendawar.png",
                  description:
                    "Pusat budaya yang menampilkan berbagai kerajinan, seni, dan budaya suku Dayak lokal.",
                },
                // Tambahkan tempat lain di sini jika perlu...
              ].map((place, index) => (
                <li key={index} className="mt-5 font-bold">
                  <strong>{place.title}</strong>
                  <div className="img-container my-2 text-center">
                    <img
                      src={place.imgSrc}
                      alt={place.title}
                      className="w-full max-w-[800px] h-auto rounded-lg mx-auto"
                    />
                  </div>
                  <p className="mb-5 text-gray-700 leading-6 font-normal">{place.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Profile Card */}
        <ProfileCardKutaiBarat />
      </div>
      </div>
    );
  };
  
  const ProfileCardKutaiBarat = () => {
    return (
      <aside className="flex justify-center">
               <article className="bg-white p-3 rounded-lg shadow-md text-center w-[350px] h-[700px]">
          <h2 className="mt-0 text-2xl font-bold">Kabupaten Kutai Barat</h2>
          <p className="mt-1 text-lg text-gray-700">Kalimantan Timur</p>
          <figure className="text-center my-4">
            <img
              src="img/logo kutai barat.png"
              alt="Lambang Kabupaten Kutai Barat"
              className="mx-auto max-w-[150px] h-auto"
            />
           <figcaption className="mt-2 text-sm text-gray-600">
              Lambang Kabupaten Kutai Barat
            </figcaption>
          </figure>
          <section className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>
            <table className="w-full border-collapse mt-4">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Negara</th>
                  <td className="p-2">Indonesia</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Provinsi</th>
                  <td className="p-2">Kalimantan Timur</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Luas Wilayah</th>
                  <td className="p-2">20.381 km²</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Populasi</th>
                  <td className="p-2">150.000 jiwa</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Bupati</th>
                  <td className="p-2">FX Yapan</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Hari Jadi</th>
                  <td className="p-2">5 Oktober 1999</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </aside>
    );
  };  

const KutaiBarat1 = () => {
    return (
        <div>
            <Header />
            <KutaiBarat />
            <Footer />
        </div>
    );
};

export default KutaiBarat1;
