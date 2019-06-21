const camera = document.getElementById("js--camera");
const scene = document.getElementById("js--scene");

pickUp = function(event) {
  if (document.getElementById("js--camera-box") != undefined) {
    return;
  }
  var objModel = event.target.getAttribute("obj-model");
  document.getElementById(event.target.getAttribute("id")).remove();
  camera.appendChild(makeEntity(event.target.id, objModel,"-0.2 0 -0.4"));
};

makeEntity = function(id, model, position) {
  let entity = document.createElement("a-entity");

  entity.setAttribute("id", "js--camera-box");
  entity.setAttribute("obj-model", model);
  entity.setAttribute("position", position);

  id = id.substr(0, id.length - 1);

  if(id == "js--wheel") {
    entity.setAttribute("scale", "0.00025 0.00025 0.00025");
  } else if(id == "js--bolt") {
    entity.setAttribute("scale", "0.015 0.015 0.015");
  } else {
    return;
  }

  return entity;
}
