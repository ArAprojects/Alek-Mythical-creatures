class Wizard{
  constructor(wizob){
    this.name = wizob.name;
    this.isRested = true;
    this.total = 0;
    if (wizob.bearded === undefined) {
      this.bearded = true;
    }
    else {
    this.bearded = false
    }
  }
  incantation(spells){
    return spells.toUpperCase()
  }
  cast(){
    this.total += 1;
    if (this.total >= 3) {
      this.isRested = false;
      return "I SHALL NOT CAST!"
    }
      return "MAGIC BULLET"
  }
}

module.exports = Wizard;
