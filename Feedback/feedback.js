const emojis = document.querySelectorAll('.emoji');
const label = document.querySelector('.label');
const submitBtn = document.querySelector('.submit');
const commentInput = document.querySelector('#comment');

const quality = ["Awful", "Bad", "Average", "Great", "Excellent"];

let selectedValue = 2;

emojis.forEach(emoji => {
    emoji.addEventListener("click", function () {

        emojis.forEach(e => e.classList.remove("active"));

        emoji.classList.add("active");

        emoji.parentElement.appendChild(label);

        selectedValue = parseInt(emoji.getAttribute("data-value"));
        label.textContent = quality[selectedValue];
    });
});

const submit = function() {
    alert("Sorry, sending feedback is in development.") 
};