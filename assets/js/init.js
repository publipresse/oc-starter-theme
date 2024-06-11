// Alpine.js Initialization
/*
document.addEventListener('alpine:init', function() {
    const startingWith = (subject, replacement) => ({ name, value }) => {
        if (name.startsWith(subject)) {
            name = name.replace(subject, replacement);
        }
        // console.log(name, value);
        return { name, value };
    };

    // Alpine.prefix('data-x');
    Alpine.prefix('data-x-');
    Alpine.mapAttributes(startingWith('data-x-on.', Alpine.prefixed('on:')));
    Alpine.mapAttributes(startingWith('data-x-bind.', Alpine.prefixed('bind:')));
    Alpine.mapAttributes(startingWith('data-x-mask.', Alpine.prefixed('mask:')));
});
*/

// Transition entre les pages
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
