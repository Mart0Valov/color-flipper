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
