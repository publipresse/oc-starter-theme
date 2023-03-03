class Cursor {
    constructor(options) {
        // définissez les valeurs par défaut
        this.settings = Object.assign({
            parent: 'body',
            cursor: '<div id="cursor"></div>',
            hover: 'data-cursor',
            duration: 500,
            easing: 'cubic-bezier(1, 0.01, 1, 1)',
            debug: true,
            customAnimation: false,
        }, options);

        this.parent = document.querySelector(this.settings.parent);
        this.parent.insertAdjacentHTML('beforeend', this.settings.cursor);
        this.cursor = this.parent.lastElementChild;
        this.cursor.style.position = 'fixed';
        this.cursor.style.pointerEvents = 'none';
        this.cursor.style.zIndex = 99999999;

        if(this.settings.debug == true) {
            this.cursor.style.transform = 'translate(-50%, -50%)';
            this.cursor.style.background = 'red';
            this.cursor.style.width = '20px';
            this.cursor.style.height = '20px';
            this.cursor.style.borderRadius = '50%';
            this.cursor.style.background = 'red';
        }

        this.init();
    }

    init() {
        
        document.addEventListener('mouseover', (e) => {
            if (e.target.hasAttribute(this.settings.hover)) {
                var attribute = e.target.getAttribute(this.settings.hover);
                this.cursor.classList.add('hover');
                if (attribute) {
                    this.cursor.classList.add(attribute);
                }
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.hasAttribute(this.settings.hover)) {
                this.cursor.classList.add('click');
            }
        });

        document.addEventListener('mouseup', (e) => {
            this.cursor.classList.remove('mousedown');
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.hasAttribute(this.settings.hover)) {
                var attribute = e.target.getAttribute(this.settings.hover);
                this.cursor.classList.remove('hover');
                this.cursor.classList.remove('click');
                if (attribute) {
                    this.cursor.classList.remove(attribute);
                }
            }
        });

        if(this.settings.customAnimation == false) {
            document.addEventListener('mousemove', (e) => {
                var pos = {
                    left: e.clientX + "px",
                    top: e.clientY + "px"
                };

                this.cursor.animate(pos, {
                    duration: this.settings.duration,
                    easing: this.settings.easing,
                    iterations: 1,
                    fill: "both"
                });
            });
        }
    }
}