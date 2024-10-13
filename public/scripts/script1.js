jQuery(function () {
  $("#play-button").click(function () {
    // Your game logic goes here (the existing jQuery code)
    let choice = ["stone", "paper", "scissors"];
    let choiceAction = [
      "../public/image/props/stone.png",
      "../public/image/props/paper.png",
      "../public/image/props/scissor.png",
    ];
    let choiceReaction = [
      "../public/image/props/prize.png", // win
      "../public/image/props/draw.png", // draw
      "../public/image/props/boohoo.jpg", // lose
    ];

    let player1Choice = choice[Math.floor(Math.random() * 3)];
    let player2Choice = choice[Math.floor(Math.random() * 3)];

    // Get the corresponding images for each player's choice
    let choice1Img = choiceAction[choice.indexOf(player1Choice)];
    let choice2Img = choiceAction[choice.indexOf(player2Choice)];

    // Now, switch on player1Choice for game logic
    switch (player1Choice) {
      case choice[0]: // Player 1 chose "stone"
        if (player2Choice === choice[0]) {
          // Player 2 chose "stone"
          $("#player-1-play").attr("src", choice1Img);
          $("#player-2-play").attr("src", choice2Img);
          $("#player-1-conclusion").attr("src", choiceReaction[1]); // draw
          $("#player-2-conclusion").attr("src", choiceReaction[1]); // draw
          $("#conclusion").text("It's a Tie!");
          console.log("It's a Tie! [0:0]");
        } else if (player2Choice === choice[1]) {
          // Player 2 chose "paper"
          $("#player-1-play").attr("src", choice1Img);
          $("#player-2-play").attr("src", choice2Img);
          $("#player-1-conclusion").attr("src", choiceReaction[2]); // lose
          $("#player-2-conclusion").attr("src", choiceReaction[0]); // win
          $("#conclusion").text("Player 2 Wins!");
          console.log("Player 2 Wins! [0:1]");
        } else {
          // Player 2 chose "scissors"
          $("#player-1-play").attr("src", choice1Img);
          $("#player-2-play").attr("src", choice2Img);
          $("#player-1-conclusion").attr("src", choiceReaction[0]); // win
          $("#player-2-conclusion").attr("src", choiceReaction[2]); // lose
          $("#conclusion").text("Player 1 Wins!");
          console.log("Player 1 Wins! [0:2]");
        }
        break;

      case choice[1]: // Player 1 chose "paper"
        if (player2Choice === choice[0]) {
          // Player 2 chose "stone"
          $("#player-1-play").attr("src", choice1Img);
          $("#player-2-play").attr("src", choice2Img);
          $("#player-1-conclusion").attr("src", choiceReaction[0]); // win
          $("#player-2-conclusion").attr("src", choiceReaction[2]); // lose
          $("#conclusion").text("Player 1 Wins!");
          console.log("Player 1 Wins! [1:0]");
        } else if (player2Choice === choice[1]) {
          // Player 2 chose "paper"
          $("#player-1-play").attr("src", choice1Img);
          $("#player-2-play").attr("src", choice2Img);
          $("#player-1-conclusion").attr("src", choiceReaction[1]); // draw
          $("#player-2-conclusion").attr("src", choiceReaction[1]); // draw
          $("#conclusion").text("It's a Tie!");
          console.log("It's a Tie! [1:1]");
        } else {
          // Player 2 chose "scissors"
          $("#player-1-play").attr("src", choice1Img);
          $("#player-2-play").attr("src", choice2Img);
          $("#player-1-conclusion").attr("src", choiceReaction[2]); // lose
          $("#player-2-conclusion").attr("src", choiceReaction[0]); // win
          $("#conclusion").text("Player 2 Wins!");
          console.log("Player 2 Wins! [1:2]");
        }
        break;

      case choice[2]: // Player 1 chose "scissors"
        if (player2Choice === choice[0]) {
          // Player 2 chose "stone"
          $("#player-1-play").attr("src", choice1Img);
          $("#player-2-play").attr("src", choice2Img);
          $("#player-1-conclusion").attr("src", choiceReaction[2]); // lose
          $("#player-2-conclusion").attr("src", choiceReaction[0]); // win
          $("#conclusion").text("Player 2 Wins!");
          console.log("Player 2 Wins! [2:0]");
        } else if (player2Choice === choice[1]) {
          // Player 2 chose "paper"
          $("#player-1-play").attr("src", choice1Img);
          $("#player-2-play").attr("src", choice2Img);
          $("#player-1-conclusion").attr("src", choiceReaction[0]); // win
          $("#player-2-conclusion").attr("src", choiceReaction[2]); // lose
          $("#conclusion").text("Player 1 Wins!");
          console.log("Player 1 Wins! [2:1]");
        } else {
          // Player 2 chose "scissors"
          $("#player-1-play").attr("src", choice1Img);
          $("#player-2-play").attr("src", choice2Img);
          $("#player-1-conclusion").attr("src", choiceReaction[1]); // draw
          $("#player-2-conclusion").attr("src", choiceReaction[1]); // draw
          $("#conclusion").text("It's a Tie!");
          console.log("It's a Tie! [2:2]");
        }
        break;

      default:
        $("#conclusion").text("Invalid Operation!");
        console.log("Invalid Operation!");
    }
  });
});
