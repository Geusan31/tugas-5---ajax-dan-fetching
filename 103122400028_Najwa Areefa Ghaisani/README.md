# React Data Fetching & Search

Nama: Najwa Areefa Ghaisani
NIM: 103122400028
Kelas: SE 08-01

Aplikasi web sederhana berbasis React untuk menampilkan daftar pengguna dari JSONPlaceholder API menggunakan Axios, dikelola dengan React Hooks (`useState`, `useEffect`), dan dilengkapi fitur pencarian data secara *client-side*.

## Fitur Utama
- **Data Fetching:** Mengambil data pengguna secara otomatis dari REST API (`https://jsonplaceholder.typicode.com/users`) menggunakan Axios.
- **Client-side Search:** Memfilter daftar pengguna secara real-time berdasarkan nama (`name`).
- **Loading & Error Handling:** Menampilkan indikator saat data sedang dimuat serta penanganan pesan jika terjadi kendala pada jaringan/server.
- **Empty State:** Memberikan informasi apabila pencarian tidak menemukan hasil.

## Cara Menjalankan Proyek
1. Pastikan Node.js sudah terinstal di komputer Anda.
2. Clone repository ini atau buka folder proyek di terminal.
3. Instal semua dependensi yang diperlukan:
   ```bash
   npm install