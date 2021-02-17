let navMenu = document.querySelector('.navBars');
let menus = document.querySelector('.menus');

navMenu.addEventListener('click', () => {
    if(nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transform = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transform = 'transform 0.2s ease-out';
    }
});

//Togle navBars Icon

let toggleIcon = document.querySelector('.navBars')
toggleIcon.addEventListener('click', () => {
    if(toggleIcon.className != 'navBars toggle') {
        toggleIcon.className += 'toggle'
    } else {
        toggleIcon.className = 'navBars'
    }
});