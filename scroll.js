// smooth scrolling

$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 750);

    e.preventDefault();

});