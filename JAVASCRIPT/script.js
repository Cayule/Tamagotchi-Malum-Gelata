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

// Action buttons
const $startGame = $('.start-game');



//Hide Title Screen
function hideAll() {
    $('.Title-Screen').css('display', 'none');   
}

//Start Button Test
$( ".start-button" ).click(function(event) {
//   alert( "Handler for .click() called." );
event.preventDefault()
hideAll()
});

function onClick () {

}


