class Familiar {
    constructor(name, type, imgPath, constitution, strength, intelligence, dexterity, charisma, willPower, defense, speed, specialAbility1, specialAbility2, specialAbility3, specialAbility1Des, specialAbility2Des, specialAbility3Des, cost){
this.name = name;
this.newImgPath = '';
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
this.specialAbility1 = specialAbility1;
this.specialAbility2 = specialAbility2;
this.specialAbility3 = specialAbility3;
this.specialAbility1Des = specialAbility1Des;
this.specialAbility2Des = specialAbility2Des;
this.specialAbility3Des = specialAbility3Des;
this.imgPath = imgPath;
this.class = type;
this.cost = cost;

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