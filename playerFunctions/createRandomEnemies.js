function createRandomEnemies(reward, difficulty, arrayMonsters, mapLevel) {
    let constitution = 0;
    let dexterity = 0;
    let strength = 0;
    let charisma = 0;
    let willpower = 0;
    let intelligence = 0;
    let defense = 0;
    if(mapLevel % 5 === 0){
        console.log('Boss')
    constitution += parseFloat((Math.floor(Math.random() * 40) * difficulty));
    dexterity += (Math.floor(Math.random() * 22) * difficulty);
    strength += (Math.floor(Math.random() * 13) * difficulty);
    charisma += (Math.floor(Math.random() * 22) * difficulty);
    willpower += (Math.floor(Math.random() * 22) * difficulty);
    intelligence += (Math.floor(Math.random() * 22) * difficulty);
     defense += (Math.floor(Math.random() * 22) * difficulty);
    let randomMonster = new PlayerClass(constitution, dexterity, strength, charisma, willpower, intelligence, reward);
    randomMonster.generateAttackPower();
    randomMonster.generateHealth();
    randomMonster.generateMagicPower();
    randomMonster.defense = defense;
    arrayMonsters.push(randomMonster);
    return randomMonster;
     } else {
        constitution += parseFloat((Math.floor(Math.random() * 10) + 15  * difficulty));
        dexterity += (Math.floor(Math.random() * 17) * difficulty);
        strength += (Math.floor(Math.random() * 9) * difficulty);
        charisma += (Math.floor(Math.random() * 17) * difficulty);
        willpower += (Math.floor(Math.random() * 17) * difficulty);
        intelligence += (Math.floor(Math.random() * 17) * difficulty);
         defense += (Math.floor(Math.random() * 17) * difficulty)
         let randomMonster = new PlayerClass(constitution, dexterity, strength, charisma, willpower, intelligence, reward);
         randomMonster.generateAttackPower();
         randomMonster.generateHealth();
         randomMonster.generateMagicPower();
         randomMonster.defense = defense;
         arrayMonsters.push(randomMonster);
         return randomMonster;
        }
}