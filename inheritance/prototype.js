var father = function() {
  this.age = 52;
  this.job = 'IT';
}
var fatherProto = function() {
  this.say = function() {
    console.log('this is father side.');
  }
}

father.prototype = new fatherProto();

var gender = function() {
  this.gender = 'Male';
  this.education = 'bachelor';
}

var genderProto = function() {
  this.look = function() {
    console.log('look around!');
  }
}

gender.prototype = new genderProto();
