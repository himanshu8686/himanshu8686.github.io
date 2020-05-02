$('.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:50,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:8000,
    autoplaySpeed:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

if (!$('#myCanvas').tagcanvas({
    textColour: '#f53b57',
    outlineThickness: 1,
    minBrightness: 0.3,
    zoomMax: 1,
    zoomMin: 1,
    freezeActive: true,
    padding:0,
    shuffleTags: true,
    shape: 'sphere',
    pinchZoom: true,
    fadeIn: 3000,
    initial: [0.3, -0.01],
    noSelect: true,
    maxSpeed: 0.08,
    textFont: 'Impact,"Arial Black",sans-serif',
    depth: 0.25,
    textHeight: 23,
    outlineColour: '#000',
    fov: 800,
    clickToFront: 1000
})) {
// TagCanvas failed to load
$('#myCanvasContainer').hide();
};

/* scroll hide nav */
var mywindow=$(window);
var position=mywindow.scrollTop();
var up=false;

mywindow.scroll(function()
{
   newScroll= mywindow.scrollTop();
   console.log("new"+newScroll);
   if(newScroll > position && !up)
   {
       $('.navbar').fadeOut(800);
       up=!up;
   }
   else if(newScroll < position && up)
   {
       $('.navbar').stop().fadeIn(400);
       up=!up;
   }
   position=newScroll;
});

/**
 * progress bar animation on scroll
 */
$(window).on('scroll',function(){
    $(".progress").each(function (index,progress) {
        var progressBar=$(progress).find(".progress-bar");
        var progressPercent=parseInt($(progressBar).attr("data-progress"));
        // console.log("percent"+progressPercent);
        $(progressBar).css("width" , progressPercent+"%").text(progressPercent + "%");
    });
});

