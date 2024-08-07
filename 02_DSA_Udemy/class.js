/** This is just JavaScript Class Revision */

class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie("green");
let cookieTwo = new Cookie("blue");

const list = Map();
