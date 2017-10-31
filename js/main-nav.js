var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggler');
var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav__list--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__list--opened')) {
    navMain.classList.remove('main-nav__list--opened');
    navMain.classList.add('main-nav__list--closed');
  } else {
    navMain.classList.add('main-nav__list--opened');
    navMain.classList.remove('main-nav__list--closed');
  }
});

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('burger')) {
    navToggle.classList.remove('burger');
    navToggle.classList.add('cross');
  } else {
    navToggle.classList.add('burger');
    navToggle.classList.remove('cross');
  }
});

navToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--noshadow')) {
    pageHeader.classList.remove('page-header--noshadow');
    pageHeader.classList.add('page-header--shadow');
  } else {
    pageHeader.classList.add('page-header--noshadow');
    pageHeader.classList.remove('page-header--shadow');
  }
});
