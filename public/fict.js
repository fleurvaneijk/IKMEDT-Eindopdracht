const fadeoutPlane = document.getElementById("js--fadeout");
let lightSwitch = document.getElementById("js--light-switch");
let goodSound = document.getElementById("js--good-sound");
const flashlight = document.getElementById("js--flashlight");
const flashcursor = document.getElementById("js--flashcursor");
const scene = document.getElementById("js--scene");

const snippet1 = document.getElementById("js--snippet1");
const snippet2 = document.getElementById("js--snippet2");
scene.addEventListener("loaded", function() {
  var hacker = document.createElement("a-image");
  hacker.setAttribute("src", "images/hacker.png");
  setPosition(hacker);
  hacker.setAttribute("look-at", "[camera]");
  hacker.setAttribute("height", "1");
  hacker.setAttribute("width", "1");
  hacker.setAttribute("class", "clickable");
  hacker.setAttribute("onclick", "leaveChallenge(event)");
  scene.appendChild(hacker);

  for(var i = 0 ; i < 100 ; i++) {

    var imageNr = Math.floor(Math.random() * 7) + 1;
    var path = "images/person_" + imageNr + ".png";

    var entityEl = document.createElement("a-image");
    entityEl.setAttribute("src", path);

    setPosition(entityEl);

    entityEl.setAttribute("look-at", "[camera]");
    entityEl.setAttribute("height", "1");
    entityEl.setAttribute("width", "1");

    scene.appendChild(entityEl);
  };
});

setPosition = function(entity) {

  var numX = Math.floor(Math.random()*10) + 1;
  numX *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  var myX = numX;

  var numY = Math.floor(Math.random()*7) + 1;
  numY *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  var myY = numY;

  var numZ = Math.floor(Math.random()*9);
  numZ *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  var myZ = numZ;

  if (myZ <= 3 && myZ >= -3) {
    entity.setAttribute("scale", "0.6 0.6 0.6");
  }

  entity.setAttribute("position", {x: myX, y: myY, z: myZ});
};

leaveChallenge = function() {
  goodSound.components.sound.playSound();
  setTimeout(function(){
    lightSwitch.components.sound.playSound();
    flashcursor.setAttribute("geometry", "primitive: ring; radiusInner: 0.001; radiusOuter: 2;");
    flashlight.setAttribute("light", "type: spot; angle: 0; distance: 100; decay: 1; penumbra: 0.5;");
  }, 2000);
  setTimeout(function(){
    location.replace("index.html");
  }, 3000);
}
