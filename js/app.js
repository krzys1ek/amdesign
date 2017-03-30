$(function() {
    $('.slider').vegas({
        delay: 8000,
        slides: [
            { src: 'images/1.png' },
            { src: 'images/2.png' },
            { src: 'images/3.png' },
            { src: 'images/8.png' },
            { src: 'images/6.png' }
        ],
                animation: 'kenburns',


    
    });
});

$('.projects').hover(function() {
         $('ul.margin').css('display', 'block');
     }, function() {
         $('ul.margin').css('display', 'none');
     });



    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
    });
