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

let pet = {
  name: "",
};

//Return later to fix
// $(document).ready(function(){
//     $('.start-button').prop('disabled', true);
//     $('.pet-name').keyup(function(){
//         if ($(this).val()) {
//             $('.start-button').prop('disabled', false);
//         } else {
//             $('.start-button').prop('disabled', true);
//     }   }
// );

window.onload = function () {
  $(".Winner").css("display", "none");
  $(".Loser").css("display", "none");
};

//Start Game
//User enters name into input field
//get data from input field and send it to variable

//Reads "Click Here to Play"
$(".start-button").click(function (event) {
  //   alert( "Handler for .click() called." );
  event.preventDefault();
  gluttony(100); //speed at which bar fills
  awaken(1000);
  naughty(150);
  old(1000);
  hideAll();
  pet.name = $(".petname").val();
  $("#show-name").text(pet.name);
  //   console.log(pet.name);
});

//Show Lose Game
function loseGame() {
  $(".Loser").show();
}

//Show Win Game
function winGame() {
  $(".Winner").show();
  clearBoard();
}

//Shared Hide Function
function hideAll() {
  $(".Title-Screen").css("display", "none");
  $(".Winner").css("display", "none");
  $(".Loser").css("display", "none");
}

//JS for Bars Test
//Sources: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
//https://css-tricks.com/css3-progress-bars/
//https://stackoverflow.com/questions/7204494/jquery-show-not-revealing-a-div-with-visibility-of-hidden
//https://www.w3schools.com/howto/howto_js_progressbar.asp

//Need to define meter/speed
//Need to set starting point for bar(s)
//Meter should rise/fall over time and player can interact w/button

// USER LEVEL FUNCTIONS
//Play Buttons
//Find Gluttony Button Element
//Add Click Handler to Gluttony Button
//Decrease Fullness
// $(".start-button").click(function (event) {

$("#gluttony-button").click(function (event) {
  if (fullness > 10) fullness -= 10;
});

$("#awaken-button").click(function (event) {
  if (awakening > 10) awakening -= 10;
});

$("#evil-button").click(function (event) {
  if (evil < 90) evil += 10;
});

// VALUE BARS
// HTML-CSS is #my-bar

//Gluttony, Malfeasance, and Awakening Bars
//Gluttony
let fullness = 10; //starting amount
let gluttonyIntervalId;

const gettingFat = function () {
  let fullnessPercentage;
  if (fullness >= 100) {
    clearBoard(); //STOP
    loseGame(); //SHOW LOSE GAME
  } else {
    fullness++;
    fullnessPercentage = fullness + "%";
    $("#my-bar").css("width", fullnessPercentage);
    $("#my-bar").html(fullnessPercentage);
  }
};

const gluttony = function (speed) {
  gluttonyIntervalId = setInterval(function () {
    gettingFat();
  }, speed);
};

const clearBoard = function () {
  clearInterval(gluttonyIntervalId);
  clearInterval(awakenIntervalId);
  clearInterval(horribleIntervalId);
  clearInterval(dustIntervalId);
};

//Awaken
let awakening = 40; //starting amount
let awakenIntervalId;

const wakingUp = function () {
  let awakeningPercentage;
  if (awakening >= 100) {
    clearBoard(); //STOP
    loseGame(); //SHOW LOSE GAME
  } else {
    awakening++;
    awakeningPercentage = awakening + "%";
    $("#awaken-bar").css("width", awakeningPercentage);
    $("#awaken-bar").html(awakeningPercentage);
  }
};

const awaken = function (speed) {
  awakenIntervalId = setInterval(function () {
    wakingUp();
  }, speed);
};

//Malfeasance
let evil = 100; //starting amount
let horribleIntervalId;

const beingBad = function () {
  let beingBadPercentage;
  if (evil === 0) {
    clearBoard(); //STOP
    loseGame(); //SHOW LOSE GAME
  } else {
    evil--;
    beingBadPercentage = evil + "%";
    $("#naughty-bar").css("width", beingBadPercentage);
    $("#naughty-bar").html(beingBadPercentage);
  }
};

const naughty = function (speed) {
  horribleIntervalId = setInterval(function () {
    beingBad();
  }, speed);
};

//Withering
//Age of pet represented by number
//Over the duration of gameplay, increase number

let withering = 1;
let dustIntervalId;

const aging = function () {
  //if wither ===5 and/or ===10
  //change avatar picture

  if (withering === 30) {
    winGame();
  } else {
    withering++;
    $("#age").text(withering);
  }
  if (withering === 5) {
    $("#ham").attr("src", "images/184_Black_Ooze.png");
  } else if (withering === 10) {
    $("#ham").attr("src", "images/Slime_SMT1.png");
  }
  
};

const swap = function () {
  if (withering === 5) {
    $("#ham").attr("src", "images/Blob_Dx2.png");
  }
};

//age p tag
//display a number that increases over time
//matched to withering

const old = function (speed) {
  dustIntervalId = setInterval(function () {
    aging();
  }, speed);
};
