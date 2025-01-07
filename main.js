const btn = document.querySelector('.yellow');
const menu = document.querySelector('.list');
const arrow = document.querySelector('.arrow');


btn.addEventListener('click', function() {
    menu.classList.toggle('no-active');
    arrow.classList.toggle('arrow__active');
})

const myCarouselElement = document.querySelector('#carouselExampleIndicators')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: false
  
})
