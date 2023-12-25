// Side menu

let btnOpenSideMenu = document.querySelector('#burger-mobile');
let btnCloseSideMenu = document.querySelector('#close-burger-mobile');
let listLinkSideMenu = document.querySelectorAll('.list-side-menu li');
let btnCallBackSideMenu = document.querySelector('.side-menu .btn-get-offer');

const openSideMenu = () => {
    document.querySelector('.side-menu').style.width = '100vw';
    document.querySelector('.list-side-menu').style.display = 'block';
    document.querySelector('.wrapper-card-contacts.side').style.display = 'block';
    btnCloseSideMenu.style.display = 'block';
    btnOpenSideMenu.style.display = 'none';
    document.querySelector('body').style.overflow = 'hidden';
};

const closeSideMenu = () => {
    document.querySelector('.side-menu').style.width = '0';
    document.querySelector('.list-side-menu').style.display = 'none';
    document.querySelector('.wrapper-card-contacts.side').style.display = 'none';
    btnCloseSideMenu.style.display = 'none';
    btnOpenSideMenu.style.display = 'block';
    document.querySelector('body').style.overflow = 'visible';
};

const windowResize = () => {
    window.addEventListener('resize', () => {
        if (innerWidth > 600) {
            btnOpenSideMenu.style.display = 'none';
        } else {
            btnOpenSideMenu.style.display = 'block';
        }
    });
};
windowResize();

btnOpenSideMenu.addEventListener('click', () => {
    openSideMenu();
});

btnCloseSideMenu.addEventListener('click', () => {
    closeSideMenu();
});

listLinkSideMenu.forEach(el => {
    el.addEventListener('click', () => {
        closeSideMenu();
    });
});

btnCallBackSideMenu.addEventListener('click', () => {
    closeSideMenu()
})



// Красная линия над картинками

let collectionImgModels = document.querySelectorAll('.central-content img');

const addLineImg = (arr) => {
    arr.forEach(el => {
        el.addEventListener('click', () => {
            arr.forEach(el => el.classList.remove('active'));

            el.classList.add('active');
        });
    });
};
addLineImg(collectionImgModels);