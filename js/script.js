// Toggle class active
const navbarNav = document.querySelector('.navbar-nav'); // Pastikan selector benar
// ketika fooddrink menu di klik
document.querySelector('#fooddrinkmenu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const fooddrink = document.querySelector('#fooddrink-menu');

document.addEventListener('click', function(e) {
    if (!fooddrink.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});