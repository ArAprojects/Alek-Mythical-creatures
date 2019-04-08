class Human{
  constructor(name){
    this.name = name
    this.encounterCounter = 0;
  }
  noticesOgre(){
    if (this.encounterCounter % 3 === 0 && this.encounterCounter > 0) {
      return true;
  }
    else if (this.encounterCounter % 3 != 0 || this.encounterCounter === 0) {
      return false;
    }
  }
}

module.exports = Human
