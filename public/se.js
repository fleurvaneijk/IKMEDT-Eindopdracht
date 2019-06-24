var scene = document.getElementById("js--scene");
var light = document.getElementById("js--light");
const fadeoutPlane = document.getElementById("js--fadeout");

var question = document.getElementById("js--text-question");
var answer1 = document.getElementById("js--text-answer1");
var answer2 = document.getElementById("js--text-answer2");
var answer3 = document.getElementById("js--text-answer3");
var answer4 = document.getElementById("js--text-answer4");

var questions = [];
var currentQuestion = 0;
var score = 0;

questions[0] = ["Wat is programmeren?",
  ["De computer vertellen wat te doen door middel van een speciale set aan instructies", true],
  ["Optimaal gebruik maken van je CPU-snelheid", false],
  ["Er voor zorgen dat je computer nooit meer vastloopt", false],
  ["Een alarm instellen op specifieke taken van je computer", false]];
questions[1] = ["Welke van de onderstaanden lijkt het meest op een computer programma?",
  ["Notitieboek", false],
  ["Encyclopedie", false],
  ["Blauwprint", true],
  ["Woordenboek", false]];
questions[2] = ["Welke van de onderstaanden is geen programmeertaal",
  ["PHP", false],
  ["Java", false],
  ["HTML", true],
  ["C++", false]];
questions[3] = ["Wat zegt je computer na het schrijven van je eerste programma?",
  ["10101010", false],
  ["I'm alive!", false],
  ["Greetings, human", false],
  ["Hello World!", true]];
questions[4] = ["Waar wordt een convolutional neural network voor gebruikt",
  ["Om pratronen te herkennen", true],
  ["Om online video game servers te hosten", false],
  ["Voor het verbinden van neural pathways in je brein", false],
  ["Om convoluted algoritmes creëren", false]];

question.setAttribute("text", "value:" + questions[currentQuestion][0]);
answer1.setAttribute("text", "value:" + questions[currentQuestion][1][0]);
answer2.setAttribute("text", "value:" + questions[currentQuestion][2][0]);
answer3.setAttribute("text", "value:" + questions[currentQuestion][3][0]);
answer4.setAttribute("text", "value:" + questions[currentQuestion][4][0]);

selectAnswer = function(event) {
  const id = event.target.id.substr(event.target.id.length - 1);
  let correct = false;
  for(var i = 1 ; i < 5 ; i++) {
    if(questions[currentQuestion][id][1] == true){
      correct = true;
    } else {
      correct = false;
    }
  }
  if(correct == true) {
    light.setAttribute("color", "green");
    score = score + 1;
  } else if(correct == false) {
    light.setAttribute("color", "red");
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
  question.setAttribute("text", "value:" + questions[currentQuestion][0]);
  answer1.setAttribute("text", "value:" + questions[currentQuestion][1][0]);
  answer2.setAttribute("text", "value:" + questions[currentQuestion][2][0]);
  answer3.setAttribute("text", "value:" + questions[currentQuestion][3][0]);
  answer4.setAttribute("text", "value:" + questions[currentQuestion][4][0]);
};

scoreBoard = function() {
  answer1.setAttribute("text", "value:");
  answer2.setAttribute("text", "value:");
  answer3.setAttribute("text", "value:");
  answer4.setAttribute("text", "value:");

  if(score >= 3){
    question.setAttribute("text", "value: Je bent geslaagd! Je had " + score + " van de 5 vragen goed.");
  } else {
    question.setAttribute("text", "value: Je bent gezakt. Je had " + score + " van de 5 vragen goed. Probeer het nog een keer.");
  }
  setTimeout(function(){
    leaveChallenge();
  }, 3000);
};

leaveChallenge = function() {
  fadeoutPlane.setAttribute("animation", "property: opacity; to: 1; dur: 2000;");
  setTimeout(function(){
    location.replace("index.html");
  }, 2000);
}
