# Ragam Kaltim - Jelajahi Keindahan Kalimantan Timur

Website informatif yang menyajikan panduan komprehensif tentang wisata dan budaya di 10 kota dan kabupaten di Provinsi Kalimantan Timur.

## Fitur Utama

- 🗺️ Informasi lengkap tentang 10 kota dan kabupaten di Kalimantan Timur
- 🏖️ Database destinasi wisata yang komprehensif
- 📱 Desain responsif dengan Tailwind CSS
- 🌍 Dukungan multi-bahasa (Indonesia & English)
- 🌓 Dark mode support
- 🔍 Fitur pencarian destinasi

## Teknologi yang Digunakan

- React 18.3.1
- React Router DOM 6.27.0
- Tailwind CSS 3.4.14
- Poppins Font Family
- React Icons 5.3.0

## Setup dan Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Deploy ke GitHub Pages
npm run deploy
```

## Struktur Direktori

```
src/
├── components/
│   ├── fitur/          # Komponen utama (Header, Footer, Home, etc)
│   ├── balikpapan/     # Komponen Balikpapan
│   ├── berau/          # Komponen Berau
│   ├── bontang/        # Komponen Bontang
│   ├── kutai-barat/    # Komponen Kutai Barat
│   ├── kutai-kartanegara/  # Komponen Kutai Kartanegara
│   ├── kutai-timur/    # Komponen Kutai Timur
│   ├── mahakam-ulu/    # Komponen Mahakam Ulu
│   ├── paser/          # Komponen Paser
│   ├── ppu/            # Komponen Penajam Paser Utara
│   └── samarinda/      # Komponen Samarinda
├── data/
│   └── citiesData.js   # Data lengkap 10 kota
├── App.js              # Main routing component
└── index.css           # Global styles dengan Poppins font

public/
└── img/                # Folder untuk gambar setiap daerah
    ├── bpp/
    ├── berau/
    ├── bontang/
    └── ... (dst)
```

## 10 Kota dan Kabupaten yang Dicakup

1. **Balikpapan** - Kota industri dengan pesona wisata pantai
2. **Berau** - Surga wisata bahari dengan Kepulauan Derawan
3. **Bontang** - Kota industri dengan Taman Nasional
4. **Kutai Barat** - Destinasi wisata dan budaya Dayak
5. **Kutai Kartanegara** - Pusat warisan Kesultanan Kutai
6. **Kutai Timur** - Rumah Taman Nasional Kutai
7. **Mahakam Ulu** - Pesona alam pedalaman dan budaya Dayak
8. **Paser** - Warisan sejarah Kerajaan Paser
9. **Penajam Paser Utara** - Calon Ibu Kota Nusantara
10. **Samarinda** - Ibu Kota Kalimantan Timur

## Deployment

Project ini di-deploy ke GitHub Pages di: https://Ardi11221026.github.io/ragam-kaltim/

Untuk melakukan deployment:
```bash
npm run deploy
```

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
