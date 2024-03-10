function rollDie(parent){
    rollConstitution = generateRandomNumberOf();
    rollStrength = generateRandomNumberOf();
    rollDexterity = generateRandomNumberOf();
    rollIntelligence = generateRandomNumberOf();
    rollWillpower = generateRandomNumberOf();
    rollCharisma = generateRandomNumberOf();
    rollTotal = rollConstitution + rollStrength + rollIntelligence + rollDexterity + rollWillpower + rollCharisma;
    console.log(rollTotal);
playerClassDiceRollObject.constitution = rollConstitution;
playerClassDiceRollObject.strength = rollStrength;
playerClassDiceRollObject.dexterity = rollDexterity;
playerClassDiceRollObject.intelligence = rollIntelligence;
playerClassDiceRollObject.willpower = rollWillpower;
playerClassDiceRollObject.charisma = rollCharisma;
playerClassDiceRollObject.total = rollTotal;
displayPlayerClass(wizard, parent);
}