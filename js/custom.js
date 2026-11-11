/*------ MENU Fixed ------*/
$(window).scroll(function () {
    var $scroll = $(window).scrollTop();
    var $navbar = $(".navbar");
    var $header = $("#header ");
    if ($scroll > 10) {
        $navbar.addClass("scroll-nav");
        $header.addClass("bar-color");
    } else {
        $navbar.removeClass("scroll-nav");
        $header.removeClass("bar-color");
    }
});

$(document).ready(function () {
    $(".headerHamburger button").click(function () {
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $(".headerMobileOverlay").toggleClass("active");
    })
});



$(document).ready(function () {
    $('.modal-link').on('click', function () {
        $('body').addClass("modal-open");
    });
    $('.close-modal').on('click', function () {
        $('body').removeClass("modal-open");
    });
});
$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});


document.querySelectorAll('.faq-question').forEach(function (question) {

    question.addEventListener('click', function () {

        const currentItem = this.closest('.faq-item');

        document.querySelectorAll('.faq-item').forEach(function (item) {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });

        currentItem.classList.toggle('active');

    });

});