// Toggle class active
const navbarNav = document.querySelector('navbar-nav');
// ketika fooddrink menu di klik
document.querySelector('#fooddrinkmenu').oneclick = () => {
    navbarNav.classList.toggle('active');
};

//klik di luar sidebar untuk menghilangkan nav
const fooddrink = document.querySelector ('#fooddrink-menu');