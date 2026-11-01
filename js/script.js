//bikin animasi buat si humburger menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#humburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};  

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus()
    e.preventDefault();
}

// ini buat biar kalau di click dimana aja bisa tetep ilang si navbarnya

const humBer = document.querySelector('#humburger-menu');

document.addEventListener('click', function(e) {
    if(!humBer.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    };
});

//ini buat si  bro aja ya wkwkwkw

const nyari = document.querySelector('#search');

document.addEventListener('click', function(e) {
    if(!nyari.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    };
});

//buat animasi loading biar keren aja

const intro = document.getElementById('intro');
const MIN_TIME = 2200; // lama minimal intro tampil (ms)
const startTime = performance.now();

function hideIntro() {
  if (!intro || intro.classList.contains('hide')) return;

  const wait = Math.max(0, MIN_TIME - (performance.now() - startTime));

  setTimeout(() => {
    intro.classList.add('hide');
    document.body.classList.remove('loading');
    setTimeout(() => intro.remove(), 1000); // hapus dari DOM setelah selesai meluncur
  }, wait);
}

if (document.readyState === 'complete') {
  hideIntro();
} else {
  window.addEventListener('load', hideIntro);
}

// jaring pengaman: kalau ada gambar yang nyangkut, tetap tutup setelah 6 detik
setTimeout(hideIntro, 6000);