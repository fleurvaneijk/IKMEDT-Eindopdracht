const camera = document.getElementById("js--camera");
const scene = document.getElementById("js--scene");

enterChallenge = (event) => {
  if (event.target.id == 'js--bdam') {
    location.replace('bdam.html');
  } else if (event.target.id == 'js--se') {
    location.replace('se.html');
  } else if (event.target.id == 'js--iat') {
    location.replace('iat.html');
  } else if (event.target.id == 'js--fict') {
    location.replace('fict.html');
  }
}


// pickUp = (event) => {
//   let color = event.target.getAttribute("color");
//   camera.appendChild(makeBox(color,"-0.1 0 -0.3", "0.1"))
// }
//
// placeObject = (event) => {
//   scene.appendChild(makeBox(
//       document.getElementById("js--camera-box").getAttribute("color"),
//       "3 0.25 0", "0.5"
//     )
//   )
// }
//
//
// makeBox = (color, position, space) => {
//
//   if(document.getElementById("js--camera-box")) {
//     document.getElementById("js--camera-box").remove();
//   }
//
//   let box = document.createElement("a-box");
//   box.setAttribute("id", "js--camera-box");
//   box.setAttribute("color", color);
//   box.setAttribute("position", position);
//   box.setAttribute("width", space);
//   box.setAttribute("height", space);
//   box.setAttribute("depth", space);
//   return box;
// }
