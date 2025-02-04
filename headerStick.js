let header;
let tint = 'scroll-tint';

document.addEventListener("DOMContentLoaded", function () {
  
  header = document.querySelector(".header__container");
})

document.addEventListener('scroll', function(event) {
  let header = document.querySelector(".header__container");
  console.log(header);
  if (window.scrollY > 0 ) {
    header.classList.add('header_stick');
  }
  else {
    header.classList.remove('header_stick');
  }
})