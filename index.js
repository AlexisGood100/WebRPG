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
// player span for gold, health, and mana
let spanPlayerGold = document.querySelector('.span-player-gold');
let spanPlayerHealth = document.querySelector('.span-player-health');
let spanPlayerMana = document.querySelector('.span-player-mana');

// global variables
let currentDifficulty = .5; //Current difficulty init
let currentPlayer = 0; //Current Player Init

//Initializing starting familiar
let arrayPlayerChoices = [];

let startFamiliar = new Familiar('Friendy', 'Fire', 'familiar1', randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), null, null, null, 'Smack', 'Crack', 'Popple', 5);
startFamiliar.newImgPath = './images/familiars/wizardStarterFamiliar.jpg';
let arrayPlayerFamiliars = [startFamiliar];

let currentEnemy = null;
let currentFamiliar = startFamiliar;
currentFamiliar.generateAttackPower();
currentFamiliar.generateHealth();
currentFamiliar.generateAttackPower();
currentFamiliar.generateMana();

for (let i = 0; i < 20; i++) {
    createFamiliarDiv(createRandomFamiliar(currentDifficulty), arrayPlayerFamiliars, DivFamiliarContainer, DivOwnedFamiliarContainer, `./images/familiars/familiar${i}.jpg`)

}
// End of initializing starting familiar

//Creating the playable classes of the game.
createDifferentClasses('Priest', arrayPlayerChoices, 'priestProfileIMG');
createDifferentClasses('Fighter', arrayPlayerChoices, 'fighterProfileIMG');
createDifferentClasses('Wizard', arrayPlayerChoices, 'wizardProfileIMG');
createDifferentClasses('Assassin', arrayPlayerChoices, 'assassinProfileIMG');
// End of create the playable classes of the game.

//Initial Display
wizard = arrayPlayerChoices[0];
activatePlayerStatistics(wizard);
wizard.generateAttackPower();
displayPlayerClass(wizard, divPlayerStatistics)
// End of init
// Start of merchant 
let arrayPlayerInventory = []; // array that holds the player inventory
let arrayMerchantInventory = []; // array that holds the merchant inventory
const divPlayerInventory = document.querySelector('.div-inventory-container'); // selecting the player inventory div
const divMerchantInventory = document.querySelector('.div-item-container'); // selecting the merchant inventory div

