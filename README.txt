JIMPITAN DIGITAL — PAKET WEB APP

Isi:
- index.html: aplikasi dengan tombol notifikasi dan pemasangan
- manifest.json: identitas web app
- sw.js: service worker untuk instalasi dan cache dasar
- icons/: ikon 192x192 dan 512x512

CARA PAKAI
1. Unggah semua isi folder ini ke hosting yang mendukung HTTPS (misalnya hosting statis).
2. Buka https://alamat-situs-anda/Jimpitan.html lewat Chrome.
3. Tekan tombol Notifikasi untuk meminta izin notifikasi.
4. Untuk memasang, tekan Pasang App jika muncul. Jika tidak, gunakan menu Chrome (⋮) > Instal aplikasi / Tambahkan ke layar utama.
5. Pastikan Jimpitan.html, manifest.json, sw.js, dan folder icons berada pada lokasi relatif yang sama.

CATATAN NOTIFIKASI
Notifikasi sistem menggunakan izin Notification API. Pemberitahuan dari aplikasi akan muncul ketika halaman masih berjalan di latar belakang dan izin diberikan. Notifikasi push ketika aplikasi benar-benar tertutup memerlukan layanan push/backend tambahan dan belum termasuk dalam paket ini.
Data aplikasi saat ini tetap mengikuti penyimpanan lokal/Firebase yang sudah ada. Gunakan HTTPS; PWA/service worker tidak berfungsi penuh jika HTML dibuka langsung sebagai file lokal.
