//pega todos os slides da pagina
let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider-width').style.width =
    `${sliderWidth * totalSlides}px`;

document.querySelector('.slider-controls').style.height =
    `${document.querySelector('.slider').clientHeight}px`;


function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider-width').style.marginLeft =
        `-${newMargin}px`;
}

setInterval(goNext, 5000);


$(document).ready(function () {
    $(".inspiring").waypoint(function (direction) {
        if (direction == "down") {
            $('header nav').addClass('together');
        } else {
            $('header nav').removeClass('together');
        }
    },
        { offset: "200px;" }
    );
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 2000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
        $('.mobile-nav-icon').click(function(){
            var nav = $('.main-nav li a');
            var icon = $('.mobile-nav-icon ion icon')
      
            nav.slideToggle(200);
      
            if (icon.hasClass('ion-navicon-round')){
              icon.addClass('ion-navicon-close');
              icon.removeClass('ion-navicon-round');
            }else{
              icon.addClass('icon-navicon-round');
              icon.removeClass('ion-navicon-close');
            }
          });
});


