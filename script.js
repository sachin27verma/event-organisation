// let menu = document.querySelector('#menu-bars');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// }

// let themeToggler = document.querySelector('.theme-toggler');
// let toggleBtn = document.querySelector('.toggle-btn');

// toggleBtn.onclick = () =>{
//   themeToggler.classList.toggle('active');
// }

// window.onscroll = () =>{
//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');
//   themeToggler.classList.remove('active');
// }

// document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
//   btn.onclick = () =>{
//     let color = btn.style.background;
//     document.querySelector(':root').style.setProperty('--main-color', color);
//   }

// });

// var swiper = new Swiper(".home-slider", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2,
//     slideShadows: true,
//   },
//   loop:true,
//   autoplay:{
//     delay: 3000,
//     disableOnInteraction:false,
//   }
// });

// var swiper = new Swiper(".review-slider", {
//     slidesPerView: 1,
//     grabCursor: true,
//     loop:true,
//     spaceBetween: 10,
//     breakpoints: {
//       0: {
//           slidesPerView: 1,
//       },
//       700: {
//         slidesPerView: 2,
//       },
//       1050: {
//         slidesPerView: 3,
//       },    
//     },
//     autoplay:{
//       delay: 5000,
//       disableOnInteraction:false,
//   }
// });
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}