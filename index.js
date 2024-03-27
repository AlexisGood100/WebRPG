
//Global Variables
const h1PlayerInfo = document.querySelectorAll('.h1-info');
const divPlayerStatistics = document.querySelector('.div-player-statistics');
const divEnemyStatistics = document.querySelector('.div-enemy-statistics');
const buttonBuffSpell = document.querySelectorAll('#buff-spell');
const buttonDamageSpell = document.querySelectorAll('#damage-spell');
const divBattleWindow = document.querySelector('.div-battle-window');

const divPlayerEquip = document.querySelector('.div-player-equip-area');
const DivFamiliarContainer = document.querySelector('.div-familiar-container-list');
const DivOwnedFamiliarContainer = document.querySelector('.div-familiar-container-list-owned');
//Creating the wizard and setting up the multiplier for the spell powers and durations
let wizard = new PlayerClass(10, 10, 10, 10, 10, 10);
wizard.gold = 100;
let currentPlayer = 0;
// player span for gold, health, and mana
let spanPlayerGold = document.querySelector('.span-player-gold');
let spanPlayerHealth = document.querySelector('.span-player-health');
let spanPlayerMana = document.querySelector('.span-player-mana');
document.querySelector('body').classList.add('over-flow');

// global arrays----------------------

//Setting up the familiar.
const randomNumberMaker = (bounds) =>{
return Math.floor(Math.random() * bounds);
}
const familiar3 = new Familiar('Friendy', 'Fire', 'familiar1', randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), null, null, null, 'Smack', 'Crack', 'Popple', 5);


let currentEnemy = familiar3;
let currentFamiliar = familiar3;
currentFamiliar.generateAttackPower();
currentFamiliar.generateHealth();
currentFamiliar.generateAttackPower();
currentFamiliar.generateMana();
//Player Choice array
let arrayPlayerChoices = [];

//End of player choice array

//Start of global merchant images
let arrayWeaponImages = ['/images/weapons/starterAxe3.jpg', '/images/weapons/starterAxe2.jpg', '/images/weapons/newAxe1.jpg', '/images/weapons/newAxe2.jpg', '/images/weapons/newAxe3.jpg',];
let arrayBootImages = ['/images/boots/newBoots1.jpg','/images/boots/newBoots2.jpg','/images/boots/newBoots3.jpg','/images/boots/newBoots4.jpg','/images/boots/newBoots5.jpg','/images/boots/newBoots6.jpg']
let arrayChestPlateImages = ['/images/chestPlate/newBreastPlate1.jpg','/images/chestPlate/newBreastPlate2.jpg','/images/chestPlate/newBreastPlate3.jpg','/images/chestPlate/newBreastPlate4.jpg',]
let arrayHatsImages = ['/images/hats/newHat1.jpg','/images/hats/newHat2.jpg','/images/hats/newHat3.jpg',];
let arrayLegsImages = ['/images/legs/newLegs1.jpg','/images/legs/newLegs2.jpg',];
let arrayNecklaceImages = ['/images/necklaces/newNecklace1.jpg','/images/necklaces/newNecklace2.jpg','/images/necklaces/newNecklace3.jpg','/images/necklaces/newNecklace4.jpg','/images/necklaces/newNecklace5.jpg','/images/necklaces/newNecklace6.jpg',]
let arrayRingImages = ['/images/rings/newRing1.jpg','/images/rings/newRing2.jpg','/images/rings/newRing3.jpg','/images/rings/newRing4.jpg','/images/rings/newRing5.jpg','/images/rings/newRing6.jpg','/images/rings/newRing7.jpg','/images/rings/newRing8.jpg',]
let arrayBeltImages = ['/images/belts/newBelt1.jpg','/images/belts/newBelt2.jpg','/images/belts/newBelt3.jpg','/images/belts/newBelt4.jpg',]
let arrayArmImages = ['/images/arms/newArms1.jpg','/images/arms/newArms2.jpg', '/images/arms/newArms3.jpg', '/images/arms/newArms4.jpg']

// end of global merchant images

