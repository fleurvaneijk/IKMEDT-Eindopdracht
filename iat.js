const camera = document.getElementById("js--camera");
const scene = document.getElementById("js--scene");
const carParts = document.getElementById("js--car-parts");
const fadeoutPlane = document.getElementById("js--fadeout");

var wheelCounter = 0;
var boltCounter = 0;

pickUp = function(event) {
  if (document.getElementById("js--camera-box") != undefined) {
    return;
  }
  var objModel = event.target.getAttribute("obj-model");
  var scale;
  id = event.target.id.substr(0, event.target.id.length - 1);
  if(id == "js--wheel") {
    scale = "0.00025 0.00025 0.00025";
  } else if(id == "js--bolt") {
    scale = "0.015 0.015 0.015";
  } else {
    return;
  }
  document.getElementById(event.target.getAttribute("id")).remove();
  camera.appendChild(makeEntity(id, objModel,"-0.2 0 -0.4" , scale));
};

makeEntity = function(id, model, position, scale, rotation="0 0 0") {
  let entity = document.createElement("a-entity");

  entity.setAttribute("id", id);
  entity.setAttribute("obj-model", model);
  entity.setAttribute("position", position);
  entity.setAttribute("scale", scale);
  entity.setAttribute("rotation", rotation);

  return entity;
};

placeObject = function(event) {
  const cameraObject = camera.getChildren()[1];
  const id = cameraObject.getAttribute("id");
  var position;
  var rotation;

  if(id == "js--wheel") {
    scale = "0.0025 0.0025 0.0025";
    if(wheelCounter == 0) {
      position = "1 0.6 -9"
      rotation = "0 70 0"
    } else if(wheelCounter == 1) {
      position = "1.5 -0.8 -6"
      rotation = "0 120 0"
    } else if(wheelCounter == 2) {
      position = "0 0.6 -7"
      rotation = "0 90 0"
    } else if(wheelCounter == 3) {
      position = "-2 0.6 -8"
      rotation = "0 120 0"
    }
    carParts.appendChild(makeEntity("wheel" + wheelCounter, cameraObject.getAttribute("obj-model"), position, scale, rotation));
    wheelCounter++;
  }
  else if(id == "js--bolt") {
    scale = "0.15 0.15 0.15";
    if(boltCounter == 0) {
      position = "-1 0.7 -6";
      rotation = "0 40 75";
    } else if(boltCounter == 1) {
      position = "3 0.7 -8";
      rotation = "0 -75 -75";
    } else if(boltCounter == 2) {
      position = "0 0.1 -5";
      rotation = "0 0 -75";
    }
    carParts.appendChild(makeEntity("bolt" + boltCounter, cameraObject.getAttribute("obj-model"), position, scale, rotation));
    boltCounter++;
  } else {
    return;
  }

  camera.removeChild(cameraObject);

  if(wheelCounter == 4 && boltCounter == 3) {
    setTimeout(function(){
      buildCar();
    }, 1000);
  }
};

buildCar = function() {
  scene.removeChild(carParts);
  placeCar();
};

placeCar = function() {
  setRacetrack();
  let entity = document.createElement("a-entity");
  let sound = document.querySelector("[sound]");

  entity.setAttribute("id", "js--car");
  entity.setAttribute("obj-model", "obj: url(objects/car.obj); mtl: url(objects/car.mtl)");
  entity.setAttribute("position", "0 0 -7");
  entity.setAttribute("rotation", "0 -25 0");
  setTimeout(function(){
    entity.setAttribute("animation", "property: rotation; from: 0 -25 0; to: 0 180 0; dur: 2000; easing: linear;");
  }, 500);
  setTimeout(function(){
    sound.components.sound.playSound();
    entity.setAttribute("animation", "property: position; from: 0 0 -7; to: 0 0 -1000; dur: 10000; easing: easeInCubic;");
  }, 2500);
  scene.appendChild(entity);

  setTimeout(function(){
    // TODO: fade screen to black dur:2000
    let spotlight = document.createElement("a-enitity");
    spotlight.setAttribute("light", "type: spot");
    // spotlight.setAttribute("animation", "property: ")
  }, 2000);

  setTimeout(function(){
    leaveChallenge();
  }, 6000);
};

setRacetrack = function() {
  let road = document.createElement("a-plane");
  road.setAttribute("color", "black");
  road.setAttribute("position", "0 -0.9 0");
  road.setAttribute("width", "20");
  road.setAttribute("height", "10000");
  road.setAttribute("rotation", "-90 0 0");

  let line = document.createElement("a-plane");
  line.setAttribute("color", "yellow");
  line.setAttribute("position", "0 -0.8 0");
  line.setAttribute("width", "0.5");
  line.setAttribute("height", "10000");
  line.setAttribute("rotation", "-90 0 0");

  scene.appendChild(road);
  scene.appendChild(line);
}

leaveChallenge = function() {
  fadeoutPlane.setAttribute("animation", "property: opacity; to: 1; dur: 2000;");
  setTimeout(function(){
    location.replace("index.html");
  }, 2000);
}
