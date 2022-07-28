const bgImgs = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// selecting HTML elements
const landingPage = document.querySelector('.landing-page');
const gearContainer = document.querySelector('.gear-container');
const gear = document.querySelector('.gear-icon');
const settingsBox = document.querySelector('.settings-box');
const colors = document.querySelectorAll('.colors-list li');
const root = document.querySelector(':root');
const changeBgBtns = document.querySelectorAll('.change-bg button');
// functions
//random bg images
    setInterval(() => {
        const rand = Math.floor(Math.random() * 5) + 1;
        landingPage.style.backgroundImage = `url("images/img${rand}.jpg")`;
    }, 10000)
// open settings box
gearContainer.addEventListener('click', () => {
    settingsBox.classList.toggle('open');
    gear.classList.toggle('fa-spin');
})

// changing main color
colors.forEach(color => {
    color.addEventListener('click', () => {
        // setting local storage color item equal to selected color
        window.localStorage.setItem('mainColor', color.dataset.color)
        // setting main color equal to selected color
        root.style.setProperty('--clr-main', window.localStorage.getItem('mainColor'));

        // removing active class from all colors
        colors.forEach(color => {
            color.classList.remove('active');
        })

        // adding active class to choosen color
        colors.forEach(color => {
            if(color.dataset.color === window.localStorage.mainColor) 
                color.classList.add('active');
        })

    })
})

// control changing background
changeBgBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // remove active class from all btns
         changeBgBtns.forEach(btn => {
            btn.classList.remove('active');
        })

        // add active class to choosen btn
        btn.classList.add('active');
    })
})

window.onload = function () {
    // setting main color equal to local storage color onload the page
    root.style.setProperty('--clr-main', window.localStorage.getItem('mainColor'));

    // putting active class on active color on local storage
    colors.forEach(color => {
        if(color.dataset.color === window.localStorage.mainColor) 
            color.classList.add('active');
    })
}
