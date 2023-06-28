const mobileNav = document.querySelector('.mobile-nav');
const menu = document.querySelector('.menu');
const menuImg = document.querySelector('.menu img');

menu.addEventListener('click', () => {
    if (mobileNav.classList.contains('close')) {
        mobileNav.classList.remove('close');
        menuImg.src = './assets/images/icon-menu-close.svg';
    } else {
        mobileNav.classList.add('close');
        menuImg.src = './assets/images/icon-menu.svg';
    }
})