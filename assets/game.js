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
        health: 185,
        attackPower: 15,
        oponentCounter: 5,
        id: 'lukeSkywalker'
    },
    {
        name: "Darth Sidious and Darth Vader",
        health: 180,
        attackPower: 12,
        oponentCounter: 7,
        id: 'darthSidiousandDarthVader'
    },
    {
        name: "Yoda",
        health: 180,
        attackPower: 15,
        oponentCounter: 6,
        id: 'yoda'
    },
    {
        name: "General Grevious",
        health: 100,
        attackPower: 10,
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
$("#oponentPosition").droppable({

    accept: ".card",
    drop: function (ev, ui) {
        console.log(event.target);
        console.log($(ui.draggable).attr("data-name"))
        opponentName = $(ui.draggable).attr("data-name");

        for (var i = 0; i < cards.length; i++) {
            if (cards[i].name == opponentName) {
                oponent = cards[i];
                document.getElementById("attack").disabled = false;
            }
        }
        console.log(oponent);

    },
});

//this is the basic game loop calling each function to play the game
$("#attack").on("click", function (event) {
    event.preventDefault()
    attack()
    // var x = document.getElementById("lightsaber");
    // function playAudio() {
    //     x.play();
});

//adds a round the roundCounter
function addRound() {
    totalRounds + - 1;

};

//player and oponent moves
function attack(p, o) {
    //store fitghters base attack
    //store the oponent counter attack
    var fightersBase = fighter.attackPower;
    var oponentsCounter = oponent.oponentCounter;

    var fightersAddedAttack = 0;
    fightersAddedAttack += fightersBase;

    oponent.health = oponent.health - fightersAddedAttack;
    fighter.health -= oponentsCounter;

    if (fighter.health <= 0) {
        // losses = losses + 1
        window.location.reload()
    }
    else if (oponent.health <= 0) {
        $('#' + oponent.id).remove()
        document.getElementById("attack").disabled = true;
        wins++;
        fighter.health += 25
        $("#wins").text(wins)
        console.log(wins)//debugging

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
    if (oponent.name == 'Luke Skywalker') {
        $("#notesBox").text("No one beats Luke Skywalker!")

    } else if (oponent.name == 'Yoda') {
        $("#notesBox").text("Too Old!")
    }
    else if (oponent.name == 'Darth Sidious and Darth Vader') {
        $("#notesBox").text("Feel the dark side of the force!")
    }
    else if (oponent.name == 'General Grevious') {
        $("#notesBox").text("Die Jedi Scum!")
    }

    if (wins >= 3) {
        alert("You Win!")
        window.location.reload()
    }
}