let newItemHead = new Item('Starter Helmet', 'Head', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Helmet', false, 'images/hats/hat1.jpg', randomNumberMaker(5));

let newItemChest = new Item('Starter Chest', 'Chest', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Chest', false, 'images/breastPlate/breastplate1.jpg', randomNumberMaker(5));

let newItemWeaponR = new Item('Starter Weapon-R', 'Weapon-R', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Weapon-R', false, 'images/weapons/weapon1.jpg', randomNumberMaker(5));

let newItemWeaponL = new Item('Starter Weapon-L', 'Weapon-L', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Weapon-L', false, 'images/weapons/weapon2.jpg', randomNumberMaker(5));

let newItemRingR = new Item('Starter Ring-R', 'Ring-R', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Ring-R', false, 'images/rings/rightRing1.jpg', randomNumberMaker(5));

let newItemRingL = new Item('Starter Ring-L', 'Ring-L', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Ring-L', false, 'images/rings/leftRing1.jpg', randomNumberMaker(5));

let newItemBelt = new Item('Starter Belt', 'Belt', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Belt', false, 'images/belts/belt1.jpg', randomNumberMaker(5));

let newItemNecklace = new Item('Starter Necklace', 'Necklace', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Necklace', false, 'images/necklaces/necklace1.jpg', randomNumberMaker(5));

let newItemHands = new Item('Starter Hands', 'Hands', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Hands', false, 'images/gloves/gloves1.jpg', randomNumberMaker(5));

let newItemFeet = new Item('Starter Feet', 'Feet', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Feet', false, 'images/boots/boot1.jpg', randomNumberMaker(5));

// Unequip code
const allButtonsForUnequip = document.querySelectorAll('.button-unequip');
let allImagesForEquipSlots = document.querySelectorAll('.div-equip-item-image')

let itemSlots = [0, 0, 0, 0, 0, 0, 0, 0]

// allButtonsForUnequip[0].addEventListener('click', ()=>{
//     // createMerchantItem(itemSlots[0], divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory,itemSlots);
//     createItemDisplay(divPlayerInventory, itemSlots[0], wizard)
//     allImagesForEquipSlots[0].style.backgroundImage = '';
//     itemSlots[0] = 0;
// }) //Maybe add a loop to give them all because the only thing that is changing is the index, just need to regard the length of the unequip button nodelist.


for (let i = 0; i < allButtonsForUnequip.length; i++) {
    allButtonsForUnequip[i].addEventListener('click', () => {
        createItemDisplay(divPlayerInventory, itemSlots[i], wizard)
        allImagesForEquipSlots[i].style.backgroundImage = '';
        itemSlots[i] = 0;
    })
}


//Creating the items to push into the merchant array
createMerchantItem(newItemHead, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemWeaponL, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemWeaponR, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemChest, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemBelt, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemNecklace, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemRingR, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemRingL, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemHands, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
createMerchantItem(newItemFeet, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory, itemSlots);
//End of Merchant Code.

const allRewardChestImages = ['./images/rewardChests/chest1.jpg', './images/rewardChests/chest2.jpg', './images/rewardChests/chest3.jpg', './images/rewardChests/chest4.jpg']
let rewardBox = document.querySelector('.reward-box')
remove_reward_button.addEventListener('click', () => {
    let rewardsContent = document.querySelectorAll('.reward-content')
    rewardsContent.forEach((rewardContent) => {
        rewardContent.classList.remove('hide')
    })
})
function checkForEndOfBattle() {
    document.querySelector('.battle-overlay').classList.add('hide');
    winCount += 1;
    giveReward(currentEnemy);
    rewardBox.style.backgroundImage = `url('${allRewardChestImages[Math.floor(Math.random() * 3) + 1]}')`
    h1MenuItemsAll.forEach((item) => {
        item.classList.remove('hide');
    });
    let rewards = document.querySelectorAll('.reward-content')
    rewards.forEach((reward) => {
        reward.classList.remove('hide')
    })
    document.querySelector('.div-map-container').classList.remove('hide');
    updateBuildingResourcePlayerTable(tdBuildHousePlayerHave, tdBuildHouseRequirementsAllSmall, tdBuildHouseRequirementsAllMedium, tdBuildHouseRequirementsAllLarge, resourceFarm_); // calling the function to display the map
    div_reward_container.classList.remove('hide');
    document.querySelector('body').classList.add('over-flow');
    // wizard.levelUp(); // This is the level up function
    wizard.generateHealth();
    wizard.generateMagicPower()
    currentFamiliar.generateMagicPower()
    currentFamiliar.generateAttackPower();
    currentFamiliar.level = wizard.level;
    spanPlayerGold.innerText = wizard.gold;
    currentDifficulty += .5
    displayPlayerClass(wizard, document.querySelector('.div-player-statistics'));
}

//End of the battle section

let rewardGold = 5;
let arrayTestMonsters = [];

let winCount = 0; //Increases the difficulty for each map slot completed (map -> battle)

const pAllBattleRewards = document.querySelectorAll('.p-battle-rewards')
const divsForHidingMainContainers = document.querySelectorAll('.overflow-hide')

hide_all_divs(divsForHidingMainContainers)
let reward_level = 1

let allMapSlots = document.querySelectorAll('.map-square');
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


// Resource Farm Start
let population = 0;
const h1Population = document.querySelector('.h1-population');
const resourceFarm_ = new ResourceFarm();
//end of resource farm

// Start of essence
const essenceCountAll = document.querySelectorAll('#span-essence-count');
const essenceEssenceCountAll = document.querySelectorAll('.h1-total-essence')
updateEssence(wizard, essenceCountAll)
updateEssenceEssencePage(wizard, essenceEssenceCountAll)
// End of essence
let h1_java_counter = { count: 0 };
// Building
updateBuildingResourcePlayerTable(tdBuildHousePlayerHave, tdBuildHouseRequirementsAllSmall, tdBuildHouseRequirementsAllMedium, tdBuildHouseRequirementsAllLarge, resourceFarm_); // calling the function to display the map
// End of building

// Java Shop initiation
let spanForJavaCount = document.querySelector('.span-total-javas')
createJavaObj(javaConsititution, document.querySelector('.java-container'), wizard, arrayPlayerFamiliars, document.querySelector('.span-total-javas'), h1_java_counter);
createJavaObj(javaStrength, document.querySelector('.java-container'), wizard, arrayPlayerFamiliars, document.querySelector('.span-total-javas'), h1_java_counter);
createJavaObj(javaDexterity, document.querySelector('.java-container'), wizard, arrayPlayerFamiliars, document.querySelector('.span-total-javas'), h1_java_counter);
createJavaObj(javaWillpower, document.querySelector('.java-container'), wizard, arrayPlayerFamiliars, document.querySelector('.span-total-javas'), h1_java_counter);
createJavaObj(javaIntelligence, document.querySelector('.java-container'), wizard, arrayPlayerFamiliars, document.querySelector('.span-total-javas'), h1_java_counter);
createJavaObj(javaCharisma, document.querySelector('.java-container'), wizard, arrayPlayerFamiliars, document.querySelector('.span-total-javas'), h1_java_counter);
createJavaObj(javaDefense, document.querySelector('.java-container'), wizard, arrayPlayerFamiliars, document.querySelector('.span-total-javas'), h1_java_counter);
createJavaObj(javaFamiliarDefense, document.querySelector('.java-container'), wizard, arrayPlayerFamiliars, document.querySelector('.span-total-javas'), h1_java_counter);
createJavaObj(javaFamiliarStrength, document.querySelector('.java-container'), wizard, arrayPlayerFamiliars, document.querySelector('.span-total-javas'), h1_java_counter);
createJavaObj(javaFamiliarConstitution, document.querySelector('.java-container'), wizard, arrayPlayerFamiliars, document.querySelector('.span-total-javas'), h1_java_counter);




function createSkillSlot(classListForAbsolutePositioning, skillUp, skillNum, parent) {
    // if (wizard.requiredLevel >= skillNum) {
        let skillDiv = document.createElement('div');
        skillDiv.classList.add('skill-div');
        skillDiv.classList.add(classListForAbsolutePositioning);
        let skillNumP = document.createElement('p');
        skillNumP.innerText = skillNum;
        let skillUpP = document.createElement('p');
        skillUpP.innerText = skillUp;
        skillDiv.appendChild(skillNumP);
        skillDiv.appendChild(skillUpP);
        parent.appendChild(skillDiv);
        
        //event listener for the skill tree
        skillDiv.addEventListener('click', ()=>{
            let wizardLevel = wizard.level
            if(skillUp === 'Strength'){
                wizard.strength += parseFloat(wizardLevel);
                console.log(wizardLevel)
                console.log(wizard.strength)
            }
            if(skillUp === 'Intelligence'){
                wizard.attack += wizardLevel;
            }
        })
   
    }



createSkillSlot('left-1-skill-tree-div', 'Strength', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('left-2-skill-tree-div', 'Dexterity', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('left-3-skill-tree-div', 'Intelligence', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('left-4-skill-tree-div', 'Willpower', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('left-5-skill-tree-div', 'Charisma', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('left-6-skill-tree-div', 'Defense', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('right-1-skill-tree-div', 'Willpower', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('right-2-skill-tree-div', 'Consititution', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('right-3-skill-tree-div', 'F-Strength', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('right-4-skill-tree-div', 'F-Dexterity', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('right-5-skill-tree-div', 'F-Intelligence', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('right-6-skill-tree-div', 'F-Willpower', 1, document.querySelector('.div-skill-tree'))

createSkillSlot('middle-1-skill-tree-div', 'F-Charisma', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('middle-2-skill-tree-div', 'F-Defense', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('middle-3-skill-tree-div', 'F-Willpower', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('middle-4-skill-tree-div', '+Difficulty', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('middle-5-skill-tree-div', '+Item Ratings', 1, document.querySelector('.div-skill-tree'))
createSkillSlot('middle-6-skill-tree-div', '+F Strength', 1, document.querySelector('.div-skill-tree'))














