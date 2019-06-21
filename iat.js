const camera = document.getElementById("js--camera");
const scene = document.getElementById("js--scene");

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

makeEntity = function(id, model, position, scale) {
  let entity = document.createElement("a-entity");

  entity.setAttribute("id", id);
  entity.setAttribute("obj-model", model);
  entity.setAttribute("position", position);
  entity.setAttribute("scale", scale);

  return entity;
}

placeObject = function(event) {
  buildCar();
  const cameraObject = camera.getChildren()[1];
  const id = cameraObject.getAttribute("id");
  var position;

  if(id == "js--wheel") {
    scale = "0.0025 0.0025 0.0025";
    if(wheelCounter == 0) {
      position = "0 1 -8"
    } else if(wheelCounter == 1) {
      position = "0 2 -8"
    } else if(wheelCounter == 2) {
      position = "0 3 -8"
    } else if(wheelCounter == 3) {
      position = "0 4 -8"
    }
    scene.appendChild(makeEntity("wheel" + wheelCounter, cameraObject.getAttribute("obj-model"), position, scale));
    wheelCounter++;
  }
  else if(id == "js--bolt") {
    scale = "0.15 0.15 0.15";
    if(boltCounter == 0) {
      position = "-1 1 -8"
    } else if(boltCounter == 1) {
      position = "-1 2 -8"
    } else if(boltCounter == 2) {
      position = "-1 3 -8"
    }
    scene.appendChild(makeEntity("bolt" + boltCounter, cameraObject.getAttribute("obj-model"), position, scale));
    boltCounter++;
  } else {
    return;
  }

  camera.removeChild(cameraObject);

  if(wheelCounter == 4 && boltCounter == 3) {
    buildCar();
  }
};

buildCar = function() {
  
}
