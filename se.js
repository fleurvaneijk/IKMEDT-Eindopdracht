var scene = document.getElementById("js--scene")

var question = document.getElementById("js--text-question");
var answer1 = document.getElementById("js--text-answer1");
var answer2 = document.getElementById("js--text-answer2");
var answer3 = document.getElementById("js--text-answer3");
var answer4 = document.getElementById("js--text-answer4");

var questions = [];

var currentQuestion = 0;

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
  ["Python", false],
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
  for(var i = 1 ; i < 5 ; i++) {
       if(questions[currentQuestion][i][1] == false){
         scene.setAttribute("color", "red")
       } else {
         scene.setAttribute("color", "green")
       }
     }

     leaveChallenge()
     nextQuestion()
}

nextQuestion = function(event) {
  currentQuestion++;
  question.setAttribute("text", "value:" + questions[currentQuestion][0]);
  answer1.setAttribute("text", "value:" + questions[currentQuestion][1][0]);
  answer2.setAttribute("text", "value:" + questions[currentQuestion][2][0]);
  answer3.setAttribute("text", "value:" + questions[currentQuestion][3][0]);
  answer4.setAttribute("text", "value:" + questions[currentQuestion][4][0]);
}

leaveChallenge = function(event) {
  if(currentQuestion == 4) {
    location.replace("index.html");
  }
};
