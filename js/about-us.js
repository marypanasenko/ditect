var aboutUs = document.querySelector('.about-us__text-wrapper');
var aboutText = document.querySelector('.about-us__fulltext');
var aboutButton = document.querySelector('.about-us__button');
var pageHeader = document.querySelector('.page-header');

aboutText.classList.remove('about-us__fulltext--nojs');
aboutUs.classList.remove('about-us__text-wrapper--nojs');

aboutButton.addEventListener('click', function() {
  if (aboutText.classList.contains('about-us__fulltext--hidden')) {
    aboutText.classList.remove('about-us__fulltext--hidden');
    aboutText.classList.add('about-us__fulltext--opened');
  } else {
    aboutText.classList.add('about-us__fulltext--hidden');
    aboutText.classList.remove('about-us__fulltext--opened');
  }
});

aboutButton.addEventListener('click', function() {
  if (aboutUs.classList.contains('about-us__text-wrapper--closed')) {
    aboutUs.classList.remove('about-us__text-wrapper--closed');
    aboutUs.classList.add('about-us__text-wrapper--opened');
  } else {
    aboutUs.classList.add('about-us__text-wrapper--closed');
    aboutUs.classList.remove('about-us__text-wrapper--opened');
  }
});
