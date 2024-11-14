// Toggle class active
const navbarNav = document.querySelector('navbar-nav');
// ketika fooddrink menu di klik
document.querySelector('#fooddrinkmenu').oneclick = () => {
    navbarNav.classList.toggle('active');
};