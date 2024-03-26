
const randomNumber = (bound) =>{
    return Math.floor(Math.random() * bound);
}


function createRandomFamiliar(name, imgArray, difficulty){
    let nameArray = ['Godble', 'Jackson', 'JapBat', 'Squiggles']
    let nameCalc = Math.floor(Math.random()*3) + 1
    let constitution = 0;
    let dexterity = 0;
    let strength = 0;
    let charisma = 0;
    let willpower = 0;
    let intelligence = 0;
    let speed = 0;
    let defense = 0;
    let specialAttackArrayIndex = Math.floor(Math.random() * 4) + 1;
    let specialAttackArray1 = ['Slash', 'Sandstrike', 'Magic Bolt', 'Dragon Breath', 'Firestorm']
    let specialAttackArray2 = ['Slash', 'Sandstrike', 'Magic Bolt', 'Dragon Breath', 'Firestorm']
    let specialAttackArray3 = ['Slash', 'Sandstrike', 'Magic Bolt', 'Dragon Breath', 'Firestorm']
    let specialAbility1Des = specialAttackArray1[specialAttackArrayIndex]
    let specialAbility2Des = specialAttackArray2[specialAttackArrayIndex]
    let specialAbility3Des = specialAttackArray3[specialAttackArrayIndex]
    constitution += parseFloat(Math.floor(Math.random() * (randomNumber(20) +10)* difficulty));
    dexterity += (Math.floor(Math.random() * randomNumber(20)+ 10) * difficulty);
    strength += (Math.floor(Math.random() * randomNumber(20)+ 10) * difficulty);
    charisma += (Math.floor(Math.random() * randomNumber(20)+ 10));
    willpower += (Math.floor(Math.random() * randomNumber(20)+ 10));
    intelligence += (Math.floor(Math.random() * randomNumber(20)+ 10));
     defense += (Math.floor(Math.random() * randomNumber(20)+ 10));
    let cost = (Math.floor(Math.random() * randomNumber(4)) + 1);
     
     let typeArray = ['Water', 'Fire', 'Earth', 'Air', 'Light', 'Dark'];
     let typeArrayRandom = typeArray[Math.round(Math.random() * 5)]
     
    let imgIndex = Math.floor(Math.random() * 20) + 1;
    let randomFamiliar = new Familiar(nameArray[nameCalc], typeArrayRandom, imgArray[imgIndex], constitution, strength, intelligence, dexterity, charisma, willpower,defense, speed, null, null, null, specialAbility1Des, specialAbility2Des, specialAbility3Des, cost)
    randomFamiliar.generateAttackPower()
    randomFamiliar.generateMagicPower()
    randomFamiliar.generateHealth()
    randomFamiliar.generateMana()
    return randomFamiliar;
}