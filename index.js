var readLineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;
var userName = readLineSync.question(chalk.white.bgBlue.bold("What's your name? "));

var welcomeMessage = "Welcome " + userName + " to 'Do you know Amey?'";

console.log(chalk.white.bgBlue.bold(welcomeMessage));

//play function
function play(question, answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right");
    score++;
  } else{
    console.log("Wrong");
  }
  console.log("Current score: " + score);
  console.log(chalk.bold.blue("-------------------"));
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
  play(chalk.bold.redBright(questions[i].question), questions[i].answer);
}

console.log("YAY! You scored: "+ score);
