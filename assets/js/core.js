addEventListener('page:loaded', function() {
    initLazyload();
    initHeadroom();
    initHamburger();
    initAnchors();
    initLenis();
    initGsap();
    formClasses();
    //backToTop();
});

// Initialisation du lazyload
function initLazyload() {
    window.lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
    });
}

// Gestion de l'entête sticky.
function initHeadroom() {
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
function initHamburger() {
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
function initAnchors() {
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

function initLenis() {
    window.scroll = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    })

    //get scroll value
    window.scroll.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        //console.log({ scroll, limit, velocity, direction, progress })
    })

    function raf(time) {
        window.scroll.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}

function initGsap() {
    gsap.registerPlugin(ScrollTrigger);
}

// Gestion des classes sur un formulaire
function formClasses() {

    // Ajout / suppression d'une classe active lors du focus d'un élément
    document.querySelectorAll('input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"]), select, textarea').forEach(function(el) {
        el.addEventListener('focus', function(e) {
            const field = e.target.closest('.field');
            if(!field) return;
            field.classList.add('field-focus');
        });
        el.addEventListener('focusout', function(e) {
            const field = e.target.closest('.field');
            if(!field) return;
            field.classList.remove('field-focus');
            if(e.target.value) {
                field.classList.add('field-filled');
            }
        });
    });
    
    // Champs invalides après soumission
    addEventListener('ajax:invalid-field', function(e) {
        const { element, fieldName, fieldMessages, isFirst } = e.detail;
        const field = element.closest('.field');
        if(!field) return;
        field.classList.add('field-error');
    });

    // Nettoyage des champs au moment de la validation
    addEventListener('ajax:promise', function(e) {
        if(e.target.tagName == 'FORM'){ // à préciser sinon ça se lance sur n'importe quel ajax. Ex: fancybox close, et ça met une erreur.
            e.target.closest('form').querySelectorAll('.field-error').forEach(function(el) {
                el.classList.remove('field-error');
            });
        }
    });

    // On réinitialise la fonction en cas de refresh ajax
    addEventListener('ajax:update-complete', function(e) {
        formClasses();
        window.lazyLoadInstance.update();
    });

    // Autoheight sur les textarea    
    document.querySelectorAll('textarea').forEach(function(textarea) {
        textareaStyles = textarea.currentStyle || window.getComputedStyle(textarea);
        padding = parseInt(textareaStyles.paddingTop) + parseInt(textareaStyles.paddingBottom);
        var offset = textarea.offsetHeight - textarea.clientHeight;
        textarea.addEventListener('input', function (event) {
            event.target.style.height = 'auto';
            event.target.style.height = event.target.scrollHeight + offset - padding+ 'px';
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
