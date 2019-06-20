var scene = document.getElementById("js--scene");
var light = document.getElementById("js--light");

var question = document.getElementById("js--text-question");
var answer1 = document.getElementById("js--text-answer1");
var answer2 = document.getElementById("js--text-answer2");
var answer3 = document.getElementById("js--text-answer3");
var answer4 = document.getElementById("js--text-answer4");

var questions = [];
var currentQuestion = 0;
var score = 0;

this.questions[0] = ["Wat is programmeren?",
  ["De computer vertellen wat te doen door middel van een speciale set aan instructies", true],
  ["Optimaal gebruik maken van je CPU-snelheid", false],
  ["Er voor zorgen dat je computer nooit meer vastloopt", false],
  ["Een alarm instellen op specifieke taken van je computer", false]];
this.questions[1] = ["Welke van de onderstaanden lijkt het meest op een computer programma?",
  ["Notitieboek", false],
  ["Encyclopedie", false],
  ["Blauwprint", true],
  ["Woordenboek", false]];
this.questions[2] = ["Welke van de onderstaanden is geen programmeertaal",
  ["Python", false],
  ["Java", false],
  ["HTML", true],
  ["C++", false]];
this.questions[3] = ["Wat zegt je computer na het schrijven van je eerste programma?",
  ["10101010", false],
  ["I'm alive!", false],
  ["Greetings, human", false],
  ["Hello World!", true]];
this.questions[4] = ["Waar wordt een convolutional neural network voor gebruikt",
  ["Om pratronen te herkennen", true],
  ["Om online video game servers te hosten", false],
  ["Voor het verbinden van neural pathways in je brein", false],
  ["Om convoluted algoritmes creëren", false]];

this.question.setAttribute("text", "value:" + questions[currentQuestion][0]);
this.answer1.setAttribute("text", "value:" + questions[currentQuestion][1][0]);
this.answer2.setAttribute("text", "value:" + questions[currentQuestion][2][0]);
this.answer3.setAttribute("text", "value:" + questions[currentQuestion][3][0]);
this.answer4.setAttribute("text", "value:" + questions[currentQuestion][4][0]);

selectAnswer = function(event) {
  const id = event.target.id.substr(event.target.id.length - 1);
  for(var i = 1 ; i < 5 ; i++) {
    if(this.questions[currentQuestion][id][1] == true){
      this.light.setAttribute("color", "green");
      this.score = this.score + 1;
    } else {
      this.light.setAttribute("color", "red");
    }
  }
  setTimeout(function(){
    if(currentQuestion == 4) {
      scoreBoard();
    }
    nextQuestion();
    light.setAttribute("color", "white");
  }, 1000);
};

nextQuestion = function(event) {
  currentQuestion++;
  this.question.setAttribute("text", "value:" + this.questions[currentQuestion][0]);
  this.answer1.setAttribute("text", "value:" + this.questions[currentQuestion][1][0]);
  this.answer2.setAttribute("text", "value:" + this.questions[currentQuestion][2][0]);
  this.answer3.setAttribute("text", "value:" + this.questions[currentQuestion][3][0]);
  this.answer4.setAttribute("text", "value:" + this.questions[currentQuestion][4][0]);
};

scoreBoard = function() {
  this.answer1.setAttribute("text", "value:");
  this.answer2.setAttribute("text", "value:");
  this.answer3.setAttribute("text", "value:");
  this.answer4.setAttribute("text", "value:");

  if(this.score >= 3){
    this.question.setAttribute("text", "value: Je bent geslaagd! Je had " + score + " van de 5 vragen goed.");
  } else {
    this.question.setAttribute("text", "value: Je bent gezakt Je had " + score + " van de 5 vragen goed. Probeer het nog een keer.");
  }
  setTimeout(function(){
    leaveChallenge();
  }, 3000);
};

leaveChallenge = function() {
  location.replace("index.html");
};
