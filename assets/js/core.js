initPageTransition();

addEventListener('page:loaded', function() {
    initGsap();
    initLenis();
    initImages();
    initHeadroom();
    initFancybox();
    initMarquee();
    initForm();
    initBackToTop();
});

// Animation de transition entre les pages
function initPageTransition() {
    if (oc.useTurbo && oc.useTurbo()) {
        var isAnimating = false;
        // Transition lorsqu'on quitte une page
        addEventListener('page:before-visit', async function(e) {
            if (isAnimating) { isAnimating = false; return; }
            e.preventDefault();
            //await gsap.to("#header", {x: 100, duration: 1});
            isAnimating = true;
            oc.visit(e.detail.url);
        });
        
        // Transition quand on arrive sur une nouvelle page
        addEventListener('page:load', function() {
            //gsap.to("#header", {x: 0, duration: 1});
        });
    }
}

function initGsap() {
    if(typeof ScrollTrigger !== 'undefined') { gsap.registerPlugin(ScrollTrigger); }
    if(typeof SplitText !== 'undefined') { gsap.registerPlugin(SplitText); }
    if(typeof GSDevTools !== 'undefined') { gsap.registerPlugin(GSDevTools); }

    // GSDevTools.create();
}

function initLenis() {
    // Init lenis
    window.scroll = new Lenis()
    window.scroll.on('scroll', (e) => {
        //console.log(e)
    })
    window.scroll.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time)=>{
        window.scroll.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0);

    // Handle anchors
    document.querySelectorAll('*[href*="#"]').forEach(function(el) {
        el.addEventListener('click', function(e) {
            const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'));
            const target = el.getAttribute('href');
            const hash = '#'+target.split('#')[1];

            if(target.charAt(0) == '#') {
                e.preventDefault();
                window.scroll.scrollTo(hash, { offset: -offset });
            } else {
                const actualPathname = window.location.pathname;
                const targetPathname = new URL(target).pathname
                if(actualPathname == targetPathname) {
                    e.preventDefault();
                    window.scroll.scrollTo(hash, { offset: -offset });
                }
            }
            
        });
    })
}

// Initialisation du lazyload
function initImages() {
    const imagesToResize = document.querySelectorAll('img[sizes]');
    addEventListener('resize', function(e) {
        imagesToResize.forEach(function(el) {
            const width = el.clientWidth;
            el.sizes = width+'px';
        })
    });
}

// Gestion de l'entête sticky.
function initHeadroom() {
    let offset = 0;

    let el = document.body;
    setClasses(0, 0);

    ScrollTrigger.create({
        trigger: el,
        start: 'top+='+offset+' top',
        end: 'bottom bottom',
        onEnter: function(self) { 
            setClasses(self.progress, self.direction)
        },
        onUpdate: function(self) {
            setClasses(self.progress, self.direction);
        }
    });

    function setClasses(progress, direction) {
        switch(progress) {
            case 0:
                el.classList.remove('not-top');
                el.classList.add('top');
                break;
            case 1:
                el.classList.remove('top');
                el.classList.add('bottom');
                break;
            default:
                el.classList.remove('top');
                el.classList.add('not-top');
                break;
        }

        switch(direction) {
            case 1:
                el.classList.remove('pinned');
                el.classList.add('unpinned');
                break;
            default:
                el.classList.remove('unpinned');
                el.classList.add('pinned');
                break;
        }
    }
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
        if(e.target.tagName == 'FORM') {
            e.target.closest('form').querySelectorAll('.field-error').forEach(function(el) {
                el.classList.remove('field-error');
            });
        }
    });

    // On réinitialise la fonction en cas de refresh ajax
    addEventListener('ajax:update-complete', function(e) {
        // Refresh form
        initForm();
        // Refresh scroll trigger
        if(typeof ScrollTrigger !== 'undefined') { ScrollTrigger.refresh() }
        // Refresh scroll reveal
        if(typeof ScrollReveal !== 'undefined') { ScrollReveal.sync() }
    });

}

// Affichage d'un lien vers le haut de page
function initBackToTop() {
    var offset = 1000;
    var selector = document.getElementById('backtotop');
    if(selector) {
        window.addEventListener('scroll', function() {
            scrollTop = window.scrollY;
            if (scrollTop > offset) {
                selector.classList.add('visible');
            } else {
                selector.classList.remove('visible');
            }
        });
    }
}

// Fonction utilitaire pour calculer une valeur avec Gsap
function calculateVar(progress, x, y, start, end) {
    return progress < start ? x : x + (y - x) * (Math.min(progress, 1) - start) / (end - start);
}