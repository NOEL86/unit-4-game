// start game by clicking/selecting a player
//will move player to attack position
//game will randomly choose opponent
//game will move opponent to attack position
//click attack button
//game will state damage in box
//game will state win if opponents life is <=0
//game will state lose if player's life is <=0

var fighter = [".card"]
var win = 0;
var damage = 0;
var damageNotes = [];

$(document).ready(function () {

    $(".card").draggable({ helper: 'clone' });

    $("#playerPosition").droppable(

        {
            accept: ".card",
            drop: function (ev, ui) {

                var droppedPlayer = $(ui.draggable).clone();
                $(this).append(droppedPlayer);
                alert("You chose Luke Skywalker")
            }
        }
    );

});





// $(fighter).click(function () {

// }

// beginGame();
