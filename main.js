const camera = document.getElementById("js--camera");
const scene = document.getElementById("js--scene");

enterChallenge = function(event) {
  if (event.target.id == "js--bdam") {
    location.replace("bdam.html");
  } else if (event.target.id == "js--se") {
    location.replace("se.html");
  } else if (event.target.id == "js--iat") {
    location.replace("iat.html");
  } else if (event.target.id == "js--fict") {
    location.replace("fict.html");
  }
}
