// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// This just picks a random word from wordnik
// And shows it to the user each time a new tab is opened

// A random word


function setup(){
  // noCanvas();
  createCanvas(1000, 1000);
  background(255);
  let n = floor(random(3)) + 1;
  let img = createImg('pic/' + n + '.png');
  img.size(530,480);
  img.position(30,150);
  let words = ['apple', 'bird', 'cat', 'dog', 'eagle'];
  textSize(32);
  text(words[n], 10, 30);
  fill(0, 102, 153);

}
