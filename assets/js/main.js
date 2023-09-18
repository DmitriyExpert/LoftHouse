/* NAV ICON */

const navIconBTN = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const headerTopRow = document.querySelector('.header__top-row');
const body = document.querySelector('body');


navIconBTN.addEventListener('click', () => {
     if (navIcon.classList.contains('nav-icon--active')) {
          navIcon.classList.remove('nav-icon--active')
          headerTopRow.classList.remove('header__top--row--mobile');
          body.classList.remove('bodyscroll--hidden')
     } else {
          navIcon.classList.add('nav-icon--active');
          headerTopRow.classList.add('header__top--row--mobile');
          body.classList.add('bodyscroll--hidden')
     }
});


/* Phone Mask */

mask('[data-tel-input]');

const phoneInput = document.querySelectorAll('[data-tel-input]');

phoneInput.forEach((input) => {
     input.addEventListener('input', () => {
          if (input.value == '+') {
               input.value = ''
          }
     });

     input.addEventListener('blur', () => {
          if (input.value == '+') {
               input.value = ''
          }
     });

});



ymaps.ready(init);
function init(){

     var myMap = new ymaps.Map("map", {

          center: [59.943543, 30.338928],

          zoom: 16,
     });

     var myPlacemark = new ymaps.Placemark([59.943543, 30.338928], {
          balloonContent:
          `<div class="balloon">
               <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
               <div class="balloon__contacts">
                    <a href="tel:+78121234567">+8 (812) 123-45-67</a>
               </div>
          </div>`
          }, {
          iconLayout: 'default#image',
          iconImageHref: './../../assets/img/map/location-pin.svg',
          icon_imagesize: [40, 40],
          iconImageOffset: [-20, -40]
     });

     
     
     myMap.geoObjects.add(myPlacemark); 
}