// start of global enemy images array
const allClassListForMonsterImages =  ['enemy1', 'enemy2','enemy3','enemy4','enemy5','enemy6','enemy7','enemy8','enemy9','enemy10','enemy11','enemy12','enemy13','enemy14','enemy15','enemy16','enemy17','enemy18','enemy19','enemy20','enemy21','enemy22','enemy23','enemy24','enemy25'];
//End of global enemy images array

//Start of the familiar image arrays
let arrayFamiliarImages = ['familiar1', 'familiar2', 'familiar3', 'familiar4', 'familiar5', 'familiar6', 'familiar7', 'familiar8', 'familiar9', 'familiar10', 'familiar11', 'familiar12', 'familiar13', 'familiar14', 'familiar15', 'familiar16','familiar17','familiar18','familiar19', 'familiar20','familiar21',];
// End of the familiar image arrays

// end of global arrays--------------------

const map_level_html = document.querySelector('.h1-map-level')
map_level_html.innerText = 'Map Level: 1';
//Creating the four classes.
createDifferentClasses('Priest', arrayPlayerChoices, 'priestProfileIMG');

createDifferentClasses('Fighter', arrayPlayerChoices, 'fighterProfileIMG');

createDifferentClasses('Wizard', arrayPlayerChoices, 'wizardProfileIMG');

createDifferentClasses('Assassin', arrayPlayerChoices, 'assassinProfileIMG');

wizard = arrayPlayerChoices[0];
displayPlayerClass(wizard, divPlayerStatistics);

//Initial Display
activatePlayerStatistics(wizard);
wizard.generateAttackPower();
displayPlayerClass(wizard, divPlayerStatistics);
//End of Display



//Start of the Merchant Code -- also need to build player inventory.
let newItemHealthPotion = new Item('Potion of Healing', 'Healing Potion', 100, () => {
    if (wizard.health < wizard.healthCalculationCopy) {
        wizard.generateHealth();
    }
}, 'Heals player to full health', true);

let newItemManaPotion = new Item('Potion of Mana', 'Mana Potion', 100, () => {
    if (wizard.health < wizard.healthCalculationCopy) {
        wizard.generateMagicPower();
        console.log('yay')
    }
}, 'Heals player to full health', true);


