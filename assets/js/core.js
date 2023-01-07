document.addEventListener('DOMContentLoaded', function() {
    headroom();
    hamburger();
    anchors();
    formClasses();
    //backToTop();
    //lenis();
});

// Gestion de l'entête sticky.
function headroom() {
    if (typeof Headroom !== "undefined") {
        const headroom  = new Headroom(document.getElementById('header'), {
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
    const hamburgers = document.querySelectorAll('.hamburger');
    const body = document.querySelector('body');
    hamburgers.forEach(function(el) {
        el.addEventListener('click', function() {
            hamburgers.forEach(function (el) {
                el.classList.toggle('is-active');
            });
            body.classList.toggle('open');
        });
    });
}

// Gestion des ancres
function anchors() {
    const anchors = document.querySelectorAll('.anchor');
    const header = document.getElementById('header');
    anchors.forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const href = el.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop - header.offsetHeight;
            scroll({
                top: offsetTop,
                behavior: "smooth",
            });
        });
    });
}

// Affichage d'un lien vers le haut de page
function backToTop() {
    var offset = 1000;
    var selector = document.getElementById('backtotop');
    window.addEventListener('scroll', function() {
        scrollTop = window.scrollY;
        if (scrollTop > offset) {
            selector.classList.add('visible');
        } else {
            selector.classList.remove('visible');
        }
    });
}

// Gestion des classes sur un formulaire
function formClasses() {

    // Ajout / suppression d'une classe active lors du focus d'un élément
    document.querySelectorAll('input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"]), select, textarea').forEach(function(el) {
        el.addEventListener('focus', function(e) {
            const field = e.target.closest('.field');
            field.classList.add('field-focus');
        });
        el.addEventListener('focusout', function(e) {
            const field = e.target.closest('.field');
            field.classList.remove('field-focus');
            if(e.target.value) {
                field.classList.add('field-filled');
            }
        });
    });

    // Champs invalides après soumission
    addEventListener('ajax:invalid-field', function(e) {
        const { element, fieldName, fieldMessages, isFirst } = e.detail;
        element.closest('.field').classList.add('field-error');
    });

    // Nettoyage des champs au moment de la validation
    addEventListener('ajax:promise', function(e) {
        e.target.closest('form').querySelectorAll('.field-error').forEach(function(el) {
            el.classList.remove('field-error');
        });
    });
}

function lenis() {
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    })

    //get scroll value
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        //console.log({ scroll, limit, velocity, direction, progress })
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}