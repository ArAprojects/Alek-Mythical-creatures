class Dragon{
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.total = 0;

  }
  eat(){
    this.total += 1
    if (this.total >= 3){
      this.hungry = false;
    }
  }

}

module.exports = Dragon
