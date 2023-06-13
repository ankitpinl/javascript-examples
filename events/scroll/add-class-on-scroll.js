// Add class on scroll on specific div.

window.addEventListener('scroll', function () {
    requestAnimationFrame(commonScrollEvent);
});

function commonScrollEvent() {

    if (document.querySelectorAll('.js-manufacture').length) {
        const manufacture = document.querySelector('.js-manufacture');
        let manufactureToggle = false;
        if (!manufactureToggle && isScrolledIntoView(manufacture)) {
            manufactureToggle = true;
            manufacture.classList.add('is-transitioned');
        }
    }

    window.scrollY >= 101 ? stickyheader.classList.add('headroom--not-top') : stickyheader.classList.remove('headroom--not-top');
}

function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight + 200);
    return isVisible;
}