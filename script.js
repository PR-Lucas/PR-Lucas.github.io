class Example {
    constructor(options) {
        this.root = options.root;

        this.init();

        setTimeout(this.showImages.bind(this), 1000);
    }

    init() {
        this.scroll = new LocomotiveScroll({
            el: this.root,
            direction: 'horizontal',
            smooth: true,
            lerp: 0.05,
            tablet: {
                smooth: true
            },
            smartphone: {
                smooth: true
            }
        });

        this.images = this.root.querySelectorAll('.image');

        [].forEach.call(this.images, (image) => {
            image.addEventListener('click', () => {
                image.classList.add('-clicked');
                this.hideImages();
            });
        });
    }

    showImages() {
        [].forEach.call(this.images, (image) => {
            image.classList.remove('-clicked');
            image.classList.add('-active');
        });
    }

    hideImages() {
        [].forEach.call(this.images, (image) => {
            image.classList.remove('-active');
        });

        setTimeout(this.showImages.bind(this), 2000);
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    // On vérifie la largeur de l'écran (900px est une bonne limite)
    if (window.innerWidth > 900) {
        const example = new Example({
            root: document.querySelector('.scroll-animations-example')
        });
    } else {
        // Sur mobile, on retire la classe qui cache le scroll naturel
        document.documentElement.classList.remove('has-scroll-smooth');
    }
});