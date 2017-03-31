
$('.projects').hover(function() {
    $('ul.margin').css('display', 'block');
}, function() {
    $('ul.margin').css('display', 'none');
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices':false,
});

// wylaczanie galerii przy width < 960px;
var lightboxOnResize = function lightboxOnResize() {
    
    if ($(window).width() < 960) {
        $('a[data-lightbox="1"]')
            .addClass('lightboxRemoved');
    } else {
        $('a.lightboxRemoved').removeClass('lightboxRemoved');
    }
};

$(document).ready(lightboxOnResize);
$(window).resize(lightboxOnResize);