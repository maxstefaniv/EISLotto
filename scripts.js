const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// generating a random that is != from the previoous one
function random(oldRandom) {
  var newRandom;
  do {
    newRandom = Math.floor(Math.random() * 9);
  } while (newRandom === oldRandom);

  return newRandom;
}

function Clear() {
  const parToDelete = document.getElementById("glowwy-paragraph");
  if (parToDelete !== null) {
    parToDelete.remove();
  }
  const allImgs = document.querySelectorAll("img");
  allImgs.forEach((i) => i.classList.remove("winner"));
}

async function RollForPick() {
  const allImgs = document.querySelectorAll("img");
  /* removing the glowiparagraph */
  Clear();

  var lastRoll;
  var previousRandom = 0;

  var iterations = 10;
  while (iterations > 0) {
    // dropping any previous shine
    allImgs.forEach((i) => i.classList.remove("shine"));
    // getting new random
    var previousRandom = random(previousRandom);

    // adding a glow to the image through which we iterate
    lastRoll = allImgs[previousRandom];
    lastRoll.classList.add("shine");

    await delay(400);
    iterations--;
  }

  // action definig Winner:
  lastRoll.classList.remove("shine");
  lastRoll.classList.add("winner");

  // lets display the name of the winner
  const para = document.createElement("p");
  para.setAttribute("id", "glowwy-paragraph");
  const node = document.createTextNode("CONGRATULATIONS! To our winner.");
  para.appendChild(node);
  para.classList.add("winner-text");
  para.classList.add("glow");

  const element = document.getElementById("lotto-id");
  element.appendChild(para);
}
