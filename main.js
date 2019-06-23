let challengesComplete = [["bdam", false], ["se", false], ["iat", false], ["fict", false]];

window.onload = function() {
  console.log(challengesComplete);
}

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

completeChallenge = function(name) {
  for(challenge of challengesComplete) {
    if(challenge[0] == name) {
      challenge[1] = true;
    }
  }
}
