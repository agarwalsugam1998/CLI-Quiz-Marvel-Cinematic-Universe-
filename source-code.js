
var chalk = require('chalk');
var required = require('readline-sync');

console.log(" ");


var score = 0;
var chart;
questionOne = {
  question: chalk.cyanBright("Q1: What Is the Name of Thor’s Axe? "),
  answer: "Storm Breaker"
}

ansOne = ['Storm Breaker', 'Wind Breaker', 'Thunder Breaker', 'Light Breaker'];

questionTwo = {
  question: chalk.cyanBright("Q2: Who is killed by Loki in the Avengers? "),
  answer: "Agent Phil Coulson"
}

ansTwo = ['Agent Phil Coulson', 'Gamora', 'Nick Fury', 'Rocket'];


questionThree = {
  question: chalk.cyanBright("Q3: What type of doctor is Stephen Strange? "),
  answer: "Neurosurgeon"
}

ansThree = ['Therapist', 'Physician', 'Neurosurgeon', 'Cardiologist'];



questionFour = {
  question: chalk.cyanBright("Q4: What is the name of the mysterious glowing blue cube which Loki uses as a weapon? "),
  answer: "Tesseract"
}

ansFour = ['Soul Stone', 'Tesseract', 'Time Stone', 'Gauntlet'];


questionFive = {
  question: chalk.cyanBright("Q5: What is the only Marvel film not to have a post-credit scene? "),
  answer: "End-Game"
}

ansFive = ['End-Game', 'Far From Home', 'Hulk 3', 'Civil War'];


questionSix = {
  question: chalk.cyanBright("Q6: What country are Scarlet Witch and Quicksilver from? "),
  answer: "Sokovia"
}

ansSix = ['Wakanda', 'Sokovia', 'Symeria', 'Brooklyn'];


questionSeven = {
  question: chalk.cyanBright("Q7: What's the name of the helpful AI Tony Stark invented to replace J.A.R.V.I.S.? "),
  answer: "FRIDAY"
}

ansSeven = ['FRIDAY', 'EDITH', 'ULTRON', 'SHEILD'];


questionEight = {
  question: chalk.cyanBright("Q8: Who is Hawkeye married to? "),
  answer: "Laura"
}

ansEight = ['Natasha', 'Laura', 'Buoye', 'Sherlyn'];


questionNine = {
  question: chalk.cyanBright("Q9: What kind of animal does Captain Marvel befriend? "),
  answer: "Cat"
}

ansNine = ['Squirrel', 'Goose', 'Cat', 'Dog'];



questionTen = {
  question: chalk.cyanBright("Q10: Which of these is NOT an infinity stone? "),
  answer: "Love"
}

ansTen = ['Love','Space','Time','Reality'];


function role(score)
{
  if(score==1)
  {
     console.log(chalk.bgRedBright.whiteBright.bold("You are Doctor Strange"));
  }
  if(score==2)
  {
    console.log(chalk.bgRedBright.whiteBright.bold("You are Vision"));
  }
  if(score==3)
  {
    console.log(chalk.bgRedBright.whiteBright.bold("You are Winter Soldier"));
  }
  if(score==4)
  {
    console.log(chalk.bgRedBright.whiteBright.bold("You are Natasha Romanoff"));
  }
  if(score==5)
  {
    console.log(chalk.bgRedBright.whiteBright.bold("You are Hawk Eye"));
  }
  if(score==6)
  {
    console.log(chalk.bgRedBright.whiteBright.bold("You are Black Panther"));
  }
  if(score==7)
  {
    console.log(chalk.bgRedBright.whiteBright.bold("You are Hulk"));
  }
  if(score==8)
  {
    console.log(chalk.bgRedBright.whiteBright.bold("You are Thor"));
  }
  if(score==9)
  {
    console.log(chalk.bgRedBright.whiteBright.bold("You are Captain America"));
  }
  if(score==10)
  {
    console.log(chalk.bgRedBright.whiteBright.bold("You are THE IRON MAN"));
  }
}


function play(ques,ans,options)
{
  console.log(ques);
  index = required.keyInSelect(options, 'Choose One ?');var userAns = options[index]; 
   
   if(userAns.toLowerCase() == ans.toLowerCase() )
 {
   console.log(chalk.greenBright("Correct"));
   console.log("Right Ans is " + ans);
   score = score + 1;
   console.log(chalk.yellowBright("Your current Score is ") + score);
   console.log("   ");
 }
 else
 {
    console.log(chalk.redBright("Incorrect"));
    console.log("Right Ans is " + ans);
    console.log(chalk.yellowBright("Your current Score is ") + score);
    console.log("   ");
 }


}

var gameQues = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
var gameAns = [ansOne,ansTwo,ansThree,ansFour,ansFive,ansSix,ansSeven,ansEight,ansNine,ansTen];

var l = gameAns.length;







console.log(chalk.blueBright.bold("*  WHICH AVENGER ARE YOU?  *"))
console.log(" ");
const log = console.log;
var name = required.question("Please Enter Your Name ? ");
console.log(" ");
console.log(">> Hey "+chalk.yellowBright.bold(name)+", Lets check how well do you know " +chalk.yellowBright("Marvel!"));
console.log(" ");
console.log(chalk.bold("WELCOME TO: "))
console.log(" ");
var Table = require('cli-table')
log(
  
  chalk.cyan.bold("********* ")+
  
  
  chalk.blue.bgWhiteBright.bold('MARVEL CINEMATIC UNIVERSE ')+
  
  chalk.cyan.bold(" ********* ")
  
  );
console.log(" ");
console.log(chalk.italic("Below is the score you should achieve to get your favourite character : "))

var table = new Table({head: [chalk.white('Characters'), chalk.white('Attainment')]});

table.push(
    { 'Iron Man': '10' }
  , { 'Captain America': '9'}
  , { 'Thor': '8'}
  , { 'Hulk': '7'}
  , { 'Black Panther': '6'}
  , { 'Hawk Eye': '5'}
  , { 'Natasha Romanoff': '4'}
  , { 'Winter Soldier': '3'}
  , { 'Vision': '2'}
  , { 'Doctor Strange': '1'}
  
);

console.log(table.toString());

console.log(" ");
boolYesOrEmpty = required.keyInYN(chalk.yellowBright("Are you ready ? "))
if(boolYesOrEmpty){
  
  console.log(chalk.italic("C'mon! All the Best"));

console.log(" ");

console.log(chalk.blueBright.bold("QUIZ LOADED "))
console.log(" ");
for (var i=0;i<l;i++)
{
  play(gameQues[i].question,gameQues[i].answer,gameAns[i]);
}

console.log(chalk.whiteBright("LOADING..."))

console.log(chalk.blackBright(chalk.blueBright.italic("YOUR FINAL SCORE IS ") + chalk.whiteBright(score)));
console.log(" ");
 role(score);



  }
  else{
    console.log("OKay Later.. ")
     process.exit();
  }








