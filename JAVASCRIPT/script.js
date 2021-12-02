// function sanityCheck () {
//     console.log("We all float down here")
// }

// sanityCheck()

// Steps:
//Game should show title screen w/instructions
//Once pet name is entered, game should start
//Game screen should show pet name, 3 buttons that correspond to 3 bars, and show age
//when pet hits a certain age, change it's graphic
//when win/lose conditions are met, players should see a result screen

//Set Game Parameters:
//Called when conditions are met

//Win parameters:

function playerLose() {
    

}

// Action buttons
const $startGame = $('.start-game');

let user = {
    name: '',
}

document.getElementById("show-name").innerHTML= petname-field


//Hide Title Screen
function hideAll() {
    $('.Title-Screen').css('display', 'none');
    $('.Winner').css('display', 'none');   
    $('.Loser').css('display', 'none');      
}


//Start button should on click:
//Hide everything besides meters, petname, pet, and buttons.

//Start Button Test
$( ".start-button" ).click(function(event) {
//   alert( "Handler for .click() called." );
event.preventDefault()
hideAll()
});

function onClick () {

}

//I'm trying to capture the pets name from the input field...
    slime.name = $('.petname-field').val();
    $('.show-name').text(user.name);
    play();
}

// $( "petname-field" )
//   .keyup(function() {
//     var value = $( this ).val();
//     $( "p" ).text( value );
//   })
//   .keyup();



//Functionality
//




//Bars
//I should be able to create one class for the bars, and then use CSS and JS to 
//modify all three for the respective areas: Gluttony, Awakening, and Malfeasance

//I need to figure out how to make bars function...

// //Bars Named
// const $gluttonyBar = $('#gluttony');

// //JS for Bars Test
//Sources: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
//Need to define meter/speed
//Need to set starting point for bar(s)
//Meter should rise/fall over time and player can interact w/button


// function hungerLevel(meter,  speed) {
//     hungerIntervalId = setInterval(function () {
//         user.hunger++;
//         progbar.css('width', user.hunger + '%');
//         if (user.hunger >= 100) {
//             // clearAllIntervals();
//             // playerLose();
//         }
//     }, speed);


// };