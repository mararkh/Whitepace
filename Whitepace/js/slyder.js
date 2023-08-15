$(document).ready(function(){ 
    $('.slider__features').slick({ 
        arrows: false,
        dots: true,
      adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        infinite: true,
        initialSlide: 0,
        centerMode: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 0,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: true,
                    centerMode: true,}}]
                });
            }); 
$(document).ready(function(){
    $('.says__root').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        infinite: true,
        initialSlide: 0,
        centerMode: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 0,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: true,
                    centerMode: true,}}]
                });
            }); 