// Yanxin Jiang
// Adapted from Daniel Shiffman

let greeting = "I'm always watching you.";
let generic1 = ", nice."
let generic2 = "... interesting.";
let generic3 = ". Good choice.";
let genericSayings = [generic1, generic2, generic3];


function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));
}

let genericNumber = getRandom(genericSayings.length);
let genericSaying = genericSayings[genericNumber];
let url;

console.log("random saying ", genericSaying);


function setup() {
  createCanvas(300, 180);
  background(50);
}

function draw() {
  textSize(20);
  fill(255);
  textAlign(CENTER);
  text(genericSaying, 150, 40);
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      url = tabs[0].url;
      console.log("url    ", url);
      text(url, 150, 80);
  });
}
