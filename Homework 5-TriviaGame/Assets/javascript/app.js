//I got stuck trying to make the timer display on the page. My initial intent was to have a prompt at the beginning of the game that would begin the timer and reveal the first question. The idea was that completing each question would reveal the next one. unfortuantely, I wasn't able to make the command without loosing the the display for all of the questions.

var firstQuestion = "Question 1: Burn victim has an unhealthy obsession with a teenage boy";
var secondQuestion = "Question 2: A family's first Airbnb experience goes terribly wrong";
var thirdQuestion = "Question 3: Group of Frat boys travel cross-country to return jewlery";
var fourthQuestion = "Question 4: Young woman goes undercover to document everyday life of the Chinese military";
var fifthQuestion = "Question 5: Rich socialites loose their inhibitions and try the ice bucket challenge!";
var sixthQuestion = "Question 6:A young librarian is overcome with Stockholm syndrome and hallucinates";
var seventhQuestion = "Question 7: Man vows to challenge zoning laws and overcome racial stereotypes";
var eighthQuestion = "Question 8: Depressed, widowed father teams up with mentally challenged woman to find his disabled son";
var ninthQuestion = "Question 9: Paranoid billionaire afraid of immigrant";
var finalQuestion = "Question 10: Amputee father reunites with long lost son and wants him to take over the family business";


$("#correctAnswer").click(function(){
  
  $('#correctAnswer').val("");
  alert("Correct!");

});



$(document).ready(function () {


  var timeLeft = 60;

  

  // setTimeout(function(){},120000)

  // creates set interval for every second. TimeUp allows us to target it. Inside curly braces is the code you want to run every second. 
  var timeUP = setInterval(function () {
  

    timeLeft--;
    
    $("#time").html("<p>" + timeLeft + "</p>");
    console.log(timeLeft);

    //if timeleft = 0 the run clearInterval
    if (timeLeft == 0) {
      clearInterval(timeUP)
    }
  
  }, 1000)

 



  $("#One").text(firstQuestion);


  $("#second").text(secondQuestion);


  $("#third").text(thirdQuestion);


  $("#fourth").text(fourthQuestion);


  $("#fifth").text(fifthQuestion);


  $("#sixth").text(sixthQuestion);


  $("#seventh").text(seventhQuestion);


  $("#eighth").text(eighthQuestion);


  $("#ninth").text(ninthQuestion);


  $("#ten").text(finalQuestion);



});




