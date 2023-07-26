import '../scss/app.scss';
import './assets/favicon-32x32.png';
import menuSrc from './assets/icon-menu.svg';
import close from './assets/icon-menu-close.svg';
import './assets/image-gaming-growth.jpg';
import './assets/image-retro-pcs.jpg';
import './assets/image-top-laptops.jpg';
import './assets/image-web-3-desktop.jpg';
import './assets/image-web-3-mobile.jpg';
import './assets/logo.svg';
const mobileNav = document.querySelector('.mobile-nav');
const menu = document.querySelector('.menu');
const menuImg = document.querySelector('.menu img');
const news_web = document.querySelector('.news_web');
const news_articles = document.querySelector('.news_articles');
const news_technology = document.querySelector('.news_technology > div');
menuImg.src = menuSrc;

menu.addEventListener('click', () => {
    if (mobileNav.classList.contains('close')) {
        mobileNav.classList.remove('close');
        menuImg.src = close;
    } else {
        mobileNav.classList.add('close');
        menuImg.src = menuSrc;
    }
})

// on load effect 
window.addEventListener('load', () => {
    news_web.style.opacity = 1;
    news_articles.style.opacity = 1;
})

// on scroll effect
// Wait for the DOM to be fully loaded before initializing AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true, // Only trigger the animation once
        offset: 50, // Offset to trigger the animation before the element enters the viewport
        duration: 1200, // Animation duration (in milliseconds)
    });
});




