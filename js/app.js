const bgImgs = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// selecting HTML elements
const landingPage = document.querySelector('.landing-page');
const gearContainer = document.querySelector('.gear-container');
const gear = document.querySelector('.gear-icon');
const settingsBox = document.querySelector('.settings-box');
const colors = document.querySelectorAll('.colors-list li');
const root = document.querySelector(':root');
const changeBgBtns = document.querySelectorAll('.change-bg button');
const bestOffer = document.querySelector('.best-offer');
const progresses = document.querySelectorAll('.progress-container span');
const galleryImages = document.querySelectorAll('.gallery .imgs-box img');
// variables
let randomBginterval;
// functions
//random bg images
function randomBg() {
    if (window.localStorage.getItem('changeBg') === 'yes') { 
        randomBginterval = setInterval(() => {
            const rand = Math.floor(Math.random() * 5) + 1;
            landingPage.style.backgroundImage = `url("images/img${rand}.jpg")`;
        }, 10000)
    }
    else
        clearInterval(randomBginterval);
}
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
        // save change bg option to local storage
        window.localStorage.setItem('changeBg', btn.dataset.changeBg);
        // function to check for change bg
        randomBg();
        // remove active class from all btns
         changeBgBtns.forEach(btn => {
            btn.classList.remove('active');
        })

        // add active class to choosen btn
        btn.classList.add('active');
    })
})

// animate best offers section
window.addEventListener('scroll', () => {
    if(window.scrollY >= bestOffer.offsetTop - bestOffer.offsetHeight)
    progresses.forEach(progress => {
        progress.style.width = progress.dataset.percentage;
    })
})

// showing clicked image on a pop up div
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        // adding overlay to the body
        const overlay = document.createElement('div');
        overlay.classList.add('popup-overlay');
        document.body.append(overlay);

        // creating popup div and put image in it
        const popupBox = document.createElement('div');
        popupBox.classList.add('popup-box')
        document.body.append(popupBox);

        // showing choosen image and display it in the box
        const popImg = document.createElement('img');
        popImg.classList.add('popup-img');
        popImg.src = img.src;
        popupBox.append(popImg);

        // creating close btn
        const closeBox = document.createElement('div');
        closeBox.classList.add('close-box');
        popupBox.append(closeBox);
        const closeIcon = document.createElement('span');
        closeIcon.classList.add('close-icon');
        closeIcon.innerText = 'x';
        closeBox.append(closeIcon);
    })
})

document.addEventListener('click', e => {
    if(e.target.className === 'close-box') {
        e.target.parentNode.remove();
        document.querySelector('.popup-overlay').remove();
    }
})

// what will be the fisrt thing to happen when the page load
window.onload = function () {
    // setting main color equal to local storage color onload the page
    root.style.setProperty('--clr-main', window.localStorage.getItem('mainColor'));

    // putting active class on active color on local storage
    colors.forEach(color => {
        if(color.dataset.color === window.localStorage.mainColor) 
            color.classList.add('active');
    })

    // function to check for change bg
    randomBg();

    // add class active to active btn
    changeBgBtns.forEach(btn => {          
            if(window.localStorage.getItem('changeBg')  === btn.dataset.changeBg) {
                btn.classList.add('active');
            }
        })   
}