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
var yourMove;
var opponentName = "";
var fighterName = "";
var result;
var roundCounter = 0;
var turnCounter = 0;
var healthChange = 0;
var oponentHealth = 0;
var playerHealth = 0;
var losses = 0;
var wins = 0;

var cards = [
    {
        name: "Luke Skywalker",
        health: 160,
        attack: 8,
        oponentCounter: 5,
        id: "lukeSkywalker"
    },
    {
        name: "Darth Sidious and Darth Vader",
        health: 190,
        attack: 9,
        oponentCounter: 7,
        id: 'darthSidiousandDarthVader'
    },
    {
        name: "Yoda",
        health: 120,
        attack: 9,
        oponentCounter: 6,
        id: "yoda"
    },
    {
        name: "General Grevious",
        health: 120,
        attack: 4,
        oponentCounter: 2,
        id: 'generalGrevious'
    }
]


var script = $("#attackNotes");
var health = $("#health");
var attackButton = $("#attack");

$(".card").draggable();

$("#playerPosition").droppable(
    {
        accept: ".card",
        // accept: ".card-title",
        drop: function (ev, ui) {
            console.log($(event.target));
            console.log(ui.draggable)
            fighterName = $(ui.draggable).attr("data-name");
            //fighters been chosen
            //loop through our array and find the object that has the same name as our fighter
            //if
            //find our var and stor that obj to our fighter
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].name == fighterName) {
                    fighter = cards[i];
                }
            }
            console.log(fighter);
        }
    }
)
$("#oponentPosition").droppable(
    {
        accept: ".card",
        // accept: ".card-title",
        drop: function (ev, ui) {
            console.log(event.target);
            console.log($(ui.draggable).attr("data-name"))
            opponentName = $(ui.draggable).attr("data-name");

            for (var i = 0; i < cards.length; i++) {
                if (cards[i].name == opponentName) {
                    oponent = cards[i];
                }
            }
            console.log(oponent);
        }
    }
)


//this is the basic game loop calling each function to play the game
$("#attack").on("click", function (event) {
    event.preventDefault();
    // $('#lightsaber').play();
    attack()

});

//adds a round the roundCounter
function addRound() {
    totalRounds + - 1;
}


//player and oponent moves
function attack(p, o) {
    //store fitghters base attack
    //store the oponent counter attack
    var fightersBase = fighter.attack;
    var oponentsCounter = oponent.oponentCounter;

    var fightersAddedAttack = 0;
    fightersAddedAttack += fightersBase;

    oponent.health = oponent.health - fightersAddedAttack;
    fighter.health -= oponentsCounter;

    if (fighter.health <= 0) {
        losses = losses + 1
        window.location.reload()
    }
    else if (oponent.health <= 0) {
        ++wins;
        $('#' + oponent.id).remove()

    } else {
        //oponents
        if (oponent.name == 'Luke Skywalker') {
            $('#lHealth').text(oponent.health)

        } else if (oponent.name == 'Yoda') {
            $('#yHealth').text(oponent.health)
        }
        else if (oponent.name == 'Darth Sidious and Darth Vader') {
            $('#dHealth').text(oponent.health)
        }
        else if (oponent.name == 'General Grevious') {
            $('#gHealth').text(oponent.health)
        }
        //fighters
        if (fighter.name == 'Luke Skywalker') {
            $('#lHealth').text(fighter.health)
        } else if (fighter.name == 'Yoda') {
            $('#yHealth').text(fighter.health)
        } else if (fighter.name == 'Darth Sidious and Darth Vader') {
            $('#dHealth').text(fighter.health)
        } else if (fighter.name == 'General Grevious') {
            $('#gHealth').text(fighter.health)
        }
    }
    //if our charictor dies losses +1 game restarts
    //if oppnent dies wins +1 and we will remove the oponents card
    //else subtract opponents and users helth and cick attack again


    // if (fighter.name == 'Luke Skywalker') {

    //     result = 'Oponent counter attack was successful! You took 10 damage';
    //     fighter.Health -= 10;
    // } else if (move = 5 && p === 'attack') {
    //     result = 'You dealt 25 damage!';
    //     oponent.Health -= 15;
    //     fighter.Health -= 2;
    // } else if (move < 5 && p === 'attack') {
    //     result = 'Your counter attack was not successful! You were dealt 15 damage!! Your oponent was dealt 5 damage';
    //     fighter.Health -= 15;
    //     oponent.Health -= 5;
    // }

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



