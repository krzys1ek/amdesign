$(function() {
    $('.slider').vegas({
        delay: 8000,
        slides: [{
                src: 'images/4.jpg'
            },
            {
                src: 'images/2.jpg'
            },
            {
                src: 'images/3.jpg'
            },
            {
                src: 'images/1.jpg'
            },
            {
                src: 'images/8.jpg'
            }
        ],
        animation: 'kenburns',
    });
});

$("#contact-form").validate({
 errorClass: "text-error",
rules: {
subject: "required",
message: "required",
firstName: "required",
email: {
  required: true,
  email: true
}
},
messages: {
subject: "Proszę podać swoje Nazwisko",
message: "Nie wpisałeś treści wiadomości",
firstName:"podaj swoję Imię",
email: {
  required: "Nie podałeś swojego adresu e-mail",
  email: "Błędny format adresu e-mail"
}
}
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
