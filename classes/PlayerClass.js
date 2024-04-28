class PlayerClass {
    constructor(constitution, dexterity, strength, charisma, willpower, intelligence, reward=null, imgPath=null) {
        this.constitution = constitution;
        this.dexterity = dexterity;
        this.strength = strength;
        this.charisma = charisma;
        this.willpower = willpower;
        this.intelligence = intelligence;
        this.magicPower = 0;
        this.health = 0;
        this.attackPower = 0;
        this.class = null;
        this.healthCalculationCopy = 0;
        this.gold = 0;
        this.defense = 0;
        this.imgPath =  imgPath;
        this.speed = 0;
        this.reward = reward;
        this.mana = 0;
        this.level = 1;
        this.playerPopulation = 0;
        this.healthPotions = 0;
        this.manaPotions = 0;
        this.originalImg = ''
       
    };
    generateHealth() {
        let healthCalculation = Math.round(parseFloat(this.constitution * 4.5));
        this.health = healthCalculation;
        this.healthCalculationCopy = healthCalculation;
    };
    generateMagicPower() {
        let magicPowerCalculation = Math.round(parseFloat((this.intelligence * 1.5) + (this.willpower * .7)))
        this.magicPower = magicPowerCalculation;
    }
    generateAttackPower() {
        let attackPowerCalculation = Math.round(parseFloat(this.strength * 2) * 1.3);
        this.attackPower = attackPowerCalculation;
    }
    generateMana(){
        let manaCalculation = Math.round(parseFloat((this.intelligence * 2) + (this.willpower * .3)));
        this.mana = manaCalculation;
        this.manaCalculationCopy = manaCalculation;
}
levelUp(){
    this.level += 1;
        this.constitution += .5;
        this.dexterity += .5;
        this.strength += .5;
        this.charisma += .5;
        this.willpower += .5;
        this.intelligence += .5;
        this.generateMana();
        this.generateAttackPower();
        this.generateHealth();
        this.generateMagicPower();
}
addGold(amount){
    this.gold += amount;
}
};

