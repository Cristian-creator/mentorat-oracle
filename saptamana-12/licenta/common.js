// ------- Setup sidebar -------
const navbarCartIcon = document.querySelector('.navbar-cart-icon');
const sidebar = document.querySelector('.sidebar-container');
const overlay = document.querySelector('.overlay');

const openSidebar = () => {
    sidebar.style.transform = 'translateX(0px)';
    overlay.style.display = 'block';
};

navbarCartIcon.addEventListener('click', openSidebar);

const closeSidebar = () => {
    sidebar.style.transform = 'translateX(110%)';
    overlay.style.display = 'none';
};

overlay.addEventListener('click', closeSidebar);