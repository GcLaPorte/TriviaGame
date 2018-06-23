//I got stuck trying to make the timer display on the page. My initial intent was to have a prompt at the beginning of the game that would begin the timer and reveal the first question. The idea was that completing each question would reveal the next one. unfortuantely, I wasn't able to make the command without loosing the the display for all of the questions.

 var firstQuestion= "Question 1: Burn victim has an unhealthy obsession with a teenage boy";
 var secondQuestion="Question 2: A family's first Airbnb experience goes terribly wrong";
 var thirdQuestion ="Question 3: Group of Frat boys travel cross-country to return jewlery";
 var fourthQuestion ="Question 4: Young woman goes undercover to document everyday life of the Chinese military";
 var fifthQuestion ="Question 5: Rich socialites loose their inhibitions and try the ice bucket challenge!";
 var sixthQuestion ="Question 6:A young librarian is overcome with Stockholm syndrome and hallucinates";
 var seventhQuestion ="Question 7: Man vows to challenge zoning laws and overcome racial stereotypes";
 var eighthQuestion ="Question 8: Depressed, widowed father teams up with mentally challenged woman to find his disabled son";
 var ninthQuestion ="Question 9: Paranoid billionaire afraid of immigrant";
 var finalQuestion ="Question 10: Amputee father reunites with long lost son and wants him to take over the family business";

var firstAnswers = ["a: When Harry met Sally", "b: Harry Potter", "c: Hannibal"];
var secondAnswers = ["a: Pretty Woman", "b: Four Rooms", "c: The Shining"];
var thirdAnswers = ["a: Lord of the Rings", "b: Pretty Woman", "c: The Dark knight Rises"];
var fourthAnswers = ["a: Mulan", "b: Miss Congeniality", "c: Thelma & Louise"];
var fifthAnswers = ["a: The Grey", "b: Titanic", "c: Alaska"];
var sixthAnswers = ["a: Boiler Room", "b: Misery", "c: Beauty and the Beast"];
var seventhAnswers = ["a: Shrek", "b: Shallow Hal", "c: Jaws"];
var eighthAnswers = ["a: Primal Fear", "b: Inception", "c: Finding Nemo"];
var ninthAnswers = ["a: Hotel Rwanda", "b: Batman Vs. Superman", "c:Die Hard"];
var tenthAnswers = ["a: Office Space", "b: The Godfather", "c: Star Wars"];




$(document).ready(function(){

	$("#One").text(firstQuestion);
  $('#1answers').text(firstAnswers);
  
  $("#second").text(secondQuestion);
  $('#2answers').text(secondAnswers);
  
  $("#third").text(thirdQuestion);
	$('#3answers').text(thirdAnswers);
  
  $("#fourth").text(fourthQuestion);
  $('#4answers').text(fourthAnswers);
  
  $("#fifth").text(fifthQuestion);
  $('#5answers').text(fifthAnswers);
  
	$("#sixth").text(sixthQuestion);
  $('#6answers').text(sixthAnswers);
  
  $("#seventh").text(seventhQuestion);
  $('#7answers').text(seventhAnswers);
  
  $("#eighth").text(eighthQuestion);
	$('#8answers').text(eighthAnswers);
  
  $("#ninth").text(ninthQuestion);
  $('#9answers').text(ninthAnswers);
  
  $("#ten").text(finalQuestion);
  $('#10answers').text(tenthAnswers);
  
  console.log();
  
})


	
var countDown = new Date("Sep 5, 2018 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("display").innerHTML = minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Time up!";
  }
}, 1000);