// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        const chosenSoldierIndex = (soldierArray) => Math.floor(Math.random() * (soldierArray.length));

        const chosenSaxon = this.saxonArmy[chosenSoldierIndex(this.saxonArmy)];

        const chosenVikingStrength = this.vikingArmy[chosenSoldierIndex(this.vikingArmy)].strength;

        const attackResult = chosenSaxon.receiveDamage(chosenVikingStrength);
        
        if(chosenSaxon.health < chosenVikingStrength){
            this.saxonArmy.splice(chosenSoldierIndex, 1);
        } else {}
        
        return attackResult;
    }
    saxonAttack(){
        const chosenSoldierIndex = (soldierArray) => Math.floor(Math.random() * (soldierArray.length));

        const chosenViking = this.vikingArmy[chosenSoldierIndex(this.vikingArmy)];

        const chosenSaxonStrength = this.saxonArmy[chosenSoldierIndex(this.saxonArmy)].strength;

        const attackResult = chosenViking.receiveDamage(chosenSaxonStrength);
        
        if(chosenViking.health < chosenSaxonStrength){
            this.vikingArmy.splice(chosenSoldierIndex, 1);
        } else {}
        
        return attackResult;
    }
    showStatus(){
        if(this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}

const newWar = new War;

const saxon1 = new Saxon(100, 50);
const saxon2 = new Saxon(50, 25);
const viking1 = new Viking('John', 200, 50);
const viking2 = new Viking('Hele', 240, 30);
console.log(newWar);

newWar.addSaxon(saxon1);
newWar.addSaxon(saxon2);
newWar.addViking(viking1);
newWar.addViking(viking2);

console.log(newWar)

newWar.vikingAttack();
console.log(newWar);