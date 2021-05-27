var readLineSync = require("readline-sync");
const chalk = require('chalk');
const log = console.log;
var score = 0;
var higScorers = [
  {
    name: "Amey",
    points: 5
  },
  {
    name: "Sonal",
    points: 4
  }
                 ];
var userName = readLineSync.question(chalk.white.bgBlue.bold("What's your name? "));

var welcomeMessage = "Welcome " + userName + " to 'Do you know Amey?'";

log(chalk.white.bgBlue.bold(welcomeMessage));

//play function
function play(question, answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    log(chalk.bold.bgBlue.green("Right!"));
    score++;
  } else{
   log(chalk.bold.bgBlue.redBright("Wrong!"));
  }
  log(chalk.bold.bgBlue.white("Current score: " + score));
  log(chalk.bold.bgBlue.yellow("-+-+-+-+-+-+-+-+-+-"));
}
var questions= [
  {
    question:"Where does he live?\n",
    answer: "Mumbai"
  },
  {
    question:"Who is his favourite cricketer?\n",
    answer: "Sachin Tendulkar"
  },
  {
    question:"Who is his favourite superhero?\n",
    answer: "Ironman"
  },
  {
    question:"What is his favourite fast-food?\n",
    answer: "Samosa"
  },
  {
    question:"Name his favourite Indian share:\n",
    answer: "ITC"
  },
               ]

for (var i = 0; i<questions.length; i++){
  play(chalk.bold.redBright.bgBlue(questions[i].question), questions[i].answer);
}

log(chalk.bold.bgBlue("YAY! You scored: "+ score));

highScorers.push({
  name: userName,
  points: score
})

log("Current Leaderboard");
log("Name || Points")
log("_______________")
for(let i=0 ; i<highScorers.length; i++){
  log(highScorers[i].name+" "+highScorers[i].points)
}
log("_______________")
