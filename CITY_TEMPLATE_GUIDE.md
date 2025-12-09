# Arsitektur Komponen Kota dan Kabupaten

Struktur ini menggunakan template pattern untuk menghindari duplikasi kode di 10 kota/kabupaten.

## Komponen Utama

### 1. **CityTemplate.jsx** (Template Master)
```jsx
<CityTemplate cityKey="balikpapan" cityUrl="/balikpapan" />
```
- Komponen template reusable untuk semua kota
- Menerima 2 props:
  - `cityKey`: key di object citiesData (contoh: 'balikpapan', 'berau', dll)
  - `cityUrl`: URL path untuk breadcrumb (contoh: '/balikpapan', '/berau', dll)
- Menampilkan: Sejarah, Geografis, Destinasi Wisata, dan Info Umum

### 2. **Breadcrumb.jsx** (Komponen Reusable)
```jsx
<Breadcrumb cityName="Balikpapan" cityUrl="/balikpapan" />
```
- Komponen breadcrumb navigation yang reusable
- Menerima 2 props:
  - `cityName`: nama kota untuk ditampilkan
  - `cityUrl`: URL path untuk link

## Data Source: citiesData.js

Struktur data:
```javascript
citiesData = {
  balikpapan: {
    name: "Balikpapan",
    description: "...",
    history: "...",
    geography: "...",
    population: "...",
    economy: "...",
    attractions: [
      { name, address, description, mapUrl },
      ...
    ]
  },
  berau: { ... },
  bontang: { ... },
  kutaiBarat: { ... },
  kutaiKartanegara: { ... },
  kutaiTimur: { ... },
  mahakamUlu: { ... },
  paser: { ... },
  ppu: { ... },
  samarinda: { ... }
}
```

## File Struktur untuk Setiap Kota

Setiap kota memiliki file wrapper yang sangat sederhana:

```
src/components/
├── balikpapan/Balikpapan.jsx (3 baris)
├── berau/Berau.jsx (3 baris)
├── bontang/Bontang.jsx (3 baris)
├── kutai-barat/KutaiBarat.jsx (3 baris)
├── kutai-kartanegara/KutaiKartanegara.jsx (3 baris)
├── kutai-timur/KutaiTimur.jsx (3 baris)
├── mahakam-ulu/MahakamUlu.jsx (3 baris)
├── paser/Paser.jsx (3 baris)
├── ppu/PPU.jsx (3 baris)
└── samarinda/Samarinda.jsx (3 baris)
```

Contoh isi file:
```jsx
import React from 'react';
import CityTemplate from '../fitur/CityTemplate';

const Balikpapan = () => {
  return <CityTemplate cityKey="balikpapan" cityUrl="/balikpapan" />;
};

export default Balikpapan;
```

## Keuntungan Struktur Ini

1. **DRY (Don't Repeat Yourself)**: Tidak ada duplikasi kode
2. **Mudah Diupdate**: Perubahan desain hanya di CityTemplate.jsx
3. **Konsisten**: Semua halaman kota punya tampilan sama
4. **Scalable**: Mudah menambah kota baru
5. **Maintainable**: Data terpisah dari presentasi

## Cara Menambah Kota Baru

1. Tambah data di `citiesData.js`:
```javascript
export const citiesData = {
  // ... data lama ...
  kotaBaru: {
    name: "Kota Baru",
    description: "...",
    history: "...",
    geography: "...",
    population: "...",
    economy: "...",
    attractions: [ ... ]
  }
}
```

2. Buat wrapper component di `src/components/kota-baru/KotaBaru.jsx`:
```jsx
import React from 'react';
import CityTemplate from '../fitur/CityTemplate';

const KotaBaru = () => {
  return <CityTemplate cityKey="kotaBaru" cityUrl="/kota-baru" />;
};

export default KotaBaru;
```

3. Import di `App.js`:
```jsx
import KotaBaru from './components/kota-baru/KotaBaru';
```

4. Tambah route di `App.js`:
```jsx
<Route path="/kota-baru" element={<KotaBaru />} />
```

## Responsivity

CityTemplate sudah fully responsive:
- **Mobile (xs)**: 1 kolom, padding kecil
- **Tablet (sm-md)**: 1 kolom, padding sedang
- **Desktop (lg+)**: 2 kolom layout dengan sticky sidebar
