'use strict'

// ------about swiper js start ------//
var swiper = new Swiper(".about-slider", {
    direction: "vertical",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            direction: "horizontal",
        },
        // when window width is >= 480px
        480: {
            direction: "horizontal",
        },
        // when window width is >= 640px
        640: {
            direction: "horizontal",
        },
        // when window width is >= 992px
        992: {
            direction: "vertical",
        }
    }
});;

// ------about swiper js end ------//

// ------ portfolio filter js start ------//
var Shuffle = window.Shuffle;

class Demo {
    constructor(element) {
        this.element = element;
        this.shuffle = new Shuffle(element, {
            itemSelector: '.picture-item',
            sizer: element.querySelector('.my-sizer-element'),
            isRTL: false,
        });

        this.addShuffleEventListeners();
        this._activeFilters = [];
        this.addFilterButtons();
        this.addSorting();
    }

    addShuffleEventListeners() {
        this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
            console.log('layout. data:', data);
        });
        this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
            console.log('removed. data:', data);
        });
    }

    addFilterButtons() {
        const options = document.querySelector('.filter-options');
        if (!options) {
            return;
        }

        const filterButtons = Array.from(options.children);
        const onClick = this._handleFilterClick.bind(this);
        filterButtons.forEach((button) => {
            button.addEventListener('click', onClick, false);
        });
    }

    _handleFilterClick(evt) {
        const btn = evt.currentTarget;
        const isActive = btn.classList.contains('active');
        const btnGroup = btn.getAttribute('data-group');

        this._removeActiveClassFromChildren(btn.parentNode);

        let filterGroup;
        if (isActive) {
            btn.classList.remove('active');
            filterGroup = Shuffle.ALL_ITEMS;
        } else {
            btn.classList.add('active');
            filterGroup = btnGroup;
        }

        this.shuffle.filter(filterGroup);
    }

    _removeActiveClassFromChildren(parent) {
        const {
            children
        } = parent;
        for (let i = children.length - 1; i >= 0; i--) {
            children[i].classList.remove('active');
        }
    }

    addSorting() {
        const buttonGroup = document.querySelector('.sort-options');
        if (!buttonGroup) {
            return;
        }
        buttonGroup.addEventListener('change', this._handleSortChange.bind(this));
    }

    _handleSortChange(evt) {
        const buttons = Array.from(evt.currentTarget.children);
        buttons.forEach((button) => {
            if (button.querySelector('input').value === evt.target.value) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    /**
     * Filter the shuffle instance by items with a title that matches the search input.
     * @param {Event} evt 
     */
    _handleSearchKeyup(evt) {
        const searchText = evt.target.value.toLowerCase();
        this.shuffle.filter((element, shuffle) => {
            if (shuffle.group !== Shuffle.ALL_ITEMS) {
                const groups = JSON.parse(element.getAttribute('data-groups'));
                const isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;
                if (!isElementInCurrentGroup) {
                    return false;
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.demo = new Demo(document.getElementById('grid'));
});

// ------ portfolio filter js end ------//

// ------ shop single slidr js start ------//
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
// ------ shop single slidr js end ------//

// ------back-to-top button js start ------//
// Get the button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// ------back-to-top button js end ------//