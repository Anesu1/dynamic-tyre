


$(window).on('scroll', function(){
if($(window).scrollTop()){
$('header').addClass('bgColor');

}
else{
$('header').removeClass('bgColor');

}
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

document.querySelector("#toggle").addEventListener('click', dropDown);

function dropDown(){
    let dropMenu = document.querySelector(".dropDown");
    dropMenu.classList.toggle("active");
}



