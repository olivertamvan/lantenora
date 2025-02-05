window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("hidden");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzi03l2Zf_r5jE6vAl98msRT5P0ZMwlIt5IVrl-ModKfwjXGt2sNf8CbIQvNFWNP-xg/exec";
const form = document.forms["submit-to-google-sheet"];
const btnkrm = document.querySelector(".btn-kirim");
const btnloding = document.querySelector(".btn-loding");
const alert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnloding.classList.toggle("d-none");
  btnkrm.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnloding.classList.toggle("d-none");
      btnkrm.classList.toggle("d-none");
      alert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

const audio = document.getElementById('background-audio');
audio.volume = 0.5; // Atur volume (opsional)

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});

const popupData = [
  {
    title: "Persiapan Botol Plastik",
    description: "Potong bagian atas dan bawah botol plastik hingga hanya tersisa bagian tengah (bentuk tabung)."
  },
  {
    title: "Persiapan Karton",
    description: "Gunting karton sesuai dengan tinggi botol plastik, lalu bungkus bagian luar botol dengan karton. Pastikan karton menutupi botol dengan rapi."
  },
  {
    title: "Dekorasi Kupu-Kupu",
    description: "Gunting gambar kupu-kupu dari kertas warna atau gunakan kertas dekoratif. Anda bisa membuat berbagai ukuran kupu-kupu."
  },
  {
    title: "Pemasangan Kupu-Kupu",
    description: "Tempelkan kupu-kupu yang sudah dibuat ke karton yang membungkus botol plastik. Pastikan posisinya merata dan rapi."
  },
  {
    title: "Pemasangan Lampu",
    description: "Letakkan lampu LED kecil atau lampu hias di dalam botol plastik."
  },
  {
    title: "Pembuatan Tali Gantung",
    description: "Buat dua lubang kecil di bagian atas lentera (di karton dan botol plastik). Masukkan tali melalui lubang tersebut untuk menggantungkan lentera."
  },
  {
    title: "Penyelesaian",
    description: "Pastikan semua bagian menempel dengan baik, dan lampu menyala dengan sempurna. Lentera Anda siap digunakan!"
  }
];

function openPopup(index) {
  const popup = document.getElementById("popupContent");
  const overlay = document.getElementById("popupOverlay");
  document.getElementById("popupTitle").innerText = popupData[index - 1].title;
  document.getElementById("popupDescription").innerText = popupData[index - 1].description;
  popup.classList.add("active");
  overlay.classList.add("active");
}

function closePopup() {
  const popup = document.getElementById("popupContent");
  const overlay = document.getElementById("popupOverlay");
  popup.classList.remove("active");
  overlay.classList.remove("active");
}