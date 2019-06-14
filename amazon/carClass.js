class car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }

  speedUp() {
    if (this.speed > 200) {
      console.log('this is danger alert');
    }
    this.speed += 30;
  }

  speedDown() {
    if (this.speed) {
      this.speed = this.speed < 50 ? 0 : this.speed - 50;
    }
  }
}
