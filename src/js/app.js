import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".reviews__swiper", {
    grabCursor: true,
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween:30,
    watchSlidesProgress: true,
    navigation:{
        prevEl: ".reviews__button-prev",
        nextEl: ".reviews__button-next",
    },
    pagination:{
        el: '.reviews__pagination',
    },
    breakpoints:{
        575:{
            slidesPerView: 3,
            spaceBetween:30,
        }
    }
});

new Swiper(".cases__swiper", {
    grabCursor: true,
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween:20,
    watchSlidesProgress: true,
    navigation:{
        prevEl: ".cases__button-prev",
        nextEl: ".cases__button-next",
    },
    pagination:{
        el: '.cases__pagination',
    },
    breakpoints:{
        576: {
            slidesPerView: 4,
            spaceBetween:20,
        },
        1200:{
            slidesPerView: 4,
            spaceBetween:30,
        }
    }
});

const menu = document.querySelector('.menu');
const headerList = document.querySelector('.header__list');
const links = document.querySelectorAll('.header__link');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    headerList.classList.toggle('active')
    body.classList.toggle('active')
})

links.forEach(el => {
    el.addEventListener('click', () => {
        menu.classList.remove('active')
        headerList.classList.remove('active')
        body.classList.remove('active')
    })
})
