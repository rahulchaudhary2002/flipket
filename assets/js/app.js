window.addEventListener('load', function() {
    setTimeout(function () {
        document.querySelector('.loader').remove()
        document.querySelector('.app-wrapper').classList.remove('d-none')
    }, 1500);
    
    headerFixed();
});

window.addEventListener('scroll', function() {
    headerFixed();
});

function headerFixed() {
    const header = document.querySelector('.header');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.scrollY > 0) {
        header.classList.add('fixed-header');
        navMenu.classList.add('hide-nav');
    } else {
        header.classList.remove('fixed-header');
        navMenu.classList.remove('hide-nav');
    }
}
