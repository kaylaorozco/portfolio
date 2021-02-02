
// fade-in text

const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver( function(
    entries, appearOnScroll
) {
    entries.forEach( entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}
    , appearOptions);

    faders.forEach( fader => {
        appearOnScroll.observe(fader);
    });


$( document ).ready(function() {

    console.log( "ready!" );
    var anchor_offset = ($('#user-research-section').offset() || { "top": NaN }).top;

$(window).on('scroll', function() {
    if ( $(window).scrollTop() > anchor_offset ){
        $("#secondary-nav").css('opacity', 1);
    } else if( $(window).scrollTop() < anchor_offset ) {
        $("#secondary-nav").css('opacity', 0);
    }
});

});

