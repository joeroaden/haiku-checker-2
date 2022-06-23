export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  lineChecker() {

    if ((this.line1 === "") || (this.line2 === "") || (this.line3 === "")) {
      return "This is not a haiku";
    }

  }

  vowelChecker() {

  }
}

