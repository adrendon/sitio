var scene = $('.scene');
scene.parallax();

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2'],
        // sectionsColor: ['yellow', 'orange'],
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
        scrollHorizontally: true,
        // scrollHorizontallyKey: '99AB3EFA-FE054004-A82D0796-7AB49719',
        dragAndMove: true,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        keyboardScrolling: true,
        animateAnchor: true,
        verticalCentered: true,
        lazyLoading: true,
    });
});

$(document).on('mouseover', '.fp-prev', function(){
  $.fn.fullpage.moveSlideLeft();
});

$(document).on('mouseover', '.fp-next', function(){
  $.fn.fullpage.moveSlideRight();
});