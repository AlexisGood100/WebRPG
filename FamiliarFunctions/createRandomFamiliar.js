const randomNumber = (bound) =>{
    return Math.floor(Math.random() * bound);
}

class Skills { 
    constructor(name, damage, description){
        this.name = name;
        this.damage = damage;
        this.description = description;
    }
}

const skillSandStrike = new Skills('Sand Strike', 10, 'Swing your weapon and fling the sand from the ground at the enemy.');
const skillAdvancedSandStrike = new Skills('Advanced Sand Strike', 15, 'An improved version of the sand strike');
const skillsOverheadSandStrike = new Skills('Overhead Sand Strike', 25, 'Heave your sword behind your head and then swing it downward, bringing the ground with it.')
let familiarSandSkills = [skillSandStrike, skillAdvancedSandStrike, skillsOverheadSandStrike];//Im adding sand later
// we need to build all of the skills before we progress. 
const skillFireStrike = new Skills('Fire Strike', 'Embue your weapon in fire and strike enemy', 10)
const skillAdvancedFireStrike = new Skills('Advanced Fire Strike', 'Improved version of Fire Strike', 10)
const skillFireBlast = new Skills('Fire Blast', 'Summon a ball of fire to propel towards enemy.', 10)
let familiarFireSkills = [skillFireStrike, skillAdvancedFireStrike, skillFireBlast];
//Water
const skillWaterStrike = new Skills('Water Strike', 'Embue your weapon in Water and strike enemy', 10)
const skillAdvancedWaterStrike = new Skills('Advanced Water Strike', 'Improved version of Water Strike', 10)
const skillWaterBlast = new Skills('Water Blast', 'Summon a ball of fire to propel towards enemy.', 10)
let familiarWaterSkills = [skillWaterStrike, skillAdvancedWaterStrike, skillWaterBlast];
//Earth
const skillEarthStrike = new Skills('Earth Strike', 'Embue your weapon in Earth and strike enemy', 10)
const skillAdvancedEarthStrike = new Skills('Advanced Earth Strike', 'Improved version of Earth Strike', 10)
const skillEarthBlast = new Skills('Earth Blast', 'Summon a ball of Earth to propel towards enemy.', 10)
let familiarEarthSkills = [skillEarthStrike, skillAdvancedEarthStrike, skillEarthBlast];
//Air
const skillAirStrike = new Skills('Air Strike', 'Embue your weapon in Air and strike enemy', 10)
const skillAdvancedAirStrike = new Skills('Advanced Air Strike', 'Improved version of Air Strike', 10)
const skillAirBlast = new Skills('Air Blast', 'Summon a ball of Air to propel towards enemy.', 10)
let familiarAirSkills = [skillAirStrike, skillAdvancedAirStrike, skillAirBlast];
//Dark
const skillLightStrike = new Skills('Light Strike', 'Embue your weapon in fire and strike enemy', 10)
const skillAdvancedLightStrike = new Skills('Advanced Light Strike', 'Improved version of Light Strike', 10)
const skillLightBlast = new Skills('Light Blast', 'Summon a ball of fire to propel towards enemy.', 10)
let familiarLightSkills = [skillLightStrike, skillAdvancedLightStrike, skillLightBlast];
//Light
const skillDarkStrike = new Skills('Dark Strike', 'Embue your weapon in Dark and strike enemy', 10)
const skillAdvancedDarkStrike = new Skills('Advanced Dark Strike', 'Improved version of Dark Strike', 10)
const skillDarkBlast = new Skills('Dark Blast', 'Summon a ball of Dark to propel towards enemy.', 10)
let familiarDarkSkills = [skillDarkStrike, skillAdvancedDarkStrike, skillDarkBlast];



console.log(skillAdvancedSandStrike);
console.log(skillSandStrike);
console.log(skillsOverheadSandStrike);

//I want the name array to be outside. It will be global.






const createRandomFamiliar = ( difficulty)=>{
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

    let skillArray = [];//I am not sure why it isnt working. I think this is probably a bad practice anywhere.
    //Going to try another approach. Its hitting the : , which is the else part. The code after ? is for if the value is true in the first part of the ternary operator
    
  
console.log(typeArrayRandom)




typeArrayRandom === 'Water' ? skillArray = familiarWaterSkills : console.log('1')
console.log(familiarWaterSkills)



typeArrayRandom === 'Fire' ? skillArray = familiarFireSkills : console.log('')
typeArrayRandom === 'Lightening' ? skillArray = familiarLightSkills : console.log('')
typeArrayRandom === 'Air' ? skillArray = familiarSandSkills : console.log('')
typeArrayRandom === 'Dark' ? skillArray = familiarSandSkills : console.log('')
typeArrayRandom === 'Light' ? skillArray = familiarSandSkills : console.log('')

//I want the description of the skills to be based on the type of familiar. The element will match the array  
console.log(skillArray)


    let randomFamiliar = new Familiar(familiarNameArray[nameCalc], typeArrayRandom,  constitution, strength, intelligence, dexterity, charisma, willpower,defense, speed, 10, skillArray[0].name, skillArray[1], skillArray[2], skillArray[0],  skillArray[1],  skillArray[2], cost)
    
    console.log(randomFamiliar)
    randomFamiliar.generateAttackPower()
    randomFamiliar.generateMagicPower()
    randomFamiliar.generateHealth()
    randomFamiliar.generateMana()
    return randomFamiliar;
}