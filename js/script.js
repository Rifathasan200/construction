



$(window).scroll(function(){
    console.log($(window).scrollTop())

    if($(window).scrollTop() >300){
$(".menu").addClass("nav-scroll")
    }else{
        $(".menu").removeClass("nav-scroll") 
    }



    if($(window).scrollTop() >600){
      $(".top-button") .fadeIn()
          }else{
            $(".top-button") .fadeOut()
          }

})



$('.counter').counterUp({
  time: 1000,
  
});

$(".scroll-bar").niceScroll({
 cursorcolor:"#18A7B9"
});


$(".top-button").click(function(){
$("html,body").animate({
  scrollTop:0
},1000)
})


$(".brand-main").slick({
  slidesToShow:5,
  autoplay:true,
  autoplaySpeed:2000,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


})


$(".slider-item").slick({
    slidesToShow:3,
    prevArrow:'<i class="fa-solid fa-arrow-left-long prev"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right-long next"></i>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

})


