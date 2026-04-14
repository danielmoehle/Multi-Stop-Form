// step screen
let firstStepScreen = document.getElementById("firstStepScreenDiv")
let secondStepScreen = document.getElementById("secondStepScreenDiv")
let thirdStepScreen = document.getElementById("thirdStepScreenDiv")
let finalStepScreen = document.getElementById('finalStepScreenDiv')
let personalInfo = document.getElementById("personalInfoid")
let selectPlan = document.getElementById('selectPlanDivid')
let selectAdOns = document.getElementById('selectAdOnsDivid')
// what step you on screen
let stepOne = document.getElementById('step1') 
let stepTwo = document.getElementById('step2') 
let stepThree = document.getElementById('step3') 
let stepFour = document.getElementById('step4') 

// buttons
let firstStepButton = document.getElementById("firstStepButtonid")
let secondStepButton = document.getElementById('secondStepButtonId')
let thirdStepButton = document.getElementById('thirdStepButtonid')
let submitButton = document.getElementById('submitButtonid')

// if (firstStepScreen.style.display !== "none") {
// stepOne.style.backgroundColor = "rgb(182, 181, 181)"
// }

// if (secondStepScreen.style.display !== "none") {
// stepOne.style.backgroundColor = "rgb(182, 181, 181)"
// }

// if (thirdStepScreen.style.display !== "none") {
// stepOne.style.backgroundColor = "rgb(182, 181, 181)"
// }
// firstStepScreen.style.display = "none"
// secondStepScreen.style.display = "flex"

let screens = [
    firstStepScreen,
    secondStepScreen,
    thirdStepScreen,
    finalStepScreen   
];

let currentScreen = 0

function changeScreen(direction) {
    console.log('test')

    let newIndex = currentScreen + direction;

    if (newIndex >= 0 && newIndex < screens.length) {
        screens[currentScreen].style.display = "none";
        currentScreen = newIndex;
        screens[currentScreen].style.display = "flex";
    }
}



// function showScreen(index) {

//     // Hide all screens
//     screens.forEach(screen => {
//         screen.style.display = "none";
//     });

//     // Show the selected one
//     screens[index].style.display = "flex";

//     // Update tracker
//     currentScreen = index;
// }

// function nextScreen() {
// firstStepScreen.style.display = "none"
// secondStepScreen.style.display = "flex"
// currentScreen
// console.log(currentScreen)
// }

// not working yet

firstStepButton.addEventListener('click', function () {
    changeScreen(1);
});

secondStepButton.addEventListener('click', function () {
    changeScreen(2);
});

thirdStepButton.addEventListener('click', function () {
    changeScreen(3);
});

