// start game by selecting a player
//drag player to left space
//drag oponent to oponent space
//click attack button
//game will state damage in box of player and oponent
//click attack button until either player or oponent is defeated
//game will state win if opponents life is <=0
//game will state lose if player's life is <=0

var fighter;
var oponent;
var fighterC = []; //current
var oponentC = []; //current
var yourMove;
var result;
var roundCounter = 0;
var turnCounter = 0;
var healthChange = 0;
var oponentHealth = 0;
var playerHealth = 0;
var lukeSkywalker = {
    name: "Luke Skywalker",
    health: 160,
    attack: 7,
}
var vader = {
    name: "Darth Sidious & Darth Vader",
    health: 190,
    attack: 9,
}
var yoda = {
    name: "Yoda",
    health: 120,
    attack: 9,

}

var general = {
    name: "General Grevious",
    health: 120,
    attack: 4,
}


var script = document.getElementById("#attackNotes");
var health = document.getElementById("#health");
var attackButton = document.getElementById("#attack");





$(document).ready(function () {
    $("#lukeSkywalker").on("drop", function (event) {
        // event.preventDefault();
        // event.stopPropagation();
        alert("Selected LukeSkywalker!");
    });


    $(".card").draggable({});

    $("#playerPosition").droppable(

        {
            accept: ".card",
            accept: ".card-title",
            drop: function (ev, ui) {

                var droppedPlayer = $(ui.draggable)
                $("#playerPosition").append(droppedPlayer)
                console.log("card")
                return true

            }
        }

    );

    $("#challenger").droppable(
        {
            accept: ".card",
            accept: ".card-title",
            drop: function (ev, ui) {

                var droppedPlayer = $(ui.draggable)
                $(this).append(droppedPlayer)
                alert("You've chosen an oponent")
            }
        }
    )
});

//this is the basic game loop calling each function to play the game

$(".button").click(function fight(id) {
    // $('audio#lightsaber')[0].play();
    addRound();
    oponentMove(id); // need to figure out how to assign each box as an opponent and player
    healthChange();
    gameOver();
});

//adds a round the roundCounter
function addRound() {
    totalRounds + - 1;
}


//player and oponent moves
function attack(p, o) {
    var move = Math.floor((Math.random() * 10));
    if (move > 5 && p === 'attack') {
        result = 'Oponent counter attack was successful! You took 10 damage';
        fighter.Health -= 10;
    } else if (move = 5 && p === 'attack') {
        result = 'You dealt 25 damage!';
        oponent.Health -= 15;
        fighter.Health -= 2;
    } else if (move < 5 && p === 'attack') {
        result = 'Your counter attack was not successful! You were dealt 15 damage!! Your oponent was dealt 5 damage';
        fighter.Health -= 15;
        oponent.Health -= 5;
    }
}

//play a sound associate with attack
// function oponentMove(fighter)

// function roundResults(result) {

//     $("#attackNotes").innerHTML += result + "<br>"
// }


function gameOver() {
    if (yourHealth === 0 || compHealth === 0) {
        roundResults(result);
        attackButton.disabled = true;
        alert("Game Over!");
        $(".card").draggable({
            revert: true
        });
        $(":reset").window;
    }
};
