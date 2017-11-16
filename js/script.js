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
//Waits for the Html document to startup before run code    
$("button").click(function() {
   var input = $("input").val();
   $("#player_choice").text(input + "!");
    var choice = ["Rock!" , "Paper!" , "Scissor!"];
    var math = Math.floor(Math.random() * 3);
   $("#computer_choice").text(choice[math]);
});
// ^Function for inputing choice from input bar.^

// A option to choose in the RPS game from clicking image
$("#rock").click(function() {
   $("#player_choice").text("Rock!");
   var choice = ["Rock!" , "Paper!" , "Scissor!"];
    var math = Math.floor(Math.random() * 3);
   $("#computer_choice").text(choice[math]);
});

$("#scissor").click(function() {
   $("#player_choice").text("Scissor!");
   var choice = ["Rock!" , "Paper!" , "Scissor!"];
    var math = Math.floor(Math.random() * 3);
   $("#computer_choice").text(choice[math]);
});

$("#paper").click(function() {
   $("#player_choice").text("Paper!");   
   var choice = ["Rock!" , "Paper!" , "Scissor!"];
    var math = Math.floor(Math.random() * 3);
   $("#computer_choice").text(choice[math]);
});
    });
// DOCUMENT READY FUNCTION

