class Familiar {
    constructor(name, type, imgPath, constitution, strength, intelligence, dexterity, charisma, willPower, defense, specialAbilityArray, speed,cost){
this.name = name;
this.sAa = specialAbilityArray
this.newImgPath = '';
this.level = 1;
this.health = constitution * 6;
this.mana = intelligence * 7
this.strength = strength;
this.defense = defense;
this.dexterity = dexterity;
this.constitution = constitution;
this.speed = speed;
this.charisma = charisma;
this.willpower = willPower;
this.magicPower = 0;
this.attackPower = 0;
this.mana = 0;
this.type = type;
this.intelligence = intelligence;
this.specialAbility1 = this.sAa[0].name;
this.specialAbility2 = this.sAa[1].name;
this.specialAbility3 = this.sAa[2].name;
this.specialAbility1Des = this.sAa[0].desc;
this.specialAbility2Des = this.sAa[1].desc;
this.specialAbility3Des = this.sAa[2].desc;
this.imgPath = imgPath;
this.class = type;
this.cost = cost;
console.log(this.specialAbility1)
    }
    generateHealth() {
        let healthCalculation = Math.round(parseFloat(this.constitution * 4.5));
        this.health = healthCalculation;
        this.healthCalculationCopy = healthCalculation;
    };
    generateMagicPower() {
        let magicPowerCalculation = Math.round(parseFloat((this.intelligence * 4) + (this.willpower * .7)))
        this.magicPower = magicPowerCalculation;
    }
    generateAttackPower() {
        let attackPowerCalculation = Math.round(parseFloat(this.strength * 2) * 1.3);
        this.attackPower = attackPowerCalculation;
    }
    generateMana(){
        let manaCalculation = Math.round(parseFloat((this.intelligence * 4) + (this.willpower * .3)));
        this.mana = manaCalculation;
        this.manaCalculationCopy = manaCalculation;
}
}