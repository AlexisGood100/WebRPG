let playerClassDiceRollObject = {
    constitution: 0,
    strength: 0,
    willpower: 0,
    charisma: 0,
    dexterity: 0,
    intelligence: 0,
    total: 0
}
function generateRandomNumberOf() {
    let x = Math.floor(Math.random() * 14) + 4
    console.log(x)
    return x;
}

let rollConstitution = 0;
let rollStrength = 0;
let rollDexterity = 0;
let rollIntelligence = 0;
let rollWillpower = 0;
let rollCharisma = 0;
let rollTotal = 0;



const buttonRoll = document.querySelector('.roll-die');
buttonRoll.addEventListener('click', () => {
    playerClassRollObject.innerHTML = '';
    rollDie(divPlayerStatistics)
    displayPlayerClassRollObject(playerClassDiceRollObject, playerClassRollObject)
})
const buttonRollAccept = document.querySelector('.roll-die-accept');
buttonRollAccept.addEventListener('click', () => {
    document.querySelector('body').classList.remove('over-flow')
    wizard.strength = playerClassDiceRollObject.strength;
    wizard.dexterity = playerClassDiceRollObject.dexterity;
    wizard.constitution = playerClassDiceRollObject.constitution;
    wizard.willpower = playerClassDiceRollObject.willpower;
    wizard.charisma = playerClassDiceRollObject.charisma;
    wizard.intelligence = playerClassDiceRollObject.intelligence;
    divBattleWindow.classList.remove('hide');
    displayPlayerClass(wizard, divPlayerStatistics);
    document.querySelector('.roll-die-container').remove();
    h1MenuItemsAll.forEach((item) => {
        item.classList.remove('hide');
    })
    divPlayerStatistics.classList.remove('hide');
    console.log(wizard);
});