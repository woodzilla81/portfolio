$(document).ready(function(){
  new WOW().init();
  
var $navTop =  $('nav').offset().top;  
// A.offset().top - A 가 위에서 부터 거리가 얼마인지 알아온다
console.log('header는 화면 위쪽에서부터 ' + $navTop + ' 떨어져있다');

var scroll = $(window).scrollTop();     
// scroll 된 거리(위쪽에서 부터 얼마 스크롤 되었나)
console.log('scroll된 거리는?' + scroll);
    
$(window).scroll(function(){
    
var scroll = $(window).scrollTop(); 
console.log('scroll된 거리는?' + scroll);

if( scroll > $navTop ){      
// scroll된 거리가 $navTop의 거리보다 커지게 될때
  $('nav').addClass('move');


} else {
  // scroll된 거리가 $navTop의 거리보다 작아질때
  $('nav').removeClass('move');

}
});

$('.siteSlider').slick({
  autoplay:true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerMode: true,
  variableWidth: true,
  responsive: [       //  반응형 사용
    {
      breakpoint: 1170,  //  화면에 바뀌는 화면 넓이
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 778,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    
  ]
});

// fancybox gallery

$('.fancy a').fancybox({
 
  transitionEffect: "circular",
  loop:"true",

  });

// 갤러리 소트
$('.thumb').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

var btn1 = $('#nav ul li:nth-child(1)');

btn1.click(function(){
  $('.thumb').isotope({ filter : '.all' });
});

});      