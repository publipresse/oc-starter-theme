addEventListener('page:loaded', function() {
    initSplit();
    initTextEffects();
})

function initSplit() {
    const split =  new SplitText('.split-text', {
        linesClass: 'line',
        wordsClass: 'word',
        charsClass: 'char',
    });
    
    const button = document.querySelector('.ct-ignition__button--edit');
    if(button) {
        button.addEventListener('mousedown', function(e) {
            document.querySelectorAll('.split-text').forEach(function(item, key) {
                split.revert();
            });
        });
    }
}

function initTextEffects() {
    const fx1Titles = document.querySelectorAll('.split-text.split-1');
    const fx2Titles = document.querySelectorAll('.split-text.split-2');
    const fx3Titles = document.querySelectorAll('.split-text.split-3');
    const fx4Titles = document.querySelectorAll('.split-text.split-4');
    const fx5Titles = document.querySelectorAll('.split-text.split-5');
    const fx6Titles = document.querySelectorAll('.split-text.split-6');
    const fx7Titles = document.querySelectorAll('.split-text.split-7');
    const fx8Titles = document.querySelectorAll('.split-text.split-8');
    const fx9Titles = document.querySelectorAll('.split-text.split-9');
    const fx10Titles = document.querySelectorAll('.split-text.split-10');
    const fx11Titles = document.querySelectorAll('.split-text.split-11');
    const fx12Titles = document.querySelectorAll('.split-text.split-12');
    const fx13Titles = document.querySelectorAll('.split-text.split-13');
    const fx14Titles = document.querySelectorAll('.split-text.split-14');
    const fx15Titles = document.querySelectorAll('.split-text.split-15');
    const fx16Titles = document.querySelectorAll('.split-text.split-16');
    const fx17Titles = document.querySelectorAll('.split-text.split-17');
    const fx18Titles = document.querySelectorAll('.split-text.split-18');
    const fx19Titles = document.querySelectorAll('.split-text.split-19');
    const fx20Titles = document.querySelectorAll('.split-text.split-20');
    const fx21Titles = document.querySelectorAll('.split-text.split-21');
    const fx22Titles = document.querySelectorAll('.split-text.split-22');
    const fx23Titles = document.querySelectorAll('.split-text.split-23');
    const fx24Titles = document.querySelectorAll('.split-text.split-24');
    const fx25Titles = document.querySelectorAll('.split-text.split-25');
    const fx26Titles = document.querySelectorAll('.split-text.split-26');
    const fx27Titles = document.querySelectorAll('.split-text.split-27');
    const fx28Titles = document.querySelectorAll('.split-text.split-28');
    const fx29Titles = document.querySelectorAll('.split-text.split-29');

    
    fx1Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            scale: 0.6,
            rotationZ: () => gsap.utils.random(-20,20)
        },
        {
            ease: 'power4',
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: 0.4,
            scrollTrigger: {
                trigger: title,
                start: 'center+=20% bottom',
                end: '+=50%',
                scrub: true
            },
        });

    });
    
    fx2Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            yPercent: 120, 
            scaleY: 2.3, 
            scaleX: 0.7, 
            transformOrigin: '50% 0%' 
        }, 
        {
            duration: 1,
            ease: 'back.inOut(2)',
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: 0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom+=50%',
                end: 'bottom top+=40%',
                scrub: true
            }
        });

    });

    fx3Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars,  { 
            'will-change': 'transform', 
            transformOrigin: '50% 0%', 
            scaleY: 0
        },
        {
            ease: 'back',
            opacity: 1,
            scaleY: 1,
            yPercent: 0,
            stagger: 0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center+=20% bottom',
                end: '+=50%',
                scrub: true
            }
        });

    });

    fx4Titles.forEach(title => {
        
        const words = title.querySelectorAll('.word');
        
        for (const word of words) {
            
            const chars = word.querySelectorAll('.char');

            gsap.fromTo(chars,  { 
                'will-change': 'opacity, transform', 
                x: (position,_,arr) => 150*(position-arr.length/2) 
            },
            {
                ease: 'power1.inOut',
                x: 0,
                stagger: {
                    grid: 'auto',
                    from: 'center'
                },
                scrollTrigger: {
                    trigger: word,
                    start: 'center bottom+=30%',
                    end: 'top top+=15%',
                    scrub: true,
                }
            });

        };

    });

    fx5Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            xPercent: () => gsap.utils.random(-200,200), 
            yPercent: () => gsap.utils.random(-150,150) 
        },
        {
            ease: 'power1.inOut',
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            stagger: { each: 0.05, grid: 'auto', from: 'random'},
            scrollTrigger: {
                trigger: title,
                start: 'center bottom+=10%',
                end: 'bottom center',
                scrub: 0.9
            }
        });

    });

    fx6Titles.forEach(title => {
        
        const words = title.querySelectorAll('.word');
        
        for (const word of words) {

            const chars = word.querySelectorAll('.char');

            chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

            gsap.fromTo(chars, { 
                'will-change': 'opacity, transform', 
                opacity: 0, 
                rotationX: -90,
                yPercent: 50
            },
            {
                ease: 'power1.inOut',
                opacity: 1,
                rotationX: 0,
                yPercent: 0,
                stagger: {
                    each: 0.03,
                    from: 0
                },
                scrollTrigger: {
                    trigger: word,
                    start: 'center bottom+=40%',
                    end: 'bottom center-=30%',
                    scrub: 0.9
                }
            });

        }

    });

    fx7Titles.forEach(title => {
        
        const words = title.querySelectorAll('.word');

        for (const word of words) {

            const chars = word.querySelectorAll('.char');

            chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

            gsap.fromTo(chars, { 
                'will-change': 'opacity, transform', 
                transformOrigin: '100% 50%',
                opacity: 0, 
                rotationY: -90,
                z: -300
            },
            {
                ease: 'expo',
                opacity: 1,
                rotationY: 0,
                z: 0,
                stagger: { each: 0.06, from: 'end'},
                scrollTrigger: {
                    trigger: word,
                    start: 'bottom bottom+=20%',
                    end: 'bottom top',
                    scrub: 1
                }
            });

        }

    });

    const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];
    fx8Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        chars.forEach((char, position) => {
            let initialHTML = char.innerHTML;
            
            gsap.fromTo(char, {
                opacity: 0
            },
            {
                duration: 0.03,
                innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
                repeat: 1,
                repeatRefresh: true,
                opacity: 1,
                repeatDelay: 0.03,
                delay: (position+1)*0.18,
                onComplete: () => gsap.set(char, {innerHTML: initialHTML, delay: 0.03}),
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom center',
                    toggleActions: "play resume resume reset",
                    onEnter: () => gsap.set(char, {opacity: 0})
                }
            });

        });
        
    });

    fx9Titles.forEach(title => {

        const words = title.querySelectorAll('.word');

        for (const word of words) {

            const chars = word.querySelectorAll('.char');

            gsap.fromTo(chars,  { 
                'will-change': 'transform', 
                scaleX: 0,
                x: (_, target) => window.innerWidth/2 - target.offsetLeft - target.offsetWidth/2
            },
            {
                ease: 'power1.inOut',
                scaleX: 1,
                x: 0,
                scrollTrigger: {
                    trigger: word,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true
                }
            });

        }

    });

    fx10Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity', 
            opacity: 0,
            filter: 'blur(20px)'
        },
        {
            duration: 0.25,
            ease: 'power1.inOut',
            opacity: 1,
            filter: 'blur(0px)',
            stagger: { each: 0.05, from: 'random'},
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'center center',
                toggleActions: "play resume resume reset"
            }
        });

    });

    fx11Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        wrapElements(chars, 'span', 'char-wrap');

        gsap.fromTo(chars, { 
            'will-change': 'transform', 
            transformOrigin: '0% 50%',
            xPercent: 105,
        }, 
        {
            duration: 1,
            ease: 'expo',
            xPercent: 0,
            stagger: 0.042,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'top top+=10%',
                toggleActions: "play resume resume reset",
            }
        });

    });

    fx12Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        wrapElements(chars, 'span', 'char-wrap');
    
        gsap.fromTo(chars, { 
            'will-change': 'transform', 
            xPercent: -250,
            rotationZ: 45,
            scaleX: 6,
            transformOrigin: '100% 50%'
        },
        {
            duration: 1,
            ease: 'power2',
            xPercent: 0,
            rotationZ: 0,
            scaleX: 1,
            stagger: -0.06,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom+=10%',
                end: 'bottom top+=10%',
                scrub: true
            }
        });
    
    });

    fx13Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            rotationY: 180,
            xPercent: -40,
            yPercent: 100
        },
        {
            ease: 'power4.inOut()',
            opacity: 1,
            rotationY: 0,
            xPercent: 0,
            yPercent: 0,
            stagger: {
                each: -0.03,
                from: 0
            },
            scrollTrigger: {
                trigger: title,
                start: 'center bottom',
                end: 'bottom center-=30%',
                scrub: 0.9
            }
        });

    });

    fx14Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        gsap.timeline()
        .fromTo(title, {
            'will-change': 'transform', 
            xPercent: 100
        }, {
            ease: 'none',
            xPercent: 0,
            scrollTrigger: {
                trigger: title,
                scrub: true,
                start: 'center center',
                end: '+=100%',
                pin: title.parentNode,
            }
        })
        .fromTo(chars, { 
            'will-change': 'transform', 
            scale: 3,
            yPercent: -900
        },
        {
            ease: 'back(2)',
            scale: 1,
            yPercent: 0,
            stagger: 0.05,
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=100%',
                scrub: 1.9,
            }
        }, 0);
        
    });

    fx15Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 
        
        gsap.timeline()
        .fromTo(title, {
            'will-change': 'transform', 
            xPercent: -80
        }, {
            ease: 'none',
            xPercent: 0,
            scrollTrigger: {
                trigger: title,
                scrub: true,
                start: 'center center',
                end: '+=100%',
                pin: title.parentNode,
            }
        })
        .fromTo(chars, { 
            'will-change': 'opacity, transform', 
            transformOrigin: '50% 50% -200px',
            rotationX: 380,
            opacity: 0,
        },
        {
            ease: 'expo.inOut',
            rotationX: 0,
            z: 0,
            opacity: 1,
            stagger: -0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=140%',
                scrub: 1.2,
            }
        }, 0);

    });

    fx16Titles.forEach(title => {
        
        gsap.fromTo(title, {
            transformOrigin: '0% 50%',
            rotate: 3
        }, {
            ease: 'none',
            rotate: 0,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            }
        });

        gsap.fromTo(title.querySelectorAll('.word'), {
            'will-change': 'opacity',
            opacity: 0.1
        }, 
        {
            ease: 'none',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom-=20%',
                end: 'center top+=20%',
                scrub: true,
            }
        });

    });

    fx17Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
        
        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0,
            rotateX: () => gsap.utils.random(-120,120),
            z: () => gsap.utils.random(-200,200),
        }, 
        {
            ease: 'none',
            opacity: 1,
            rotateX: 0,
            z: 0,
            stagger: 0.02,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        });

    });

    fx18Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
        
        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0.2,
            z: -800
        }, 
        {
            ease: 'back.out(1.2)',
            opacity: 1,
            z: 0,
            stagger: 0.04,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        });

    });

    fx19Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
        
        gsap.fromTo(chars, {
            'will-change': 'opacity, transform', 
            transformOrigin: '50% 0%',
            opacity: 0,
            rotationX: -90,
            z: -200
        }, 
        {
            ease: 'power1',
            opacity: 1,
            stagger: 0.05,
            rotationX: 0,
            z: 0,
            scrollTrigger: {
                trigger: title,
                start: 'center+=20% bottom',
                end: '+=50%',
                scrub: true,
            }
        });
        
    });

    fx20Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
        
        gsap.fromTo(chars, {
            'will-change': 'opacity, transform', 
            transformOrigin: '50% 100%',
            opacity: 0,
            rotationX: 90
        }, 
        {
            ease: 'power4',
            opacity: 1,
            stagger:  {
                each: 0.03,
                from: 'random'
            },
            rotationX: 0,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom',
                end: 'bottom top+=20%',
                scrub: true,
            }
        });
        
    });

    fx21Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const word of words) {
            
            const chars = word.querySelectorAll('.char');
        
            chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

            gsap.fromTo(chars, {
                'will-change': 'opacity, transform', 
                opacity: 0,
                y: (position,_,arr) => -40*Math.abs(position-arr.length/2),
                z: () => gsap.utils.random(-1500,-600),
                rotationX: () => gsap.utils.random(-500,-200)
            }, 
            {
                ease: 'power1.inOut',
                opacity: 1,
                y: 0,
                z: 0,
                rotationX: 0,
                stagger: {
                    each: 0.06,
                    from: 'center'
                },
                scrollTrigger: {
                    trigger: word,
                    start: 'top bottom',
                    end: 'top top+=15%',
                    scrub: true,
                }
            });

        }

    });

    fx22Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const word of words) {
            const chars = word.querySelectorAll('.char');
            const charsTotal = chars.length;

            chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
            
            gsap.fromTo(chars, {
                'will-change': 'transform', 
                x: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return (charsTotal%2 ? Math.abs(Math.ceil(charsTotal/2)-1-factor) : Math.abs(Math.ceil(charsTotal/2)-factor) )*200*(position < charsTotal/2 ? -1 : 1);
                },
                y: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return factor*60;
                },
                rotationY: -270,
                rotationZ: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return position < charsTotal/2 ? Math.abs(factor-charsTotal/2)*8 : -1*Math.abs(factor-charsTotal/2)*8;
                }
            }, 
            {
                ease: 'power2.inOut',
                x: 0,
                y: 0,
                rotationZ: 0,
                rotationY: 0,
                scale: 1,
                scrollTrigger: {
                    trigger: word,
                    start: 'top bottom+=40%',
                    end: 'top top+=15%',
                    scrub: true,
                }
            });

        }

    });

    fx23Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const [wordPosition, word] of words.entries()) {

            gsap.fromTo(word.querySelectorAll('.char'), {
                'will-change': 'transform', 
                scale: 0.01,
                x: (pos,_,arr) => {
                    return wordPosition%2 ? pos*50 : (arr.length-pos-1)*-50
                }
            }, 
            {
                ease: 'power4',
                scale: 1,
                x: 0,
                scrollTrigger: {
                    trigger: word,
                    start: 'center bottom',
                    end: 'bottom top-=40%',
                    scrub: true,
                }
            });
            
        }
        
    });

    fx24Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        const charsTotal = chars.length;
        
        gsap.fromTo(chars, {
            'will-change': 'transform', 
            y: position => {
                const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                return (charsTotal/2-factor+6)*130;
            }
        }, 
        {
            ease: 'elastic.out(.4)',
            y: 0,
            stagger: {
                amount: 0.1,
                from: 'center'
            },
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'bottom top-=50%',
                scrub: true,
            }
        });

    });

    fx25Titles.forEach(title => {
        
        gsap.fromTo(title.querySelectorAll('.char'), {
            'will-change': 'transform',
            transformOrigin: '50% 100%',
            scaleY: 0
        }, 
        {
            ease: 'power3.in',
            opacity: 1,
            scaleY: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=500%',
                scrub: true,
                pin: title.parentNode,
            }
        });

    });

    fx26Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=100%',
                scrub: true,
                pin: title.parentNode,
            }
        });
        for (const [wordPosition, word] of words.entries()) {
            tl.fromTo(word.querySelectorAll('.char'), {
                'will-change': 'transform', 
                transformOrigin: () => !wordPosition%2 ? '50% 0%' : '50% 100%',
                scaleY: 0
            }, 
            {
                ease: 'power1.inOut',
                scaleY: 1,
                stagger: {
                    amount: 0.3,
                    from: 'center'
                }
            }, 0);
            
        }

    });

    fx27Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        words.forEach(word => gsap.set(word.parentNode, { perspective: 1000 })); 

        gsap.fromTo(words, {
            'will-change': 'opacity, transform', 
            z: () => gsap.utils.random(500,950),
            opacity: 0,
            xPercent: (pos) => gsap.utils.random(-100,100),
            yPercent: (pos) => gsap.utils.random(-10,10),
            rotationX: () => gsap.utils.random(-90,90)
        }, 
        {
            ease: 'expo',
            opacity: 1,
            rotationX: 0,
            rotationY: 0,
            xPercent: 0,
            yPercent: 0,
            z: 0,
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=300%',
                scrub: true,
                pin: title.parentNode,
            },
            stagger: {
                each: 0.006,
                from: 'random'
            }
        });

    });

    fx28Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const word of words) {

            const chars = word.querySelectorAll('.char');
            const charsTotal = chars.length;
            
            gsap.fromTo(chars, {
                'will-change': 'transform, filter', 
                transformOrigin: '50% 100%',
                scale: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return gsap.utils.mapRange(0, Math.ceil(charsTotal/2), 0.5, 2.1, factor);
                },
                y: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return gsap.utils.mapRange(0, Math.ceil(charsTotal/2), 0, 60, factor);
                },
                rotation: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return position < charsTotal/2 ? gsap.utils.mapRange(0, Math.ceil(charsTotal/2), -4, 0, factor) : gsap.utils.mapRange(0, Math.ceil(charsTotal/2), 0, 4, factor);
                },
                filter: 'blur(12px) opacity(0)',
            }, 
            {
                ease: 'power2.inOut',
                y: 0,
                rotation: 0,
                scale: 1,
                filter: 'blur(0px) opacity(1)',
                scrollTrigger: {
                    trigger: word,
                    start: 'top bottom+=40%',
                    end: 'top top+=15%',
                    scrub: true,
                },
                stagger: {
                    amount: 0.15,
                    from: 'center'
                }
            });

        }

    });

    fx29Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const [pos,word] of words.entries()) {
            
            const chars = word.querySelectorAll('.char');
            
            gsap.fromTo(chars, {
                'will-change': 'transform', 
                transformOrigin: `${pos%2 ? 0 : 100}% ${pos%2 ? 100 : 0}%`,
                scale: 0
            }, 
            {
                ease: 'power4',
                scale: 1,
                stagger:  {
                    each: 0.03,
                    from: pos%2 ? 'end' : 'start'
                },
                scrollTrigger: {
                    trigger: word,
                    start: 'top bottom-=10%',
                    end: 'top top',
                    scrub: true,
                }
            });
        }
        
    });
    
}

