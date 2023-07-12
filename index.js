$(window).scroll(function(){
    $("#about-img").css("opacity", 2 - $(window).scrollTop() / 1000);
});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main-body-container").style.overflowY = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main-body-container").style.overflowY = "visible";
}


var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 22,
  sliderPerGroup: 3,
  loop: true,
  autoplay: ({ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false }),
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  speed: 1000,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   dynamicBullets: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  breakpoints: {
    0: {
      slidesPerView: 1,
      sliderPerGroup: 1
    },
    520: {
      slidesPerView: 2,
      sliderPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      sliderPerGroup: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
}); 




































// document.addEventListener('DOMContentLoaded', function() {
//   const slider = document.querySelector('.slider');
//   const slides = slider.getElementsByClassName('slide');
//   const dots = document.getElementsByClassName('dot');
//   const prevButton = document.querySelector('.prev-button');
//   const nextButton = document.querySelector('.next-button');
  
//   let currentIndex = 0;
//   let interval;
//   console.log('current index'+currentIndex);
  
//   function showSlide(index) {
//     console.log(index);
//     let indexHandler = index;
//     if (index < 0) {
//       indexHandler = slides.length - 1;
//     } else if (index >= slides.length) {
//       indexHandler = 0;
//     }
    
//     slider.style.transform = `translateX(-${indexHandler * 100}%)`;
//     console.log(slider.style.transform = `translateX(-${indexHandler * 100}%)`);
    
//     for (let i = 0; i < dots.length; i++) {
//       dots[i].classList.remove('active');
//     }
    
//     dots[indexHandler].classList.add('active');
//   }
  
//   function nextSlide() {
//     console.log('NextSlide current index: ' + currentIndex);
//     showSlide(currentIndex + 1);
//   }
  
//   function prevSlide() {
//     console.log('PRevSlide current index: ' + currentIndex);
//     showSlide(currentIndex - 1
//       );
//   }
  
//   function startAutoNext() {
//     // interval = setInterval(nextSlide, 5000);
//   }
  
//   function stopAutoNext() {
//     clearInterval(interval);
//   }
  
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener('click', function() {
//       showSlide(i);
//       stopAutoNext();
//     });
//   }
  
//   nextButton.addEventListener('click', function() {
//     nextSlide();
//     stopAutoNext();
//   });
  
//   prevButton.addEventListener('click', function() {
//     prevSlide();
//     stopAutoNext();
//   });
  
//   startAutoNext();
// });
