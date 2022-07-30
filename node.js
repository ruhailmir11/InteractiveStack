class Node {
  constructor( data ){
    this.data = data;
    this.next = null;
    this.x = 0;
    this.y = 0;
  }
  
  show( head ){
    fill(255, 0, 255);
    if( head ) fill( 255, 255, 0, 100 );
    noStroke();
    rect( this.x, this.y, WIDTH, HEIGHT );
    fill(255);
    textSize(25);
    textAlign(CENTER, CENTER);
    text( this.data, this.x, this.y );
  }
}
