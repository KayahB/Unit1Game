const nextButton = document.querySelector(".next-button");
//svg mazes
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
//user messages
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
//End Game
const spookyPicture = document.querySelector(".spooky-picture");
const twinkleSound = document.querySelector(".scream-sound");
const failSound = document.querySelector(".fail-sound");

const collisionCheck = (value) => {
  if (value === "maze-border") {
      alert("Oh no! Perhaps your hand slipped? Try again :)");
      failSound.play();
    }
  if (value === "finish") {
    nextButton.style.opacity = 1;
    nextButton.style.pointerEvents = "all";
    levelOne.style.pointerEvents = "none";
  }
  if (value === "end-game") {
    twinkleSound.play();
    alert("HOORAY!!! You've found a key!!!!:)")
    spookyPicture.style.display = "block";
    document.body.style.background = "black";
  }
};

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});

nextButton.addEventListener("click", () => {
  levelOne.style.display = "none";
  levelTwo.style.display = "block";
  nextButton.style.opacity = 0;
  nextButton.style.pointerEvents = "none";
  uiLevel.textContent = "Level 2";
  uiMessage.textContent = "One more to go...";
});