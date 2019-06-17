const camera = document.getElementById('js--camera');
const scene = document.getElementById('js--scene');

const colors = ['red', 'green', 'blue'];

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

pickUp = (event) => {
  let color = event.target.getAttribute("color");
  camera.appendChild(makeBox('js--camera-box', color,"-0.2 0 -0.4", "0.075"))
}

placeObject = (event) => {

  var planePosition = event.target.getAttribute('position');

  if(event.target.getAttribute('color') != document.getElementById("js--camera-box").getAttribute("color")) {
    return;
  }

  if(event.target.getAttribute('color') == colors[0]){
    counter1++;
  } else if(event.target.getAttribute('color') == colors[1]){
    counter2++;
  } else if(event.target.getAttribute('color') == colors[2]){
    counter3++;
  }

  console.log(counter1, counter2, counter3);

  scene.appendChild(makeBox("test", document.getElementById("js--camera-box").getAttribute("color"),planePosition, "0.5"));

  document.getElementById("js--camera-box").remove();
}


makeBox = (id, color, position, space) => {

  let box = document.createElement("a-box");
  box.setAttribute("id", id);
  box.setAttribute("color", color);
  box.setAttribute("position", position);
  box.setAttribute("width", space);
  box.setAttribute("height", space);
  box.setAttribute("depth", space);

  return box;
}
