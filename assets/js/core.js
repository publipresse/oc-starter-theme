addEventListener('page:loaded', function() {
    initLazyload();
    initFancybox();
    initMarquee();
    initScrollReveal();
    initLenis();
    initHeadroom();
    initGsap();
    initForm();
    //backToTop();
});

// Initialisation du lazyload
function initLazyload() {
    window.lazyload = new LazyLoad({
        callback_enter: function(el) {
            const width = el.clientWidth;
            el.sizes = width+'px';
        }
    });
    
    addEventListener('resize', function(e) {
        const images = document.querySelectorAll('img[sizes]').forEach(function(el) {
            const width = el.clientWidth;
            el.sizes = width+'px';
        })
    });
}

// Initialisation du fancybox
function initFancybox() {
    if (typeof Fancybox !== "undefined") {
        Fancybox.bind("[data-fancybox]", {

        });
    }
}

// Initialisation d'un marquee
function initMarquee() {
    if (typeof Marquee3k !== "undefined") {
        Marquee3k.init();
    }
}

// Initialisation du scroll reveal
function initScrollReveal() {
    if (typeof ScrollReveal !== "undefined") {
        ScrollReveal({ duration: 1000, distance: '50px', origin: 'bottom', cleanup: true });
    }
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
    if(typeof ScrollTrigger !== 'undefined') { gsap.registerPlugin(ScrollTrigger); }
    if(typeof SplitText !== 'undefined') { gsap.registerPlugin(SplitText); }
}

// Gestion des classes sur un formulaire
function initForm() {

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
            } else {
                field.classList.remove('field-filled');
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
        initForm();
        window.lazyload.update();
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
