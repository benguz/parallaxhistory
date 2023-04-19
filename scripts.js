const map = document.getElementById("map");
const counter = document.getElementById("counter");
let year = 1974;

window.addEventListener("scroll", () => {
    let scrollPosition = window.pageYOffset;
    let maxScroll = document.body.scrollHeight - window.innerHeight;

    // Parallax effect
    map.style.transform = `translateZ(-1px) translateY(${-scrollPosition * 0.5}px)`;

    // Counter
    let currentYear = Math.floor((scrollPosition / maxScroll) * (1994 - 1974) + 1974);
    if (year !== currentYear) {
        year = currentYear;
        counter.textContent = year;
    }

    // Background color change
    let redValue = Math.floor((scrollPosition / maxScroll) * 255);
    map.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

    // Fade-in and fade-out text paragraphs
    textElements.forEach((text) => {
        let textPosition = text.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (textPosition > windowHeight * 0.25 && textPosition < windowHeight * 0.75) {
            text.style.opacity = 1;
        } else {
            text.style.opacity = 0;
        }
    });
});
