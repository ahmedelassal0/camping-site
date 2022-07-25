const bgImgs = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// selecting HTML elements
const landingPage = document.querySelector('.landing-page');
const gear = document.querySelector('.gear-icon');
const settingsBox = document.querySelector('.settings-box');
// functions
setInterval(() => {
    const rand = Math.floor(Math.random() * 5) + 1;
    landingPage.style.backgroundImage = `url("images/img${rand}.jpg")`;
}, 10000)

gear.addEventListener('click', () => {
    settingsBox.classList.toggle('open');
})