let newItemHead = new Item('Starter Helmet', 'Head', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Helmet', false, 'images/armor/starterHat.jpg', randomNumberMaker(5));

let newItemChest = new Item('Starter Chest', 'Chest', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Chest', false, 'images/armor/chestplateStarter.jpg', randomNumberMaker(5));

let newItemLegs = new Item('Starter Legs', 'Legs', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Legs', false, 'images/armor/legsStarter.jpg', randomNumberMaker(5));

let newItemArms = new Item('Starter Arms', 'Arms', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Arms', false, 'images/armor/starterArmor2.jpg', randomNumberMaker(5));

let newItemWeaponR = new Item('Starter Weapon-R', 'Weapon-R', randomNumberMaker(225) , () => {
    player.helmet
}, 'Starter Weapon-R', false, 'images/weapons/starterBattleAxe.jpg', randomNumberMaker(5));

let newItemWeaponL = new Item('Starter Weapon-L', 'Weapon-L', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Weapon-L', false, 'images/weapons/starterAxe2.jpg', randomNumberMaker(5));

let newItemRingR = new Item('Starter Ring-R', 'Ring-R', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Ring-R', false, 'images/rings/starterRingRight.jpg', randomNumberMaker(5));

let newItemRingL = new Item('Starter Ring-L', 'Ring-L', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Ring-L', false, 'images/rings/starterRingLeft.jpg', randomNumberMaker(5));

let newItemBelt = new Item('Starter Belt', 'Belt', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Belt', false, 'images/belts/starterBelt.jpg', randomNumberMaker(5));

let newItemNecklace = new Item('Starter Necklace', 'Necklace', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Necklace', false, 'images/necklaces/starterNecklace.jpg', randomNumberMaker(5));

let newItemHands = new Item('Starter Hands', 'Hands', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Hands', false, 'images/armor/starterGloves.jpg', randomNumberMaker(5));

let newItemFeet = new Item('Starter Feet', 'Feet', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Feet', false, 'images/armor/bootsStarter.jpg', randomNumberMaker(5));



const divPlayerInventory = document.querySelector('.div-inventory-container'); // selecting the player inventory div
const divMerchantInventory = document.querySelector('.div-item-container'); // selecting the merchant inventory div

let arrayPlayerInventory = []; // array that holds the player inventory
let arrayMerchantInventory = []; // array that holds the merchant inventory

//Creating the items to push into the merchant array
createMerchantItem(newItemHead, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemWeaponL, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemArms, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemWeaponR, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemChest, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemBelt, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemNecklace, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemRingR, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemRingL, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemLegs, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemHands, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemFeet, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
//End of Merchant Code.


//Code for scenes-----------------
const divSceneContainer = document.querySelector('.div-scene-container');
const h1SceneDesc =  document.querySelector('.h1-scene');
const divSceneImage = document.querySelector('.div-inside-image');
const pSceneDesc =  document.querySelector('.p-story-info');
const firstScene = new Scene('Life had been good for quite some time.', './images/scenes/peace.jpg', 'Peace was something that hard been earned 1000 years ago during the great battle of Eiikarti. The war that had raged on before this interlude had lasted for 3000 years. The mad kings conquest had wiped out many races completely, while converting their lands into hellscapes.');
const secondScene = new Scene('Monsters no like other.', './images/scenes/llamaScene.jpg', 'The mad king had obtained an artifact from a magical creature that was sacred. Dragons were never evil creatures, but with this horn he could summon one per day, to do his bidding. The mad king was thought to have died because he disappeared for centuries. Dragons were believed to be encapsulated in the plane that the horn summons them from. Their own magical world that kept them away from this one.')
const thirdScene = new Scene('The giants were the first to see the fiece beast.', './images/scenes/giants.jpg', 'The giants were not worried when they saw one dragon on the horizon. They were more in awe, as a single dragon attacking a nation of giants would be suicide. Regardless this was strange and a council meeting was called upon the existing races to speak how a dragon has appeared 1000 after the great war.')
const fourthScene = new Scene('The Council', './images/scenes/council.jpg', 'As the council reached a nervous decision to track the dragon to where it is staying to see if there are more, the earth began to quake. The wind had been strong for days now but they had thought this was only a storm.')
const fifthScene = new Scene('The skies were full of Llamas', './images/scenes/skyLlama.jpg', 'The council rushed outside to find the sky full of dragons and other types of weird monster. There was still hope if the dragon horn was used in time to send them back to where they came from.')
const sixthScene =  new Scene('A chance of hope', './images/scenes/llama_horn.jpg','Luckily the Llama horn was secured and blown in time to send three-fourths of the dragons back to their realm. The chance of victory was now about even. This meant it was time to gear up and destroy the wizard before he has enough time to create another army of foul beasts.')
const seventhScene = new Scene('The four guardians', './images/scenes/llamaBoss4.jpg', 'The next great war for peace is marching forward unyeilding to fatigue. We must take arms and sway the winds of war in our favor. The battle begins.')
const EightScene = new Scene('The dark lord', './images/scenes/darkWizardKing.jpg', 'The dark death king has appeared atop a mountain. His fire illuminates the night sky.');
scenesArray = [firstScene,secondScene,thirdScene, fourthScene, fifthScene, sixthScene, seventhScene, EightScene];
divSceneImage.style.backgroundImage = `url(${firstScene.imgPath})`;
const buttonForwardScene = document.querySelector('.button-further-story')

let sceneIndex = 0;
let currentScene = null;

buttonForwardScene.addEventListener('click', ()=>{
    if(sceneIndex >= scenesArray.length - 1){
        divSceneContainer.remove();
        document.querySelector('.div-choose-class').classList.add('add-margin')
        document.querySelectorAll('.div-player-choice').forEach((choice)=>{
            choice.classList.remove('hide')
        })
        document.querySelector('.div-choose-class').classList.remove('hide');
        console.log('second condition')
    }
    if(sceneIndex === 0){
        secondScene.setScene(h1SceneDesc, divSceneImage, pSceneDesc)
        sceneIndex+=1
    } else {
        if(sceneIndex >= scenesArray.length - 1){
            return;
        } else {
            sceneIndex+=1
            currentScene = scenesArray[sceneIndex];
            currentScene.setScene(h1SceneDesc, divSceneImage, pSceneDesc)
        }
    }
})
//----------------------------------
//Start of instructions
const buttonForFinishingInstructions = document.querySelector('.button-done-with-instructions');
buttonForFinishingInstructions.addEventListener('click', ()=>{
    document.querySelector('.div-choose-class').classList.remove('hide')
    document.querySelectorAll('.div-player-choice').forEach((choice)=>{
        choice.classList.remove('hide');
        document.querySelector('body').classList.remove('over-flow') 
    })
    document.querySelector('.div-menu').classList.remove('hide')
document.querySelector('.instructions-to-game-page').remove();
})
//End of scene disply

//Familiars buy and display code

let arrayPlayerFamiliars = [];

const buttonOwnedFamiliars = document.querySelector('.button-familiar-owned');
const buttonAvailableFamiliars = document.querySelector('.button-familiar-available');

buttonOwnedFamiliars.addEventListener('click', ()=>{
document.querySelectorAll('.div-familiar-container-list div').forEach((div)=>{
    div.classList.add('hide');
});
document.querySelectorAll('.div-familiar-container-list-owned div').forEach((div)=>{
    div.classList.remove('hide');
})
})

buttonAvailableFamiliars.addEventListener('click', ()=>{
    document.querySelectorAll('.div-familiar-container-list div').forEach((div)=>{
        div.classList.remove('hide');
    });
    document.querySelectorAll('.div-familiar-container-list-owned div').forEach((div)=>{
        div.classList.add('hide');
    })
})

let currentDifficulty = .5;

for(let i = 0; i < 20; i++){
    createFamiliarDiv(createRandomFamiliar(arrayFamiliarImages, currentDifficulty), arrayPlayerFamiliars, DivFamiliarContainer, DivOwnedFamiliarContainer)
}
//Left off here after randomally generating the familiars.
//End of Familiars



//Starting the battle section.


let usingAlt = false;
// heal, attack basic, defend, special 1 , special 2, special 3

function giveReward(currentEnemy) {
    //write code for overlay to appear that explains reward with a next button.
    currentEnemy.reward();
}
const div_reward_container = document.querySelector('.end-of-battle-screen')
const remove_reward_button = document.querySelector('.button-remove-reward-screen')

remove_reward_button.addEventListener('click', ()=>{
    div_reward_container.classList.add('hide')
    document.querySelector('body').classList.remove('over-flow')
})

function checkForEndOfBattle() {
    if (currentEnemy.health <= 0) {
        console.log('Battle is over.');
        document.querySelector('.battle-overlay').classList.add('hide');
        winCount += 1;
        if(winCount % 3 === 0){
            document.querySelectorAll('.div-item-container .div-merchant-item').forEach((div)=>{
                div.remove();
            })
            unlockNewFamiliars();
            createMerchantItemsLoop();
            updateBuildingResourcePlayerTable(tdBuildHousePlayerHave, tdBuildHouseRequirementsAllSmall, tdBuildHouseRequirementsAllMedium, tdBuildHouseRequirementsAllLarge, resourceFarm_); // calling the function to display the map
        }
        giveReward(currentEnemy);
        h1MenuItemsAll.forEach((item) => {
            item.classList.remove('hide');
        });
        document.querySelector('.div-map-container').classList.remove('hide');
        updateBuildingResourcePlayerTable(tdBuildHousePlayerHave, tdBuildHouseRequirementsAllSmall, tdBuildHouseRequirementsAllMedium, tdBuildHouseRequirementsAllLarge, resourceFarm_); // calling the function to display the map
        div_reward_container.classList.remove('hide');
        document.querySelector('body').classList.add('over-flow');
        wizard.levelUp();
        displayPlayerClass(wizard, divPlayerStatistics);
        wizard.generateHealth();
        wizard.generateMagicPower()
        currentFamiliar.generateMagicPower()
        currentFamiliar.generateAttackPower();
        spanPlayerGold.innerText = wizard.gold;
        currentDifficulty += .5
    }
}



function initiateBattle() {
    document.querySelector('.battle-overlay').classList.remove('hide');
    displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
    if(usingAlt === true){
        displayFamiliarClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        displayFamiliarButtonSet(currentFamiliar, buttonPlayerBattleControls)
    } else {
        displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
    }
}

//End of the battle section


//Map

function fillMap(map) {
    for (let i = 0; i < 15; i++) {
        let mapSquare = document.createElement('div');
        mapSquare.classList.add('map-square');
        mapSquare.style.backgroundImage = `url('/images/map/map${i + 1}.jpg')`;
        map.appendChild(mapSquare);
    }
}

fillMap(document.querySelector('.div-map-piece-container'));

let allMapSlots = document.querySelectorAll('.map-square');

let rewardGold = 5;
let arrayTestMonsters = [];

let winCount = 0; //Increases the difficulty for each map slot completed (map -> battle)


const pAllBattleRewards = document.querySelectorAll('.p-battle-rewards')
const divsForHidingMainContainers = document.querySelectorAll('.overflow-hide')


function hide_all_divs(nodelist_divs){
nodelist_divs.forEach((div)=>{
    div.classList.add('no-display')
})
}
hide_all_divs(divsForHidingMainContainers)

function display_end_of_battle_rewards_p_change(node_list, reward0, reward1, reward2, reward3){
node_list[0].innerText = `Gold: ${reward0}`
node_list[1].innerText = `Wood: ${reward1}`
node_list[2].innerText = `Lumber: ${reward2}`
node_list[3].innerText = `Stone: ${reward3}`
}

let reward_level = 1
allMapSlots.forEach((mapSlot) => {   //Putting the map slots on the map and initiating the battle
    arrayTestMonsters = []
    mapSlot.addEventListener('click', () => {
        reward_level += 1
        let newMonster = createRandomEnemies(() => {
            let reward0 = randomNumberMaker(1000) + (randomNumberMaker(5) * reward_level);
            wizard.gold += reward0
            let reward1 = (randomNumberMaker(10) * currentDifficulty) + (randomNumberMaker(5) * reward_level);
            resourceFarm_.wood += reward1
            let reward2 = (randomNumberMaker(10) * currentDifficulty) + (randomNumberMaker(5) * reward_level);
            resourceFarm_.lumber += reward2
            let reward3 = (randomNumberMaker(10) * currentDifficulty) + (randomNumberMaker(5) * reward_level);
            resourceFarm_.stone += reward3
            display_end_of_battle_rewards_p_change(pAllBattleRewards, reward0, reward1, reward2, reward3)
        }, (currentDifficulty), arrayTestMonsters, mapLevel);
        currentEnemy = newMonster;
        document.querySelector('.div-map-container').classList.add('hide')
        initiateBattle();
        h1MenuItemsAll.forEach((item) => {
            item.classList.add('hide');
        });
    });
});
let playerLevel = 0;
let mapLevel = 1; //The level of the map


//End of the map section44

//Start of game functions that need to be called.
buttonUnequip.forEach((button) => {//Fixing equip button display
    button.addEventListener('click', () => {
        displayPlayerClass(wizard, divPlayerStatistics);
    })
});
//End of game functions that need to be called.



// Resource Farm Start
let population = 0;
const h1Population = document.querySelector('.h1-population');

const tdBuildHouseRequirementsAllSmall = document.querySelectorAll('.td-requirement-build-house-small');
const tdBuildHouseRequirementsAllMedium = document.querySelectorAll('.td-requirement-build-house-medium');
const tdBuildHouseRequirementsAllLarge = document.querySelectorAll('.td-requirement-build-house-large');
const tdBuildHousePlayerHave = document.querySelectorAll('.td-player-resources');

const resourceFarm_ = new ResourceFarm();


updateBuildingResourcePlayerTable(tdBuildHousePlayerHave, tdBuildHouseRequirementsAllSmall, tdBuildHouseRequirementsAllMedium, tdBuildHouseRequirementsAllLarge, resourceFarm_); // calling the function to display the map

//Start of the harvesting area

const allHarvestingAreaButtons = document.querySelectorAll('.button-harvest-mana'); //selecting all of the map harvesting buttons
const allPlayerEssence = document.querySelectorAll('.h1-total-essence'); // Selecting all of the essence h1's



//function for creating house display

//end of function for creating house display

const updatePopulationHarvesting = () => {
    document.querySelector('.h1-population-harvest').innerText = `Population: ${population}`;
    document.querySelector('.h1-population').innerText = `Population: ${population}`;
}

allHarvestingAreaButtons[0].addEventListener('click', () => { // Event listener for harvesting button
    if (population >= 2) {
        wizard.fireEssence += 2;
        allPlayerEssence[0].innerText = `Current Essence: ${wizard.fireEssence}`;
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
    
})

allHarvestingAreaButtons[1].addEventListener('click', () => { // Event listener for harvesting button
    if (population >= 2) {
        wizard.airEssence += 2;
        allPlayerEssence[1].innerText = `Current Essence: ${wizard.airEssence}`;
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
})

allHarvestingAreaButtons[2].addEventListener('click', () => { //Event listener for harvesting button
    if (population >= 2) {
        wizard.waterEssence += 2;
        allPlayerEssence[2].innerText = `Current Essence: ${wizard.waterEssence}`;
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
})

allHarvestingAreaButtons[3].addEventListener('click', () => { // Event listener for harvesting button
    if (population >= 2) {
        wizard.earthEssence += 2;
        allPlayerEssence[3].innerText = `Current Essence: ${wizard.earthEssence}`
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
})

allHarvestingAreaButtons[4].addEventListener('click', () => { // Event listener for harvesting button
    if (population >= 2) {
        wizard.lightEssence += 2;
        allPlayerEssence[4].innerText = `Current Essence: ${wizard.lightEssence}`
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
})

allHarvestingAreaButtons[5].addEventListener('click', () => { // Event listener for harvesting button
    if (population >= 2) {
        wizard.darkEssence += 2;
        allPlayerEssence[5].innerText = `Current Essence: ${wizard.darkEssence}`
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
})

const essenceCountAll = document.querySelectorAll('#span-essence-count');
const essenceEssenceCountAll = document.querySelectorAll('.h1-total-essence')
updateEssence(wizard, essenceCountAll)
updateEssenceEssencePage(wizard, essenceEssenceCountAll)
//End of the harvesting area


// Start of the unlockable rewards that come from winning battles.


function createMerchantItemsLoop(){ // Creating the first set of merchant items and displaying them. (random items)
    for(let i = 0; i <= 3; i++){
        createMerchantItem(createRandomItem('Boots', arrayBootImages, 'Boots'), divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
         // createMerchantItem(createRandomItem('Hands', arrayHa), divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
        createMerchantItem(createRandomItem('Head', arrayHatsImages, 'Head'), divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
        createMerchantItem(createRandomItem('Weapon', arrayWeaponImages, 'Weapon'), divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
        createMerchantItem(createRandomItem('Legs', arrayLegsImages, 'Legs'), divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
        createMerchantItem(createRandomItem('Chest', arrayChestPlateImages, 'Chest'), divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
        createMerchantItem(createRandomItem('Necklace', arrayNecklaceImages, 'Necklace'), divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
        createMerchantItem(createRandomItem('Rings', arrayRingImages, 'Rings'), divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
        createMerchantItem(createRandomItem('Belt', arrayBeltImages, 'Belt'), divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
        createMerchantItem(createRandomItem('Arms', arrayArmImages, 'Arms'), divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
    }
}

