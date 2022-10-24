const header = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener('click', function () {
    const color = makeRandomColor();
    header.style.color = makeHeaderColor(color);
    document.body.style.backgroundColor = color;
    header.innerText = color;
});

function makeRandomColor() {
    const r = randNumber0to255();
    const g = randNumber0to255();
    const b = randNumber0to255();

    return `rgb(${r}, ${g}, ${b})`;
}
function randNumber0to255() {
    return Math.floor(Math.random() * 256);
}

function makeHeaderColor(color) {
    const rgb = color.replace(/[^\d,]/g, '').split(',');
    if (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114 > 120) {
        return 'black';
    } else {
        return 'white';
    }
}