import React from 'react';
import Header from './Header';
import Footer from './Footer';

const KutaiTimur = () => {
    return (
      <div className="bg-gray-100"> {/* Corrected className */}
      <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
        {/* Main Content */}
        <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-center mb-2 text-3xl font-bold font-arial">Kabupaten Kutai Timur</h1>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Sejarah</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Kabupaten Kutai Timur merupakan salah satu kabupaten di Kalimantan Timur yang terbentuk 
            sebagai hasil pemekaran dari Kabupaten Kutai. Diresmikan pada tahun 1999, Kutai Timur terkenal 
            dengan sumber daya alamnya yang melimpah, terutama di sektor pertambangan dan kehutanan.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Geografis</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Kutai Timur memiliki luas wilayah sekitar 35.747 km², dengan wilayah yang didominasi oleh 
            hutan tropis serta kawasan perbukitan. Wilayah ini kaya akan keanekaragaman hayati dan memiliki 
            iklim tropis yang mendukung aktivitas pertanian dan perkebunan.
          </p>
  
          <h2 className="text-left mb-5 text-2xl font-semibold">Wisata di Kutai Timur</h2>
          <p className="leading-relaxed mb-8">
            Beberapa destinasi wisata yang terkenal di Kutai Timur antara lain:
          </p>
  
          <div className="wisata">
            <ul className="list-none p-0">
              {[
                {
                  title: "Sangkulirang Karst",
                  imgSrc: "img/kutim/sangkulirang_karst.png",
                  description:
                    "Formasi karst yang menakjubkan dengan gua-gua alami dan lukisan purba, sangat cocok untuk aktivitas caving dan hiking.",
                },
                {
                  title: "Pantai Sekerat",
                  imgSrc: "img/kutim/pantai_sekerat.png",
                  description:
                    "Pantai yang indah dan sepi, menawarkan pemandangan laut yang tenang dan pasir putih yang luas.",
                },
                {
                  title: "Taman Nasional Kutai",
                  imgSrc: "img/kutim/taman_nasional_kutai.png",
                  description:
                    "Habitat alami orangutan dan berbagai spesies endemik lainnya, populer untuk ekowisata dan pengamatan satwa.",
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
        <ProfileCardKutaiTimur />
      </div>
      </div>
    );
  };
  
  const ProfileCardKutaiTimur = () => {
    return (
      <aside className="flex justify-center">
                 <article className="bg-white p-3 rounded-lg shadow-md text-center w-[350px] h-[700px]">
          <h2 className="mt-0 text-2xl font-bold">Kabupaten Kutai Timur</h2>
          <p className="mt-1 text-lg text-gray-700">Kalimantan Timur</p>
          <figure className="text-center my-4">
            <img
              src="img/kutim/logo kutai timur.png"
              alt="Lambang Kabupaten Kutai Timur"
              className="mx-auto max-w-[150px] h-auto"
            />
            <figcaption className="mt-2 text-sm text-gray-600">
              Lambang Kabupaten Kutai Timur
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
                  <td className="p-2">35.747 km²</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Populasi</th>
                  <td className="p-2">250.000 jiwa</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Bupati</th>
                  <td className="p-2">Ardiansyah Sulaiman</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-2 bg-gray-100 text-left font-semibold">Hari Jadi</th>
                  <td className="p-2">28 Oktober 1999</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </aside>
    );
  };  


const KutaiTimur1 = () => {
    return (
        <div>
            <Header />
            < KutaiTimur/>
            <Footer />
        </div>
    );
};

export default KutaiTimur1;
