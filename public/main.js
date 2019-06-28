const bdamButton = document.getElementById("js--bdam-button");
const fictButton = document.getElementById("js--fict-button");
let welcomeSound = document.getElementById("js--welcome-sound");
let challengeSound = document.getElementById("js--challenge-sound");

window.onload = function() {
  setTimeout(function(){
    welcomeSound.components.sound.playSound();
  }, 6000);
  setTimeout(function(){
    challengeSound.components.sound.playSound();
  }, 11000);
};

enterChallenge = function(event) {
  if (event.target.id == "js--bdam") {
    location.replace("bdam-info.html");
  }
  // else if (event.target.id == "js--se") {
  //   location.replace("se.html");
  // }
  // else if (event.target.id == "js--iat") {
  //   location.replace("iat.html");
  // }
  else if (event.target.id == "js--fict") {
    location.replace("fict-info.html");
  }
};

goToChallenge = function(event) {
  console.log(event.target.id);
  if(event.target.id == "js--bdam-button") {
    console.log("bdam");
    bdamButton.setAttribute("animation", "property: position; from: 0 0.5 -4; to: 0 0.5 -4.5; dur: 400;");
    document.getElementById("js--bdam-start").setAttribute("animation", "property: position; from: 0 0.5 -3.9; to: 0 0.5 -4.4; dur: 400;");
    setTimeout(function(){
      location.replace("bdam.html");
    }, 400);
  } else if(event.target.id == "js--fict-button") {
    console.log("fict");
    fictButton.setAttribute("animation", "property: position; from: 0 0.5 -4; to: 0 0.5 -4.5; dur: 400;");
    document.getElementById("js--fict-start").setAttribute("animation", "property: position; from: 0 0.5 -3.9; to: 0 0.5 -4.4; dur: 400;");
    setTimeout(function(){
      location.replace("fict.html");
    }, 400);
  }

}
