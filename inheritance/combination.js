var father = function() {
  this.age = 52;
  this.name = 'father';
  fatherProto.call(this);
}

var fatherProto = function() {
  this.say =function() {
    console.log('hello i am '+ this.name +' and i am '+this.age + 'years old');
  };

  this.a = function() {
    console.log(123);
  };
}


var gender = function() {
  this.gender = 'male';
  this.education = 'bachelor';
  this.job = 'IT';
  genderProto.call(this);
}

var genderProto = function() {
  this.look = function() {
    console.log('Look around');
  }
}

var fatherGender = function() {
  father.call(this);
  gender.call(this);
}

var fatherGenderProto = function() {
  fatherProto.call(this);
  genderProto.call(this);
}

var child = function() {
  this.first = 'jone';
  fatherGender.call(this);
}

child.prototype = new fatherGenderProto();

var man = new child();
