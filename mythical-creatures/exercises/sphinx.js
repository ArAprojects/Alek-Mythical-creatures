class Sphinx {
  constructor(name) {
    this.name = name;
    this.riddles = []
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if (this.riddles.length > 3){
      this.riddles.shift()
    }
  }

  attemptAnswer(answer) {
    
  }
}

module.exports = Sphinx;
