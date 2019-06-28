const camera = document.getElementById("js--camera");
const scene = document.getElementById("js--scene");
const fadeoutPlane = document.getElementById("js--fadeout");

const snippet1 = document.getElementById("js--snippet1");
const snippet2 = document.getElementById("js--snippet2");
const snippet3 = document.getElementById("js--snippet3");
let goodSound = document.getElementById("js--good-sound");

const box1 = document.getElementById("js--box1");
const box2 = document.getElementById("js--box2");
const box3 = document.getElementById("js--box3");
const box4 = document.getElementById("js--box4");
const box5 = document.getElementById("js--box5");
const box6 = document.getElementById("js--box6");

const boxes = [box1, box2, box3, box4, box5, box6];

const colors = ["#e91e63", "#2196f3", "#4caf50"];

var totalCounter = 0;

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

window.onload = function() {
  setTimeout(function(){
    snippet1.components.sound.playSound();
  }, 7000);
};

pickUp = function(event) {
  if (document.getElementById("js--camera-box") != undefined) {
    return;
  }
  var color = event.target.getAttribute("color");
  setTimeout(function(){
    document.getElementById(event.target.getAttribute("id")).remove();
    camera.appendChild(makeBox("js--camera-box", color,"-0.2 0 -0.4", "0.075"));
    cameraBox = document.getElementById("js--camera-box").setAttribute("animation", "property: scale; from: 0 0 0; to: 1 1 1; dur: 1000; easing: easeOutElastic;")
    for (box of boxes) {
      box.setAttribute("class", "not-clickable")
    }
  }, 1300);
};

placeObject = function(event) {
  for (box of boxes) {
    box.setAttribute("class", "clickable")
  }

  if(event.target.getAttribute("color") != document.getElementById("js--camera-box").getAttribute("color")) {
    return;
  }

  if (totalCounter == 3) {
    setTimeout(function(){
      snippet2.components.sound.playSound();
    }, 400);
  } else if (totalCounter == 4) {
    setTimeout(function(){
      snippet3.components.sound.playSound();
    }, 400);
  };

  if(event.target.getAttribute("color") == colors[0]){
    if(counter1 == 0) {
      scene.appendChild(makeBox("1box1", document.getElementById("js--camera-box").getAttribute("color"),"-2 0.626 -6", "1"));
    }
    counter1++;
    totalCounter++;
  }
  else if(event.target.getAttribute("color") == colors[1]){
    if(counter2 == 0) {
      scene.appendChild(makeBox("2box1", document.getElementById("js--camera-box").getAttribute("color"),"0 0.626 -6", "1"));
    } else if(counter2 == 1) {
      scene.appendChild(makeBox("2box2", document.getElementById("js--camera-box").getAttribute("color"),"0 1.626 -6", "1"));
    }
    counter2++;
    totalCounter++;
  }
  else if(event.target.getAttribute("color") == colors[2]){
    if(counter3 == 0) {
      scene.appendChild(makeBox("3box1", document.getElementById("js--camera-box").getAttribute("color"),"2 0.626 -6", "1"));
    } else if(counter3 == 1) {
      scene.appendChild(makeBox("3box2", document.getElementById("js--camera-box").getAttribute("color"),"2 1.626 -6", "1"));
    } else if(counter3 == 2) {
      scene.appendChild(makeBox("3box3", document.getElementById("js--camera-box").getAttribute("color"),"2 2.626 -6", "1"));
    }
    counter3++;
    totalCounter++;
  }
  document.getElementById("js--camera-box").remove();

  if(counter1 == 1 && counter2 == 2 && counter3 == 3) {
    leaveChallenge();
  }
};

makeBox = function(id, color, position, space) {
  let box = document.createElement("a-box");

  box.setAttribute("id", id);
  box.setAttribute("color", color);
  box.setAttribute("position", position);
  box.setAttribute("width", space);
  box.setAttribute("height", space);
  box.setAttribute("depth", space);
  box.setAttribute("class", "clickable");
  box.setAttribute("onclick", "placeObject(event)")

  return box;
};

leaveChallenge = function() {
  fadeoutPlane.setAttribute("animation", "property: opacity; to: 1; dur: 3000; easing: easeInElastic");
  goodSound.components.sound.playSound();
  setTimeout(function(){
    location.replace("index.html");
  }, 3000);
}
