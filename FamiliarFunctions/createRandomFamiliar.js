
const randomNumber = (bound) =>{
    return Math.floor(Math.random() * bound);
}


const createRandomFamiliar = ( difficulty)=>{
    let nameArray = ['Godble', 'Jackson', 'JapBat', 'Squiggles', 'Razha', 'Yabado', 'Bobo']
    let nameCalc = Math.floor(Math.random()*nameArray.length - 1) + 1
    let specialAttackArrayIndex = Math.floor(Math.random() * 4) + 1;
    let specialAttackArray1 = ['Slash', 'Sandstrike', 'Magic Bolt', 'Dragon Breath', 'Firestorm']
    let specialAttackArray2 = ['Slash', 'Sandstrike', 'Magic Bolt', 'Dragon Breath', 'Firestorm']
    let specialAttackArray3 = ['Slash', 'Sandstrike', 'Magic Bolt', 'Dragon Breath', 'Firestorm']
    let specialAbility1Des = specialAttackArray1[specialAttackArrayIndex]
    let specialAbility2Des = specialAttackArray2[specialAttackArrayIndex]
    let specialAbility3Des = specialAttackArray3[specialAttackArrayIndex]
    let startingStat = (Math.floor(Math.random() * randomNumber(20)+ 10) * difficulty)
    let constitution = startingStat;
    let dexterity = startingStat;
    let strength = startingStat;
    let charisma = startingStat;
    let willpower = startingStat;
    let intelligence = startingStat;
    let defense = startingStat;
    let speed =  startingStat;
    let cost = (Math.floor(Math.random() * randomNumber(4)) + 1);
     let typeArray = ['Water', 'Fire', 'Earth', 'Air', 'Light', 'Dark'];
     let typeArrayRandom = typeArray[Math.round(Math.random() * 5)]
    let randomFamiliar = new Familiar(nameArray[nameCalc], typeArrayRandom,  constitution, strength, intelligence, dexterity, charisma, willpower,defense, speed, null, null, null, specialAbility1Des, specialAbility2Des, specialAbility3Des, cost)
    randomFamiliar.generateAttackPower()
    randomFamiliar.generateMagicPower()
    randomFamiliar.generateHealth()
    randomFamiliar.generateMana()
    return randomFamiliar;
}