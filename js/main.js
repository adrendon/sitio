var scene = $('.scene');
scene.parallax();

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2'],
        lockAnchors: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        slidesNavigation: false,
        // scrollHorizontally: true,
        // scrollHorizontallyKey: '99AB3EFA-FE054004-A82D0796-7AB49719',
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        keyboardScrolling: true,
        animateAnchor: true,
        verticalCentered: false,
        lazyLoading: true,
    });
});

$(document).on('mouseover', '.fp-prev', function(){
  $.fn.fullpage.moveSlideLeft();
});

$(document).on('mouseover', '.fp-next', function(){
  $.fn.fullpage.moveSlideRight();
});

console.log($(window).height() + ' de alto');
console.log($(window).width() + ' de ancho');

// $(document).ready(function(){
//     cargar_pantalla('inicio.html');
// });

// function cargar_pantalla(url){
//    $.ajax({
//         url: url,
//         dataType: "html",
//         success: function(data){
//             $('.box').html(data);
//         };
//    });
// }