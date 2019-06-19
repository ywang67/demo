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

function car(brand, model) {
	return {
    brand,
  	model,
  	speed: 0,
    set speedUp(val) {
  		if (this.speed > 210) {
  			console.log(`your speed too fast, it is ${this.speed} now!`);
  		}
  		this.speed += val;
  	},
    set speedDown(val) {
      if (this.speed < val) {
  			this.speed = 0;
  		} else {
  			this.speed -= val;
  		}
    },
    get showInfor() {
  			console.log(`this is ${brand} ${model}`);
  		}
  }
}
