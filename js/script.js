// ? header-fixed

window.onscroll = function scrollHeader () {
   var header = document.querySelector('.header');

   if(window.pageYOffset > 93) {
      header.classList.add('.header-fixed');
   } else {
      header.classList.remove('.header-fixed');
   }
}

