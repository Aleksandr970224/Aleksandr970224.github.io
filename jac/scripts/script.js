// Header

const changeColorHeader = () => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 80) {
            document.querySelector('.header').classList.add('scroll');
        } else {
            document.querySelector('.header').classList.remove('scroll');
        }
    })
}
changeColorHeader();


window.addEventListener('resize', (event) => {
    console.log(event);
    if (outerWidth < 360) {
        console.log('yes');
    } else {
        console.log('no');
    }
})

// Slider car

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

let arrowsNext = document.querySelectorAll('.swiper-button-next');
let arrowsPrev = document.querySelectorAll('.swiper-button-prev');

let arrBlurRight = document.querySelectorAll('.right-blur');
let arrBlurLeft = document.querySelectorAll('.left-blur');


const changeStateArrow = () => {
    for (let i = 0; i < arrowsNext.length; i++) {
        if (arrowsNext[i].classList.contains('swiper-button-disabled')) {
            arrBlurRight[i].classList.add('hidden');
            arrBlurLeft[i].classList.add('active');
        }
    }
    for (let i = 0; i < arrowsPrev.length; i++) {
        if (arrowsPrev[i].classList.contains('swiper-button-disabled')) {
            arrBlurRight[i].classList.remove('hidden');
            arrBlurLeft[i].classList.remove('active');
        }
    }
}


// Конфигурация observer (за какими изменениями наблюдать)
const config = {
    attributes: true
};

// Колбэк-функция при срабатывании мутации
const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === "attributes") {
            changeStateArrow();
        }
    }
};

// Создаём экземпляр наблюдателя с указанной функцией колбэка
const observer = new MutationObserver(callback);

// Начинаем наблюдение за настроенными изменениями целевого элемента
arrowsNext.forEach(el => {
    observer.observe(el, config);
})



// Footer

let btnShowFullOferta = document.querySelector('.btn-show-full-oferta');

btnShowFullOferta.addEventListener('click', () => {
    document.querySelector('.mini-oferta').style.display = 'none';
    document.querySelector('.full-oferta').style.display = 'block';
})




// Modal fancy

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});