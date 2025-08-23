# Thoyokem Indonesia Website

Website resmi Thoyokem Indonesia - penyedia solusi kimia tekstil berkualitas untuk mendukung industri tekstil nasional.

## Struktur File

### File Utama
- `index.html` - Halaman beranda
- `perusahaan.html` - Halaman tentang perusahaan
- `produk.html` - Halaman produk
- `sertifikasi.html` - Halaman sertifikasi
- `news.html` - Halaman berita
- `contact.html` - Halaman kontak

### File Include
- `includes/header.html` - Header yang digunakan di semua halaman
- `includes/footer.html` - Footer yang digunakan di semua halaman
- `includes/template.html` - Template dasar untuk halaman baru

### File JavaScript
- `assets/js/includes.js` - Script untuk memuat header dan footer

### File CSS
- `assets/css/style.css` - Stylesheet utama

## Sistem Include Header dan Footer

Website ini menggunakan sistem include untuk header dan footer yang memungkinkan:

1. **Konsistensi**: Header dan footer sama di semua halaman
2. **Maintenance**: Perubahan header/footer cukup dilakukan di satu file
3. **Performance**: Tidak ada duplikasi kode HTML

### Cara Kerja

1. Setiap halaman memiliki container untuk header dan footer:
   ```html
   <!-- Header Container - Akan diisi oleh JavaScript -->
   <div id="header-container"></div>
   
   <!-- Footer Container - Akan diisi oleh JavaScript -->
   <div id="footer-container"></div>
   ```

2. File `assets/js/includes.js` akan memuat konten header dan footer dari file terpisah

3. Header dan footer akan otomatis dimuat saat halaman dibuka

### Menambah Halaman Baru

Untuk menambah halaman baru:

1. Gunakan `includes/template.html` sebagai dasar
2. Ganti placeholder dengan konten yang sesuai:
   - `PAGE_TITLE` - Judul halaman
   - `PAGE_DESCRIPTION` - Deskripsi halaman
   - `PAGE_HEADING` - Heading utama halaman
   - `PAGE_CONTENT` - Konten halaman

3. Pastikan file `assets/js/includes.js` di-include di halaman baru

### Struktur Header

Header berisi:
- Logo Thoyokem Indonesia
- Menu navigasi utama
- Menu mobile dengan hamburger button
- Fungsi pergantian logo saat scroll

### Struktur Footer

Footer berisi:
- Logo dan deskripsi perusahaan
- Link produk
- Link perusahaan
- Informasi kontak
- Social media links
- Sertifikasi dan copyright

## Fitur

- **Responsive Design**: Mendukung desktop dan mobile
- **Mobile Menu**: Menu hamburger untuk perangkat mobile
- **Logo Switching**: Logo berubah saat scroll
- **SEO Optimized**: Meta tags dan struktur HTML yang baik
- **Performance**: Lazy loading dan optimasi performa

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Teknologi

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Responsive Design
- Mobile-first approach

## Kontak

- Email: thoyokemindonesia@gmail.com
- Website: https://thoyokem.co.id

## Lisensi

© 2024 Thoyokem Indonesia. All rights reserved.
