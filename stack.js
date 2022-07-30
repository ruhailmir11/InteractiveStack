let currentAnimNode = null;
let overflow = false;
let mode = "";

class Stack {
  constructor() {
    this.xptr = BOTTOM_X;
    this.yptr = BOTTOM_Y;
    this.head = null;
    this.max = 6;
    this.capIndex = 0;
  }
  
  update() {
    if (currentAnimNode != null && s) {
      if (this.capIndex >= this.max && mode == 'PUSH') {
        overflow = true;
        eIndex = this.max;
        return;
      }
      
      // Show ...
      currentAnimNode.show();

      if (t >= m) {
        // DONE ANIMATING, INSERT !
        if (mode == "PUSH") {
          currentAnimNode.x = this.xptr;
          currentAnimNode.y = this.yptr;

          if (this.head == null) {
            this.head = currentAnimNode;
          } else {
            currentAnimNode.next = this.head;
            this.head = currentAnimNode;
          }

          this.capIndex += 1;          
          this.yptr -= HEIGHT + 2;
          
          //
        } else {
          // POP + CORN 🤣🤣🤣...
          nextNode = currentAnimNode;
          this.head = this.head.next;
          this.yptr += HEIGHT + 2;
          eIndex -= 1;
          this.capIndex -= 1;
          ready = true;
          s = false;
          currentAnimNode = null;
        }
        
        // RESET POINTERS ...
        s = false;
        ready = true;
        currentAnimNode = null;
        // END ...
      } else {
        t += 0.1;
      }

      let ax;
      if (mode == "PUSH") {
        ax = map(t, 10, -10, -width / 2, width / 2);
      } else {
        ax = map(t, -10, 10, -width / 2, width / 2);
      }
      
      let ay = map(
        pieceWiseSquare(t),
        0,
        1,
        height / 2 - 100,
        -height / 2 + 50
      );
      
      if (currentAnimNode) {
        currentAnimNode.x = ax;
        currentAnimNode.y = ay;
      }
    }
  }
  
  pop( node ) {
    currentAnimNode = node;
    overflow = false;
    
    mode = "POP";
    if ( ready ){
      t = -10;
      s = true;
      ready = false;
    }
  }
  
  push(data) {
    const n = new Node(data);
    n.x = SOURCE_X;
    n.y = SOURCE_Y;

    currentAnimNode = n;
    mode = "PUSH";
    s = true;
  }
  
  select() {
    let tmp = this.head;
    let sel = null;
    while (tmp != null) {
      const mX = mouseX - width / 2;
      const mY = mouseY - height / 2;

      if (
        mX > tmp.x - WIDTH / 2 &&
        mX < tmp.x - WIDTH / 2 + WIDTH &&
        mY > tmp.y - HEIGHT / 2 &&
        tmp.y - HEIGHT / 2 + HEIGHT
      ) {
        sel = tmp;
      }

      tmp = tmp.next;
    }

    if (sel != null && sel == this.head) {
      this.pop(sel);
    }
  }

  showNodes() {
    let tmp = this.head;
    while (tmp != null) {
      tmp.show( tmp == this.head );
      tmp = tmp.next;
    }
  }

  show() {
    stroke(255);
    noFill();
    strokeWeight(10);
    rectMode(CENTER);
    rect(-150, 50, 250, 370);
    stroke(21);
    strokeWeight(11);
    line(-280, -135, -10, -135);
  }
}
