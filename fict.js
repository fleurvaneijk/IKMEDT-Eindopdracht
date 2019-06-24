const fadeoutPlane = document.getElementById("js--fadeout");

window.onload = () => {
  var sceneEl = document.getElementById("js--scene");

  var hacker = document.createElement("a-image");
  hacker.setAttribute("src", "images/hacker.png");
  setPosition(hacker);
  hacker.setAttribute("look-at", "[camera]");
  hacker.setAttribute("height", "1");
  hacker.setAttribute("width", "1");
  hacker.setAttribute("class", "clickable");
  hacker.setAttribute("onclick", "leaveChallenge(event)");
  sceneEl.appendChild(hacker);
  // TODO: hacker clikckable onclick

  for(var i = 0 ; i < 100 ; i++) {

    var imageNr = Math.floor(Math.random() * 7) + 1;
    var path = "images/person_" + imageNr + ".png";

    var entityEl = document.createElement("a-image");
    entityEl.setAttribute("src", path);

    setPosition(entityEl);

    entityEl.setAttribute("look-at", "[camera]");
    entityEl.setAttribute("height", "1");
    entityEl.setAttribute("width", "1");

    sceneEl.appendChild(entityEl);
  };
};

setPosition = (entity) => {

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
    // entity.setAttribute("look-at", "[camera]");
    console.log("werkt dit?");
  }

  entity.setAttribute("position", {x: myX, y: myY, z: myZ});
};

leaveChallenge = function() {
  // fadeoutPlane.setAttribute("animation", "property: opacity; to: 1; dur: 2000;");
  // setTimeout(function(){
    location.replace("index.html");
  // }, 2000);
}
