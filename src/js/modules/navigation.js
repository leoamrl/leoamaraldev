const header = document.querySelector('.header'),
      menuTrigger = document.querySelector('[data-selector=menuTrigger]'),
      menuCloser = document.querySelector('[data-selector=menuCloser]'),
      menu = document.querySelector('[data-selector=menu]'),
      workTrigger = document.querySelector('[data-selector=workTrigger]')
      aboutTrigger = document.querySelector('[data-selector=aboutTrigger]'),
      about = document.querySelector('[data-selector=about'),
      contactTrigger = document.querySelectorAll('[data-selector=contactTrigger]'),
      contact = document.querySelector('[data-selector=contact'),
      contactCloser = document.querySelectorAll('[data-selector=contactCloser]');

function toggleMenu(e) {
  menu.classList.toggle('open')
  menuTrigger.classList.toggle('open')
}
function closeMenu(e) {
  menu.classList.remove('open')
  menuTrigger.classList.remove('open')
}

function openWork(e) {
  menu.classList.toggle('open')
  menuTrigger.classList.toggle('open')
  closeMenu()
  closeAbout()
}

function openAbout(e) {
  document.body.style.overflow = 'hidden';
  header.classList.add('header--about')
  about.classList.add('open')
  closeMenu()
}

function closeAbout(e) {
  header.classList.remove('header--about')
  document.body.style.overflow = 'initial';
  about.classList.remove('open')
}

function toogleContact(e) {
  console.log('contact opened')
  contact.classList.add('open')
  closeMenu()
}

function closeContact(e) {
  contact.classList.remove('open')
}

menuTrigger.addEventListener('click', toggleMenu)
menuCloser.addEventListener('click', closeMenu)

contactTrigger.forEach(item => {
  item.addEventListener('click', toogleContact)
});

contactCloser.forEach(item => {
  item.addEventListener('click', closeContact)
});

aboutTrigger.addEventListener('click', openAbout)

workTrigger.addEventListener('click', openWork)
