var readLineSync = require("readline-sync");

var score = 0;
var userName = readLineSync.question("What's your name? ");

var welcomeMessage = "Welcome " + userName + " to 'Do you know Amey?'";

console.log(welcomeMessage);

//play function
function play(question, answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer === answer){
    console.log("Right");
    score++;
  } else{
    console.log("Wrong");
  }
  console.log("Current score: " + score);
  console.log("-------------------");
}
var questions= [{
question:"Where do I live? ",
answer: "Mumbai"
},
{
question:"Who is my favourite cricketer? ",
answer: "Sachin Tendulkar"
},
{
question:"Who is my favourite superhero? ",
answer: "Ironman"
}]

for (var i = 0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

console.log("YAY! You scored: "+ score);