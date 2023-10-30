let imgTableFirst = document.querySelector('.wrapper-table img');

let collectionBtnUpDown = document.querySelectorAll('.wrapper-table button');

const changePositionImg = (array, img) => {
  array.forEach(el => {
    el.addEventListener('click', (event) => {
      if(event.target === array[0]) {
        img.classList.remove('down');
        img.classList.add('up');
      } else {
        img.classList.remove('up');
        img.classList.add('down');
      }
    })
  })
};

changePositionImg(collectionBtnUpDown, imgTableFirst);