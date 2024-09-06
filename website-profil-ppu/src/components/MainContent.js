import React from "react";
import Card from "./Card";
import ProfileCard from "./ProfileCard";
import sejarahImg from "../assets/images/sejarah PPU.jpeg";
import geografisImg from "../assets/images/geografis PPU.jpg";
import pulauGusungImg from "../assets/images/pulau gusung.jpeg";
import tamanBungaImg from "../assets/images/taman bunga rozeline.jpg";
import airTerjunImg from "../assets/images/air terjun tembinus.jpg";

function MainContent() {
  return (
    <main>
      <div id="content">
        <Card
          id="sejarah"
          title="Sejarah"
          img={sejarahImg}
          content="Kabupaten Penajam Paser Utara adalah sebuah kabupaten di provinsi Kalimantan Timur, Indonesia. Ibu kotanya terletak di Penajam..."
        />
        <Card
          id="geografis"
          title="Geografis"
          img={geografisImg}
          content="Kabupaten Penajam Paser Utara memiliki batas wilayah yang berbatasan dengan..."
        />
        <Card
          id="wisata"
          title="Wisata"
          content="Berikut adalah beberapa objek wisata menarik di Penajam Paser Utara..."
          additionalSections={[
            { title: "Pulau Gusung", img: pulauGusungImg, content: "Pulau ini memiliki ekosistem bawah laut yang masih terjaga dengan baik..." },
            { title: "Taman Bunga Rozeline", img: tamanBungaImg, content: "Taman ini terletak dekat dengan pusat kota dan memiliki keindahan yang instagramable..." },
            { title: "Air Terjun Tembinus", img: airTerjunImg, content: "Air terjun ini menawarkan suasana menenangkan dengan pasir kecokelatan..." }
          ]}
        />
      </div>
      <aside>
        <ProfileCard />
      </aside>
    </main>
  );
}

export default MainContent;
