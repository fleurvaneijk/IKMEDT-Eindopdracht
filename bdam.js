const camera = document.getElementById("js--camera");
const scene = document.getElementById("js--scene");

const colors = ["red", "green", "blue"];

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

pickUp = function(event) {
  if (document.getElementById("js--camera-box") != undefined) {
    return;
  }
  var color = event.target.getAttribute("color");
  document.getElementById(event.target.getAttribute("id")).remove();
  camera.appendChild(makeBox("js--camera-box", color,"-0.2 0 -0.4", "0.075"));
};

placeObject = function(event) {
  var planePosition = event.target.getAttribute("position");
  console.log("planePosition: " + planePosition);

  if(event.target.getAttribute("color") != document.getElementById("js--camera-box").getAttribute("color")) {
    return;
  }

  if(event.target.getAttribute("color") == colors[0]){
    if(counter1 == 0) {
      scene.appendChild(makeBox("1box1", document.getElementById("js--camera-box").getAttribute("color"),"-2 0.626 -6", "1"));
    }
    counter1++;
  }
  else if(event.target.getAttribute("color") == colors[1]){
    if(counter2 == 0) {
      scene.appendChild(makeBox("2box1", document.getElementById("js--camera-box").getAttribute("color"),"0 0.626 -6", "1"));
    } else if(counter2 == 1) {
      scene.appendChild(makeBox("2box2", document.getElementById("js--camera-box").getAttribute("color"),"0 1.626 -6", "1"));
    }
    counter2++;
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
  }
  document.getElementById("js--camera-box").remove();

  leaveChallenge()
};

makeBox = function(id, color, position, space) {
  let box = document.createElement("a-box");

  box.setAttribute("id", id);
  box.setAttribute("color", color);
  box.setAttribute("position", position);
  box.setAttribute("width", space);
  box.setAttribute("height", space);
  box.setAttribute("depth", space);
  box.setAttribute("onclick", "placeObject(event)")

  return box;
};

leaveChallenge = function(event) {
  if(counter1 == 1 && counter2 == 2 && counter3 == 3) {
    location.replace("index.html");
  }
};
