

// Боковое меню на мобилке

let burgerOpen = document.querySelector('.burger-open');
let burgerClose = document.querySelector('.burger-close');
let sideMenu = document.querySelector('.side-menu');
let linkSideMenu = document.querySelectorAll('.side-menu-list li a')


const changeBurger = (open, close, menu) => {
    if (menu.classList.contains('active')) {
        open.style.display = 'none';
        close.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {

        close.style.display = 'none';
        open.style.display = 'block';
        document.body.style.overflow = 'visible';
    };
};

const changeSIdeMenu = (open, close, arrLink, menu) => {

    open.addEventListener('click', () => {
        menu.classList.add('active');
        menu.style.width = '100vw';
        changeBurger(burgerOpen, burgerClose, sideMenu);
        document.querySelector('.header').classList.add('scrolled');
        document.querySelector('.white-logo').style.display = 'none';
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
        menu.style.width = '0vw';
        changeBurger(burgerOpen, burgerClose, sideMenu);
        document.querySelector('.header').classList.remove('scrolled');
        document.querySelector('.white-logo').style.display = 'block';
    });


    arrLink.forEach(el => {
        el.addEventListener('click', () => {
            menu.classList.remove('active');
            menu.style.width = '0vw';
            changeBurger(burgerOpen, burgerClose, sideMenu);
            //   document.querySelector('.header').classList.remove('scrolled');
        });
    });

};

changeSIdeMenu(burgerOpen, burgerClose, linkSideMenu, sideMenu);


window.addEventListener('resize', (e) => {
    if (e.target.innerWidth > 639) {
        burgerOpen.style.display = 'none';
        burgerClose.style.display = 'none';
    } else {
        burgerOpen.style.display = 'block';
        burgerClose.style.display = 'none';
    }
});


// Хедер при скроле

window.addEventListener('scroll', () => {
    if (pageYOffset > 56) {
        document.querySelector('.header').classList.add('scrolled');
        document.querySelector('.white-logo').style.display = 'none';
    } else {
        document.querySelector('.header').classList.remove('scrolled');
        document.querySelector('.white-logo').style.display = 'block';
    }
    burgerOpen.addEventListener('click', () => {
        if (sideMenu.classList.contains('active') && pageYOffset < 56) {
            document.querySelector('.header').classList.add('scrolled');
            document.querySelector('.white-logo').style.display = 'none';
        }
    });

    burgerClose.addEventListener('click', () => {
        if (!sideMenu.classList.contains('active') && pageYOffset < 56) {
            document.querySelector('.header').classList.remove('scrolled');
            document.querySelector('.white-logo').style.display = 'block';
        } else {
            document.querySelector('.header').classList.add('scrolled');
            document.querySelector('.white-logo').style.display = 'none';
        }
    });
});


// Показать\скрыть юр.инфо

let btnShowDisclaimer = document.querySelector('.btn-show-disclaimer');
let disclaimer = document.querySelector('.disclaimer');
let disclaimerFull = document.querySelector('.disclaimer-full');

btnShowDisclaimer.addEventListener('click', () => {

    if (!disclaimer.classList.contains('hidden')) {
        disclaimer.classList.add('hidden');
        disclaimerFull.classList.add('show');
    } else {
        disclaimer.classList.remove('hidden');
        disclaimerFull.classList.remove('show');
    }
})