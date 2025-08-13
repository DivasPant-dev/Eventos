const day = document.querySelector('.day');
const night = document.querySelector('.night');
const body = document.querySelector('body');
const titles = document.querySelectorAll('.section-heading');
const header = document.querySelector('#header');
const title = document.querySelector('h1');
const subTitle = document.querySelector('.subtitle');
const footer = document.querySelector('.site-footer');
const footerText = document.querySelector('.footerText');
const eventCard = document.querySelectorAll('.event-card');

day.addEventListener("click", function() {
    day.classList.add("dark");
    night.classList.remove("dark");
    titles.forEach(element => {
        element.classList.add("blue");
        element.classList.remove("white");
    });
    body.style.backgroundColor = "#f7f7fa";
    header.style.backgroundColor = "#ffffff";
    title.style.color = "#2d2d6a";
    subTitle.style.color = "black";
    footer.style.backgroundColor = "#f0f0f5";
    footerText.style.color = "#777777";
    eventCard.forEach(element => {
        element.classList.remove("changeShadowBlack");
        element.classList.add("changeShadowBlue");
    });
});

night.addEventListener("click", function() {
    day.classList.remove("dark");
    night.classList.add("dark");
    titles.forEach(element => {
        element.classList.add("white");
        element.classList.remove("blue");
    });
    body.style.backgroundColor = "#3b3b3b";
    header.style.backgroundColor = "#3f3f3fff";
    title.style.color = "black";
    subTitle.style.color = "black";
    footer.style.backgroundColor = "#808080";
    footerText.style.color = "black";
    eventCard.forEach(element => {
        element.classList.add("changeShadowBlack");
        element.classList.remove("changeShadowBlue");
    });
});
