const menuTrigger = document.querySelector('[data-selector=menuTrigger]'),
      menu = document.querySelector('[data-selector=menu]'),
      aboutTrigger = document.querySelector('[data-selector=aboutTrigger]'),
      contactTrigger = document.querySelectorAll('[data-selector=contactTrigger]');

function openMenu(e) {
  menu.classList.toggle('open')
  menuTrigger.classList.toggle('open')
}

function openAbout(e) {
  console.log('about opened')
  menu.classList.toggle('open')
  menuTrigger.classList.toggle('open')
}

menuTrigger.addEventListener('click', openMenu)

aboutTrigger.addEventListener('click', openAbout)
