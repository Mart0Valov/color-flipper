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
    const index = generateRandomIndex(colors.length - 1);

    // change body background color
    document.body.style.backgroundColor = colors[index];

    // change color name of the colorName element
    colorName.textContent = colors[index];
}

