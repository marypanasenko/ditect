var aboutButton = document.querySelector('.about-us__button');
aboutButton.addEventListener('click', function() {
  if (aboutButton.classList.contains('about-us__button--up')) {
    aboutButton.classList.remove('about-us__button--up');
    aboutButton.classList.add('about-us__button--down');
  } else {
    aboutButton.classList.remove('about-us__button--down');
    aboutButton.classList.add('about-us__button--up');
  }
});
