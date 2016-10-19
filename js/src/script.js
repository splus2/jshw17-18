



$(function() {
    // Carousel
    $('.carousel-list').slideImage({
        pixelsOffset: 275,
        speed: 600
    });


    
// Template
var html = $('#output-info').html();
var info = [

{
   header: 'Петров Ігор Анатолійович',
   img: 'http://www.splus.lg.ua/price/petrov.jpg',
   content: '<center>Підприємець з Луганська</center>'
},

{
   content: 'Хочу вивчити фронтенд, тому що:<br><br> - Хочу отримати нову, цікаву професію <br> - Маю бажання знайти роботу в IT <br> - Хочу розібратись у тому, що було завжди цікаво, але не вистачало часу'
},

{
   content: 'Мій контактний телефон <br> +380992301516 <br><br> Мій профіль в соціальних мережах <br> <a href="https://www.facebook.com/profile.php?id=100001517156101" target="_blank"> Facebook.com</a>'
},

{
   content: 'Мій фидбек:<br> Slow and steady wins the race&nbsp;&copy;'
}		
];

var content = tmpl(html, {
   data: info
});

$('.button-refer').one('click', function() {
   $('.output-wrapper').slideDown('slow');
});

$('body').append(content);

$('.line:last-child').remove();
});