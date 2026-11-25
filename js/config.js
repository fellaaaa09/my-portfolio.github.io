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
    { title: "Project Satu", description: "Deskripsi singkat project satu.", image: "images/project1.jpg", link: "" },
    { title: "Project Dua", description: "Deskripsi singkat project dua.", image: "images/project2.jpg", link: "" },
  ],

  // ---------- CONTACT ----------
  contact: {
    email: "emailkamu@gmail.com", // pesan dari form akan dikirim ke email ini
    instagram: "https://www.instagram.com/username_kamu/",
  },
};
