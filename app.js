const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const imgEl = document.querySelector('.img');

let activeSlide = 1;
const updateContent = function () {

    imgEl.style.backgroundImage = `url(./img-${activeSlide}.jpg)`;
    document.body.style.backgroundImage = `url(./img-${activeSlide}.jpg)`;

  } 

leftArrow.addEventListener('click', () => {
  activeSlide <= 1 ? activeSlide = 6 : activeSlide--;
  updateContent();
  })


rightArrow.addEventListener('click', () => {
  activeSlide < 6 ? activeSlide++ : activeSlide = 1;
  updateContent();
})