var buttons = document.querySelectorAll("button").length;
for (var i = 0; i < buttons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    // this.style.color = "white";
    var button = this.innerHTML;
    makeSound(button);
    press(button);

  });
}

var key = document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  press(event.key);
});
// var audio = new Audio("sounds\\crash.mp3");
// audio.play();


function makeSound(key) {

  switch (key) {
    case "w":
      var snare = new Audio("sounds\\snare.mp3");
      snare.play();
      break;

    case "a":
      var tom1 = new Audio("sounds\\tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds\\tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds\\tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio("sounds\\tom-4.mp3");
      tom4.play();
      break;

    case "k":
      var kick = new Audio("sounds\\kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds\\crash.mp3");
      crash.play();
      break;

    default:
      break;
  }

}


function press(currentKey) {

var active = document.querySelector("."+ currentKey) ;
active.classList.add("pressed");
  setTimeout(function() {
    active.classList.re move("pressed");
  },100);
}
