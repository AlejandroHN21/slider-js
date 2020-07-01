window.addEventListener('load',()=>{

// primer slider
    new Glider(document.querySelector('.carousel'),{
       slidesToShow: 1,
       slidesToScroll: 1,
       draggable: true,
       dots: '.indicadores',
       arrows: {
           prev: '.boton-Anterior',
           next: '.boton-Siguiente'
       },
       responsive: [
               {
               // screens greater than >= 775px
               breakpoint: 650,
               settings: {
                   // Set to `auto` and provide item width to adjust to viewport
                   slidesToShow: 2,
                   slidesToScroll: 2,
                   itemWidth: 150,
                   duration: 0.25
               }
               },{
               // screens greater than >= 1024px
               breakpoint: 1024,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 3,
                   itemWidth: 150,
                   duration: 0.25
               }
               }
           ]
    })
//   ..................................................................................

})    