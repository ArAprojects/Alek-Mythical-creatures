class Centaur{
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.total = 0;
  }
  shoot() {
    this.checkCranky();
    if (this.cranky === true) {
      return "NO!"
    } else {
      return 'Twang!!!';
    }
  }
  run(){
    this.checkCranky();
    return 'Clop clop clop clop!!!'
  }

  sleep(){
    if (this.standing === true)
      return "NO!"
  }

  checkCranky() {
  this.total += 1;
  if (this.total >= 3) {
    this.cranky = true;
  }
}

layDown(){
  this.standing = !this.standing
  this.layingDown = !this.layingDown
}

standUp(){
  this.standing = !this.standing
  this.layingDown = !this.layingDown
}


}

module.exports = Centaur;
