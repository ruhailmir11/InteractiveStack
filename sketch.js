const BOTTOM_X = -150;
const BOTTOM_Y = 205;
const SOURCE_X = 140;
const SOURCE_Y = 205;
const WIDTH = 240;
const HEIGHT = 50;

let m = 5;
let t = -5;
let s = false;
let ready = true;

const elements = ["APPLE", "ORANGE", "MANGO", "GRAPE", "PEAR", "GUAUA", "STRAWBERRY"];
let stack, nextNode, eIndex = 0;

function setup() {
  createCanvas(600, 600);
  stack = new Stack();
  nextNode = new Node( elements[eIndex] );
  nextNode.x = SOURCE_X;
  nextNode.y = SOURCE_Y;
}

function mousePressed() {
  push();
  const mX = mouseX - width / 2;
  const mY = mouseY - height / 2;
  
  if (
    mX > SOURCE_X - WIDTH / 2 &&
    mX < SOURCE_X - WIDTH / 2 + WIDTH &&
    mY > SOURCE_Y - HEIGHT / 2 &&
    SOURCE_Y - HEIGHT / 2 + HEIGHT
  ) {
    t = -10;
    s = true;
    ready = false;
    
    nextNode.data = elements[ eIndex + 1 ];
    stack.push( elements[ eIndex ] );
    eIndex += 1;
  }
  
  pop();
  
  stack.select();
}

function pieceWiseSquare(t) {
  if (t >= -5 && t <= 5) return 1;
  return 0;
}

function draw() {
  background(21);
  translate(width / 2, height / 2);
  
  stack.show();
  stack.showNodes();
  stack.update();
  
  if ( ready ){
    nextNode.show();
  }
  
  if ( overflow ){
    textSize(50);
    fill('red');
    text( "Overflow", 0, -230 );
  }
}
