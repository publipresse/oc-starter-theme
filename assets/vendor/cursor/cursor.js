/**
 * Ce script est dépendant de Gsap, pensez à l'activer.
 */
(function() {
    if (typeof gsap === "undefined") {
        alert('Gsap needed');
        return;
    }
    var body = $('body');
    var cursor = $('#cursor');
    var hover = '[data-cursor]';
    
    body.on('mouseenter', hover, function () {
        cursor.addClass('hover');
        cursor.addClass($(this).data('cursor'));
    });
    
    body.on('mousedown', hover, function() {
        cursor.addClass('mousedown');
    });
    
    body.on('mouseup', hover, function() {
        cursor.removeClass('mousedown');
    });

    body.on('click', hover, function() {
        cursor.addClass('click');
    })
    
    body.on('mouseleave', hover, function () {
        cursor.removeClass('hover');
        cursor.removeClass('click');
        cursor.removeClass($(this).data('cursor'));
    });

    $(document).on('mousemove', function(e) {
        gsap.to(cursor, 0.3, { left: e.clientX, top: e.clientY });
    });
})();