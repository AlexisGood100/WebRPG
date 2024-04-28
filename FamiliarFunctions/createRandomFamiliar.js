const randomNumber = (bound) =>{
    return Math.floor(Math.random() * bound);
}

const createRandomFamiliar = (difficulty)=>{
    let nameCalc = Math.floor(Math.random()*familiarNameArray.length - 1) + 1 
    let startingStat = (Math.floor(Math.random() * randomNumber(40)+ 10) * difficulty)
    let constitution = startingStat;
    let dexterity = startingStat;
    let strength = startingStat;
    let charisma = startingStat;
    let willpower = startingStat;
    let intelligence = startingStat;
    let defense = startingStat;
    let speed =  startingStat;
    let cost = (Math.floor(Math.random() * randomNumber(4)) + 1);
    let typeArrayRandom = familiarTypeArray[Math.round(Math.random() * 5)]
    console.log(typeArrayRandom)
    let skillArray = [];//I am not sure why it isnt working. I think this is probably a bad practice anywhere.
    //Going to try another approach. Its hitting the : , which is the else part. The code after ? is for if the value is true in the first part of the ternary operator
    let randomFamiliar = null;
if(typeArrayRandom == 'Water'){
    skillArray = familiarWaterSkills
}
if(typeArrayRandom == 'Fire'){
    skillArray = familiarFireSkills     
}
if(typeArrayRandom == 'Air'){
    skillArray = familiarAirSkills           
}
if(typeArrayRandom == 'Earth'){
    skillArray = familiarEarthSkills
}
if(typeArrayRandom == 'Light'){
    skillArray = familiarLightSkills    
}
if(typeArrayRandom == 'Dark'){
    skillArray = familiarDarkSkills 
}
randomFamiliar = new Familiar(familiarNameArray[nameCalc], typeArrayRandom,null, constitution, strength, intelligence, dexterity, charisma, willpower, defense, skillArray, speed, cost)
    randomFamiliar.generateAttackPower()
    randomFamiliar.generateMagicPower()
    randomFamiliar.generateHealth()
    randomFamiliar.generateMana()
    return randomFamiliar;
}