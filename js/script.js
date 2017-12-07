//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

//FUNCTIONS
    $(document).ready(function() {
        //variables for the scoreboard
        var win = 0 ;
        var lose = 0 ;
//Waits for the Html document to startup before run code    

//when you click the input button after putting in a value
$("button").click(function() {
        //makes all inputs uppercase
        var input = $("input").val().toUpperCase();
   $("#player_choice").text(input + "!");
        var choice = ["ROCK!" , "PAPER!" , "SCISSOR!"];
        //randomizes a random number up to 3
        var math = Math.floor(Math.random() * 3);
   $("#computer_choice").text(choice[math]);
        if(input === "ROCK" && math === 2 || input === "PAPER" && math === 0 || input === "SCISSOR" && math === 1) {
            $("#game_answer").text("YOU WIN!!!");
            // updates the score chart
            win = win + 1;
            $("#win").text("Wins: " + win);
            
      } else if(input === "ROCK" && math === 1 || input === "PAPER" && math === 2 || input === "SCISSOR" && math === 0) {
            $("#game_answer").text("YOU LOSE!!!");
            // updates the score chart
            lose = lose + 1;
            $("#lose").text("Lose: " + lose);
            
      } else if(input === "ROCK" && math === 0 || input === "PAPER" && math === 1 || input === "SCISSOR" && math === 2) {
            $("#game_answer").text("YOU TIED!!!");
      } else {
          //A response for non readable answer
            $("#player_choice").text("???????????");
            $("#computer_choice").text("No Response");
            $("#game_answer").text("I Don't Think You Put in the Choice Properly");
        }
});

// A option to choose in the RPS game from clicking image
$("#rock").click(function() {
   $("#player_choice").text("Rock!");
        var playchoice = "Rock";
        var choice = ["Rock!" , "Paper!" , "Scissor!"];
        //randomizes a random number up to 3
        var math = Math.floor(Math.random() * 3);
   $("#computer_choice").text(choice[math]);
        if(playchoice === "Rock" && math === 2 ) {
            $("#game_answer").text("YOU WIN!!!");
            win = win + 1;
            $("#win").text("Wins: " + win);
      } else if(playchoice === "Rock" && math === 1 ) {
            $("#game_answer").text("YOU LOSE!!!");
            lose = lose + 1;
            $("#lose").text("Lose: " + lose);
      } else if(playchoice === "Rock" && math === 0) {
            $("#game_answer").text("YOU TIED!!!");
        }
});

$("#scissor").click(function() {
        var playchoice = "Scissor";
   $("#player_choice").text("Scissor!");
        var choice = ["Rock!" , "Paper!" , "Scissor!"];
        //randomizes a random number up to 3
        var math = Math.floor(Math.random() * 3);
   $("#computer_choice").text(choice[math]);
        if(playchoice === "Scissor" && math === 1 ) {
            $("#game_answer").text("YOU WIN!!!");
            //updates the score counter
            win = win + 1;
            $("#win").text("Wins: " + win);
      } else if(playchoice === "Scissor" && math === 0) {
            $("#game_answer").text("YOU LOSE!!!");
            lose = lose + 1;
            $("#lose").text("Lose: " + lose);
      } else if(playchoice === "Scissor" && math === 2) {
            $("#game_answer").text("YOU TIED!!!");
        }
   
});

$("#paper").click(function() {
        var playchoice = "Paper";
   $("#player_choice").text("Paper!");   
        var choice = ["Rock!" , "Paper!" , "Scissor!"];
        //randomizes a random number up to 3
        var math = Math.floor(Math.random() * 3);
   $("#computer_choice").text(choice[math]);
        if(playchoice === "Paper" && math === 0 ) {
            $("#game_answer").text("YOU WIN!!!");
            win = win + 1;
            $("#win").text("Wins: " + win);
      } else if(playchoice === "Paper" && math === 2) {
            $("#game_answer").text("YOU LOSE!!!");
            lose = lose + 1;
            $("#lose").text("Lose: " + lose);
      } else if(playchoice === "Paper" && math === 1) {
            $("#game_answer").text("YOU TIED!!!");
        }
});
    });
// DOCUMENT READY FUNCTION

