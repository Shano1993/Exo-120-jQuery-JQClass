$('#full').click(function () {
    $('.case').addClass('full');
});

$('#empty').click(function () {
    $('.case').removeClass('full');
});

$('.round').click(function () {
    $(this).toggleClass('full');
});

$('#one').click(function () {
    $(this).toggleClass('full');
    $('.line1').toggleClass('full');
});

$('#seven').click(function () {
    $(this).toggleClass('full');
    $('.line2').toggleClass('full');
});

$('#nineteen').click(function () {
    $(this).toggleClass('full');
    $('.line3').toggleClass('full');
});

$('#twentyFive').click(function () {
    $(this).toggleClass('full');
    $('.line4').toggleClass('full');
});

$('#thirteen').click(function () {
    $(this).toggleClass('full');
    $('.center').toggleClass('full');
});

