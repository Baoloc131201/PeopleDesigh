$('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: `<button type='button' class='slick-prev pull-left'><img srcset="./images/arrow-back-fill.png 2x"/></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img srcset="./images/arrow-next-fill.png 2x"/></button>`,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
const toggles = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeclass = "is-show";
toggles.addEventListener("click", function() {
    menu.classList.add(activeclass);
});

window.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        menu.classList.remove(activeclass);
    }
});