// set player score
let playerWin1 = 0;
let playerWin2 = 0;
let player1 = "Player 1";
let player2 = "Player 2";

$(document).ready(function () {
    console.log('jquery hello');

    // set player names 
    $('a.player-1').on('click', function () {
        player1 = prompt("Hi Player 1, change your name:");
        if (player1) {
            $('.firstPlayer').text(player1);
        }
    });

    $('a.player-2').on('click', function () {
        player2 = prompt("Hi Player 2, change your name:");
        if (player2) {
            $('.secondPlayer').text(player2);
        }
    });

    // roll the dice
    $('button').on('click', function () {

        // on button click, set 8 random numbers
        const randomNumber1 = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        const randomNumber3 = Math.floor(Math.random() * 6) + 1;
        const randomNumber4 = Math.floor(Math.random() * 6) + 1;
        const randomNumber5 = Math.floor(Math.random() * 6) + 1;
        const randomNumber6 = Math.floor(Math.random() * 6) + 1;
        const randomNumber7 = Math.floor(Math.random() * 6) + 1;
        const randomNumber8 = Math.floor(Math.random() * 6) + 1;

        // show who wins based on random number, tally score
        const playerScore1 = (randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4);
        const playerScore2 = (randomNumber5 + randomNumber6 + randomNumber7 + randomNumber8);

        if (playerScore1 === playerScore2) {
            $('.results').text("It's a tie!");
        } else if (playerScore1 < playerScore2) {
            $('.results').text(`${player2} Wins!`);
            playerWin2 = playerWin2 + 1;
        } else {
            $('.results').text(`${player1} Wins!`);
            playerWin1 = playerWin1 + 1;
        };

        // change graphics to match the random number
        $("#firstDice").attr("src", `dice${randomNumber1}.png`);
        $("#secondDice").attr("src", `dice${randomNumber2}.png`);
        $("#thirdDice").attr("src", `dice${randomNumber3}.png`);
        $("#fourthDice").attr("src", `dice${randomNumber4}.png`);
        $("#fifthDice").attr("src", `dice${randomNumber5}.png`);
        $("#sixthDice").attr("src", `dice${randomNumber6}.png`);
        $("#seventhDice").attr("src", `dice${randomNumber7}.png`);
        $("#eighthDice").attr("src", `dice${randomNumber8}.png`);

        // change player scores
        $(".playerScore1").text(playerWin1);
        $(".playerScore2").text(playerWin2);

        // console logs
        console.log(`Player 1 Dice: ${playerScore1}, Score: ${playerWin1}-${playerWin2}`);
        console.log(`Player 2 Dice: ${playerScore2}, Score: ${playerWin1}-${playerWin2}`);
    });

});