import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Berau = () => {
    return (
      <div className="bg-gray-100"> {/* Corrected className */}
      <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7 ">
        {/* Main Content */}
        <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
           {/* Breadcrumb Navigation */}
           <nav className="text-sm mb-5 text-gray-600">
                            <Link to="/" className="hover:underline">Home</Link> 
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/berau" className="hover:underline font-semibold">Berau</Link>
                        </nav>
          <h1 className="text-center mb-2 text-3xl font-bold font-arial">Kabupaten Berau</h1>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Sejarah</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
          Kabupaten Berau, yang terletak di Provinsi Kalimantan Timur, memiliki sejarah panjang sebagai pusat pemerintahan lokal yang telah dikenal sejak era kerajaan-kerajaan lokal. 
          Saat ini, Berau dikenal luas berkat kekayaan sumber daya alamnya yang melimpah, terutama di sektor perikanan, pertambangan, dan pariwisata.
           Keindahan alam dan potensi ekonomi daerah ini menjadikannya sebagai salah satu wilayah yang penuh dengan peluang dan daya tarik, baik bagi penduduk lokal maupun wisatawan.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Geografis</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
          Kabupaten Berau memiliki luas wilayah sekitar 34.127 km², yang mencakup daratan luas dan kepulauan yang menakjubkan. 
          Dengan iklim tropis yang khas, Berau dikelilingi oleh pesisir yang subur, mendukung sektor perikanan yang berkembang pesat, serta hutan tropis yang menjadi rumah bagi beragam spesies flora dan fauna. 
          Keanekaragaman hayati yang tinggi menjadikan wilayah ini kaya akan keindahan alam yang tak ternilai.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Wisata di Berau</h2>
          <p className="leading-relaxed mb-8">
          Berau dikenal luas dengan wisata baharinya yang memukau. Beberapa destinasi unggulannya antara lain:
          </p>
  
          <div className="wisata">
            <ul className="list-none p-0">
              {[
                    {
                      title: "Air Terjun Bawan Batu",
                      imgSrc: "img/berau/air terjun bawan batu.jpeg",
                      address: "Alamat: Desa Long Lanuk, Kecamatan Sambaliung, Kabupaten Berau.",
                      link: "https://maps.app.goo.gl/HYkHG98WGye7rKP97",
                    },
                    {
                      title: "Danau Labuan Cermin",
                      imgSrc: "img/berau/danau labuan cermin.jpg",
                      address: "Alamat: Desa Biduk-biduk, Kecamatan Biduk-biduk, Kabupaten Berau.",
                      link: "https://maps.app.goo.gl/Vrh8nHD8CJgy7ARc9",
                    },
                    {
                      title: "Pulau Derawan",
                      imgSrc: "img/berau/pulau derawan.jpg",
                      address: "Alamat: Kepulauan Derawan, Kecamatan Derawan, Kabupaten Berau.",
                      link: "https://maps.app.goo.gl/vv6ykPkCW1GgHY1MA",
                    },
                    {
                      title: "Pulau Kakaban",
                      imgSrc: "img/berau/pulau kakaban.jpg",
                      address: "Alamat: Kepulauan Kakaban, Kecamatan Derawan, Kabupaten Berau, Kalimantan Timur.",
                      link: "https://maps.app.goo.gl/yF2jgXGL2YKQ5f8q6",
                    },
                    {
                      title: "Pulau Maratua",
                      imgSrc: "img/berau/pulau maratua.jpeg",
                      address: "Alamat: Kepulauan Maratua, Kecamatan Maratua, Kabupaten Berau, Kalimantan Timur.",
                      link: "https://maps.app.goo.gl/SrAT9zUdr2negSQv5",
                    },
                // Tambahkan tempat lain di sini
              ].sort((a, b) => a.title.localeCompare(b.title))
              .map((place, index) => (
                <li key={index} className="mt-5 font-bold">
                  <strong>{place.title}</strong>
                  <div className="img-container my-2 text-center">
                    <img
                      src={place.imgSrc}
                      alt={place.title}
                      className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto"
                    />
                  </div>
                  <p className="mb-1 text-black leading-6 font-normal">{place.address}</p>
                  <p className="mb-5 text-blue-600">
                    <a href={place.link} target="_blank" rel="noopener noreferrer">
                      Lihat di Maps
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Profile Card */}
        <ProfileCardBerau />
      </div>
      </div>
    );
  };
  
  const ProfileCardBerau = () => {
    return (
      <aside className="flex justify-center">
             <article className="bg-white p-3 rounded-lg shadow-md text-center w-[350px] h-[700px]">
          <h2 className="mt-0 text-2xl font-bold">Kabupaten Berau</h2>
          <p className="mt-1 text-lg text-gray-700">Kalimantan Timur</p>
          <figure className="text-center my-4">
            <img
              src="img/berau/logo berau.png"
              alt="Lambang Kabupaten Berau"
              className="mx-auto max-w-[150px] h-auto"
            />
            <figcaption className="mt-2 text-sm text-gray-600">
              Lambang Kabupaten Berau
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
                  <td className="p-2">34.127 km²</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Populasi</th>
                  <td className="p-2">200.000 jiwa</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Bupati</th>
                  <td className="p-2">Muharram</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Hari Jadi</th>
                  <td className="p-2">15 September 1958</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </aside>
    );
  };  

const Berau1 = () => {
    return (
        <div>
            <Header />
            < Berau/>
            <Footer />
        </div>
    );
};

export default Berau1;
