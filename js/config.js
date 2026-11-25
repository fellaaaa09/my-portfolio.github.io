/* =========================================================
   FILE INI ADALAH PUSAT PENGATURAN.
   Ubah isi di sini, semua halaman otomatis ikut berubah.
   ========================================================= */
const CONFIG = {
  // ---------- DASHBOARD ----------
  title: "Portofolio", // judul besar di dashboard
  subtitle: "Pelajar", // teks kecil di bawah judul
  name: "Fella Ferizka Lutviana",
  photo: "images/mee.jpeg", // taruh fotomu di folder images/

  // ---------- ABOUT ME ----------
  about: {
    paragraphs: [
      "Halo perkenalkan saya Fella Ferizka Lutviana siswi dari SMK Negeri 5 Malang , saya lahir di Malang dan saya tinggal di Jalan Simpang Piranha Atas , saya suka mengubah ide menjadi design digital yang menarik dan mudah dipahami seperti poster atau logo , bagi saya design yang bagus bukan hanya soal terlihat bagus , tapi juga bisa menyampaikan pesan dan cerita.",
    ],
    // Tambah / hapus baris biodata sesukamu
    biodata: [
      { label: "Nama", value: "Fella Ferizka Lutviana" },
      { label: "Tempat Lahir", value: "Malang" },
      { label: "Pendidikan", value: "SMKN 5 MALANG" },
    ],
  },

  // ---------- PROJECT ----------
  // Tambah project dengan menyalin 1 blok { ... }, lalu tempel di bawahnya.
  // Taruh gambar di folder images/. Ukuran gambar TIDAK diubah/di-crop.
  projects: [
    {
      title: "Poster Edukasi & Inspirasi: Mari Berbagi Kebaikan",
      description:
        "Poster bertema ajakan berbagi dan kebaikan ini dirancang menggunakan palet warna hangat bernuansa krem lembut, aksen oranye-merah muda, serta ilustrasi karakter anak yang ceria untuk menciptakan kesan ramah dan mudah diterima.",
      image: "images/1.jpeg",
      link: "",
    },
    {
      title: "Glaze & Glory — Desain Flyer Promosi Donat & Daftar Varian",
      description:
        "Poster promosi produk kuliner untuk merek Glaze & Glory ini menonjolkan tampilan ilustrasi tiga donat berlapis glaze di atas piring dan kain kotak-kotak biru yang ditempatkan di tengah komposisi agar langsung menarik perhatian.",
      image: "images/2.jpeg",
      link: "",
    },
  ],

  // ---------- CONTACT ----------
  contact: {
    email: " ferizkafella@gmail.com",
    instagram: "https://www.instagram.com/fellaa__aaa/",
  },
};
