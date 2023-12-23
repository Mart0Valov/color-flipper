// selecting needed elements
const colorDisplay = document.getElementById('color-display');
const colorName = document.getElementById('color-name');
const changeColorBtn = document.getElementById('change-color-btn');

// setting default colors for the app
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

// function declaration which returns random index
function generateRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// callback function for changeColorBtn
function onClick(ev) {
    // generate number
    const colorForBody = generateRandomIndex(colors.length - 1);
    let colorForColorName = generateRandomIndex(colors.length - 1);

    // change body background color
    document.body.style.backgroundColor = colors[colorForBody];

    // change color name of the colorName element
    colorName.textContent = colors[colorForBody];
    // change randomly the color of colorName;
    if (colorForBody === colorForColorName) {
        if (colorForColorName === colors.length - 1) {
            colorForColorName--;
        } else {
            colorForColorName++;
        }
    }
    colorName.style.color = colors[colorForColorName];
}

changeColorBtn.addEventListener('click', onClick);
