const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    direction: 'horizontal',
   // loop: true,       loop is causing prev slide to be partly visible on the left of slider ??? - re add once I've found out how to correct.
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });