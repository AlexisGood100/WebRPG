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
    constitution += parseFloat((Math.floor(Math.random() * 22) * difficulty));
    dexterity += (Math.floor(Math.random() * 22) * difficulty);
    strength += (Math.floor(Math.random() * 13) * difficulty);
    charisma += (Math.floor(Math.random() * 22) * difficulty);
    willpower += (Math.floor(Math.random() * 22) * difficulty);
    intelligence += (Math.floor(Math.random() * 22) * difficulty);
     defense += (Math.floor(Math.random() * 22) * difficulty);
    let imgIndex = Math.floor(Math.random() * 20) + 5;
    let randomMonster = new PlayerClass(constitution, dexterity, strength, charisma, willpower, intelligence, reward, allClassListForMonsterImages[imgIndex]);
    randomMonster.generateAttackPower();
    randomMonster.generateHealth();
    randomMonster.generateMagicPower();
    randomMonster.defense = defense;
    console.log(randomMonster);
    console.log(constitution, dexterity, strength, charisma, willpower, intelligence, reward);
    arrayMonsters.push(randomMonster);
    return randomMonster;
     } else {
        constitution += parseFloat((Math.floor(Math.random() * 17) * difficulty));
        dexterity += (Math.floor(Math.random() * 17) * difficulty);
        strength += (Math.floor(Math.random() * 9) * difficulty);
        charisma += (Math.floor(Math.random() * 17) * difficulty);
        willpower += (Math.floor(Math.random() * 17) * difficulty);
        intelligence += (Math.floor(Math.random() * 17) * difficulty);
         defense += (Math.floor(Math.random() * 17) * difficulty)
         let imgIndex = Math.floor(Math.random() * 20) + 5;
         let randomMonster = new PlayerClass(constitution, dexterity, strength, charisma, willpower, intelligence, reward, allClassListForMonsterImages[imgIndex]);
         randomMonster.generateAttackPower();
         randomMonster.generateHealth();
         randomMonster.generateMagicPower();
         randomMonster.defense = defense;
         console.log(randomMonster);
         console.log(constitution, dexterity, strength, charisma, willpower, intelligence, reward);
         arrayMonsters.push(randomMonster);
         return randomMonster;
        }
}