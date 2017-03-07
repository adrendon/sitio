$('.scene').parallax({
  scalarX: 10,
  scalarY: 0.0,
  frictionX: 0.1,
  frictionY: 0.0,
});

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2'],
        lockAnchors: true,
        scrollingSpeed: 3000,
        autoScrolling: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        slidesNavigation: false,
        scrollHorizontally: true,
        // scrollHorizontallyKey: 'YWRyZW5kb24uZ2l0aHViLmlvX0FBN2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NXY0ag==',
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