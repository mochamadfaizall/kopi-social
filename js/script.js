//bikin animasi buat si humburger menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#humburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};  

// ini buat biar kalau di click dimana aja bisa tetep ilang si navbarnya

const humBer = document.querySelector('#humburger-menu');

document.addEventListener('click', function(e) {
    if(!humBer.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    };
});