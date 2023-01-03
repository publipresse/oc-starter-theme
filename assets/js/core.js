$(document).ready(function() {
    headroom();
    hamburger();
    anchors();
    backToTop();
    formClasses();
});

// Gestion de l'entête sticky.
function headroom() {
    if (typeof Headroom !== "undefined") {
        var headroom  = new Headroom($('#header')[0], {
            offset : 0,
            tolerance : {
                up : 5,
                down : 0
            },
            classes : {
                initial : 'headroom',
                pinned : 'pinned',
                unpinned : 'unpinned',
                top : 'top',
                notTop : 'not-top',
                bottom : 'bottom',
                notBottom : 'not-bottom'
            }
        });
        headroom.init();
    }
}

// Attributions des classes pour le responsive
function hamburger() {
    $('.hamburger').on('click', function(e) {
        $('.hamburger').toggleClass('is-active');
        $('body').toggleClass('open');
    })
}

// Gestion des ancres
function anchors() {
    $('a.anchor').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(target).offset().top - $('#header').outerHeight(true))
        }, 500);
    });
}

// Affichage d'un lien vers le haut de page
function backToTop() {
    var offset = 1000;
    var selector = $('#backtotop');
    $(window).scroll(function() {
        scrollTop = $(window).scrollTop();
        if(scrollTop > offset) {
            selector.addClass('visible');
        } else {
            selector.removeClass('visible');
        }
    });
}

// Add or remove "active" class depending on element focus
function formClasses() {
    $(window).on('ajaxInvalidField', function(event, fieldElement, fieldName, errorMsg, isFirst) {
        var target = $(fieldElement).attr('name');
        $('[name="'+target+'"]').addClass('is-invalid');
    });
    $(document).on('ajaxPromise', '[data-request]', function() {
        var form = $(this).closest('form');
        form.find('.is-invalid').removeClass('is-invalid');
        form.find('.invalid-feedback').removeClass('visible');
    });
}
