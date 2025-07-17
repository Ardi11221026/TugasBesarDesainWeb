import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../fitur/Header';
import Footer from '../fitur/Footer';

const Balikpapan = () => {
  return (
    <div className="bg-gray-100"> {/* Corrected className */}
      <div className="content-container flex justify-between py-8 max-w-[1300px] mx-auto gap-7">
        {/* Main Content */}
        <div className="main-content flex-[3] bg-white p-5 rounded-lg shadow-lg">
           {/* Breadcrumb Navigation */}
           <nav className="text-sm mb-5 text-gray-600">
                            <Link to="/" className="hover:underline">Home</Link> 
                            <span className="mx-2">{'>>'}</span>
                            <Link to="/balikpapan" className="hover:underline font-semibold">Balikpapan</Link>
                        </nav>
          <h1 className="text-center mb-2 text-3xl font-bold font-arial">Kota Balikpapan</h1>

          <h2 className="text-left mb-5 text-2xl font-semibold">Sejarah</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Balikpapan, sebuah kota yang terletak di Provinsi Kalimantan Timur, memiliki sejarah yang kaya dan menarik. 
            Didirikan pada tahun 1897 sebagai pelabuhan minyak, kota ini tumbuh pesat seiring dengan berkembangnya industri minyak di Indonesia. 
            Pada masa Perang Dunia II, Balikpapan menjadi tempat strategis yang dikuasai oleh Jepang, yang berdampak pada perkembangan infrastruktur kota. 
            Sejak saat itu, Balikpapan terus berkembang menjadi salah satu kota terpenting di Kalimantan, dikenal sebagai pusat bisnis dan perdagangan.
          </p>

          <h2 className="text-left mb-5 text-2xl font-semibold">Geografis</h2>
          <p className="leading-relaxed max-w-[900px] mb-8 text-justify">
            Balikpapan terletak di pesisir timur Pulau Kalimantan, dengan luas sekitar 503,1 km². 
            Kota ini memiliki topografi yang bervariasi, termasuk dataran rendah, perbukitan, dan pantai. 
            Dengan hutan tropis yang lebat di sekelilingnya, Balikpapan memiliki keanekaragaman hayati yang kaya. 
            Iklim di Balikpapan adalah iklim tropis, dengan suhu rata-rata sekitar 28°C dan dua musim, yaitu musim hujan dan musim kemarau. 
            Hal ini menjadikan Balikpapan sebagai kota yang subur dan ideal untuk pertanian dan perkebunan.
          </p>

          <h2 className="text-left mb-5 text-2xl font-semibold">Wisata di Balikpapan</h2>
          <p className="leading-relaxed mb-8">
            Balikpapan menawarkan berbagai destinasi wisata menarik yang bisa dijelajahi. 
            Di antara tempat-tempat yang terkenal adalah:
          </p>

          <div className="wisata">
  <ul className="list-none p-0">
    {[
      {
        title: "Kebun Raya Balikpapan",
        imgSrc: "img/bpp/krb.jpg",
        address: "Alamat: Jalan Soekarno Hatta KM. 15, Kelurahan Karang Joang, Kecamatan Balikpapan Utara, Kota Balikpapan.",
        link: "https://maps.app.goo.gl/nbsm5SzxsvYXoMBb7",
        infoPage: "/kebun-raya-balikpapan",
      },
      {
        title: "Pantai BSB",
        imgSrc: "img/bpp/pantai bsb.jpg",
        address: "Alamat: Jalan Jenderal Sudirman, Kelurahan Gunung Bahagia, Kecamatan Balikpapan Selatan, Kota Balikpapan.",
        link: "https://maps.app.goo.gl/GX2Y49RnroeAVEgcA",
        infoPage: "/pantai-bsb",
      },
      {
        title: "Pantai Kemala",
        imgSrc: "img/bpp/pantai kemala.jpeg",
        address: "Alamat: Kelurahan Klandasan Ulu, Kecamatan Balikpapan Kota, Kota Balikpapan.",
        link: "https://maps.app.goo.gl/EuPBdoBUYdmkXAKN7",
        infoPage: "/pantai-kemala",
      },
      {
        title: "Pantai Manggar",
        imgSrc: "img/bpp/pantai manggar.jpg",
        address: "Alamat: Jalan Pantai Manggar Segarasari, Kelurahan Manggar Baru, Kecamatan Balikpapan Timur, Kota Balikpapan.",
        link: "https://maps.app.goo.gl/n9VFFZ3J8jUqKuSf8",
        infoPage: "/pantai-manggar",
      },
      {
        title: "Wisata Bamboe Wanadesa",
        imgSrc: "img/bpp/wisata bamboe wanadesa.jpeg",
        address: "Alamat: Jalan Giri Rejo, Kelurahan Karang Joang, Kecamatan Balikpapan Utara, Kota Balikpapan.",
        link: "https://maps.app.goo.gl/NDPgsvNQQCu6UFWD6",
        infoPage: "/wisata-bamboe-wanadesa",
      },
    ]
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((place, index) => (
        <li key={index} className="mt-5 font-bold">
          <strong>{place.title}</strong>
          <div className="img-container my-2 text-center">
            <Link to={place.infoPage}>
              <img
                src={place.imgSrc}
                alt={place.title}
                className="w-full max-w-[500px] h-[300px] object-cover rounded-lg mx-auto cursor-pointer"
              />
            </Link>
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
        <ProfileCard />
      </div>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <aside className="flex justify-center">
         <article className="bg-white p-3 rounded-lg shadow-md text-center w-[350px] h-[700px]">
        <h2 className="mt-0 text-2xl font-bold">Kota Balikpapan</h2>
        <p className="mt-1 text-lg text-gray-700">Manuntung</p>
        <figure className="text-center my-3">
          <img
            src="img/bpp/logo balikpapan.png"
            alt="Lambang Kota Balikpapan"
            className="mx-auto max-w-[150px] h-auto"
          />
          <figcaption className="mt-2 text-sm text-gray-600">
            Lambang Kota Balikpapan
          </figcaption>
        </figure>
        <section className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Informasi</h3>
          <table className="w-full border-collapse mt-3">
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
                <td className="p-2">503,3 km²</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="p-2 bg-gray-100 text-left font-semibold">Populasi</th>
                <td className="p-2">738.532 jiwa</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="p-2 bg-gray-100 text-left font-semibold">Wali Kota</th>
                <td className="p-2">Rahmad Mas'ud</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="p-2 bg-gray-100 text-left font-semibold">Hari Jadi</th>
                <td className="p-2">10 Februari 1897</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </aside>
  );
};

const Balikpapan1 = () => {
  return (
    <div>
      <Header />
      <Balikpapan />
      <Footer />
    </div>
  );
};

export default Balikpapan1;
