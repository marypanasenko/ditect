var aboutUs = document.querySelector('.about-us__text-wrapper');
var aboutButton = document.querySelector('.about-us__button');

aboutUs.classList.remove('about-us__text-wrapper--nojs');

aboutButton.addEventListener('click', function() {
  if (aboutUs.classList.contains('about-us__text-wrapper--closed')) {
    aboutUs.classList.remove('about-us__text-wrapper--closed');
    aboutUs.classList.add('about-us__text-wrapper--opened');
  } else {
    aboutUs.classList.add('about-us__text-wrapper--closed');
    aboutUs.classList.remove('about-us__text-wrapper--opened');
  }
});
