class OrangeTree {
  constructor(age, height, fruits) {
    this.age = 0;
    this.height = 0;
    this.fruits = 0;
  }
  myTree() {
    console.log(
      `Mon arbre a ${this.age} an(s), il mesure ${this.height} mètre(s) et possède ${this.fruits} fruit(s).`
    );
  }
  oneYearPasses() {
    this.age += 1;
    this.height += 1;
    if (this.height > 10) {
      this.height = 10;
    }
    if (this.age >= 6 && this.age <= 9) {
      this.fruits = 100;
    }
    if (this.age >= 10 && this.age <= 13) {
      this.fruits = 200;
    }
    if (this.age >= 15) {
      this.fruits = 0;
    }
    console.log(
      `L'âge de mon arbre est maintenant de ${this.age} ans et mesure ${this.height} mètre(s).`
    );
  }
  pickAFruit() {
    if (this.fruits >= 1) {
      this.fruits -= 1;
    }
  }
  else() {
    console.log(`je ne prends pas de fruits`);
  }
}

module.exports = OrangeTree; // Export the class for testing
