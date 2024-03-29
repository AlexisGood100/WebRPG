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
// displayPlayerClass(wizard, )
let currentPlayer = 0;
// player span for gold, health, and mana
let spanPlayerGold = document.querySelector('.span-player-gold');
let spanPlayerHealth = document.querySelector('.span-player-health');
let spanPlayerMana = document.querySelector('.span-player-mana');
//Initializing starting familiar
const familiar3 = new Familiar('Friendy', 'Fire', 'familiar1', randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), null, null, null, 'Smack', 'Crack', 'Popple', 5);
let currentEnemy = familiar3;
let currentFamiliar = familiar3;

currentFamiliar.generateAttackPower();
currentFamiliar.generateHealth();
currentFamiliar.generateAttackPower();
currentFamiliar.generateMana();
// End of initializing starting familiar
let arrayPlayerChoices = [];
//End of player choice array

const map_level_html = document.querySelector('.h1-map-level')
map_level_html.innerText = 'Map Level: 1';

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
displayPlayerClass(wizard, divPlayerStatistics);
//End of Display


let arrayPlayerFamiliars = [];

let currentDifficulty = .5;

// CREATING RANDOM FAMILIARS
for (let i = 0; i < 20; i++) {
    createFamiliarDiv(createRandomFamiliar(currentDifficulty), arrayPlayerFamiliars, DivFamiliarContainer, DivOwnedFamiliarContainer, `./images/familiars/familiar${i}.jpg`)
}
//Left off here after randomally generating the familiars    //up to 10 of 21
//End of Familiars


//Start of the Merchant Code -- also need to build player inventory.

let newItemHead = new Item('Starter Helmet', 'Head', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Helmet', false, 'images/hats/newHat2.jpg', randomNumberMaker(5));

let newItemChest = new Item('Starter Chest', 'Chest', randomNumberMaker(225), () => {
    player.helmet
}, 'Starter Chest', false, 'images/armor/breastPlate/breastPlate.jpg', randomNumberMaker(5));

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
}, 'Starter Feet', false, 'images/boots/boots.jpg', randomNumberMaker(5));

let arrayPlayerInventory = []; // array that holds the player inventory
let arrayMerchantInventory = []; // array that holds the merchant inventory
const divPlayerInventory = document.querySelector('.div-inventory-container'); // selecting the player inventory div
const divMerchantInventory = document.querySelector('.div-item-container'); // selecting the merchant inventory div


//Creating the items to push into the merchant array
createMerchantItem(newItemHead, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemWeaponL, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemWeaponR, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemChest, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemBelt, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemNecklace, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemRingR, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemRingL, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemHands, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);
createMerchantItem(newItemFeet, divMerchantInventory, arrayMerchantInventory, arrayPlayerInventory, divPlayerInventory);


//End of Merchant Code.


let usingAlt = false;
// heal, attack basic, defend, special 1 , special 2, special 3

function giveReward(currentEnemy) {
    //write code for overlay to appear that explains reward with a next button.
    currentEnemy.reward();
}
const div_reward_container = document.querySelector('.end-of-battle-screen')
const remove_reward_button = document.querySelector('.button-remove-reward-screen')

remove_reward_button.addEventListener('click', () => {
    div_reward_container.classList.add('hide')
    document.querySelector('body').classList.remove('over-flow')
})


function checkForEndOfBattle() {
    document.querySelector('.battle-overlay').classList.add('hide');
    winCount += 1;
    if (winCount % 3 === 0) {
        document.querySelectorAll('.div-item-container .div-merchant-item').forEach((div) => {
            div.remove();
        })
    //    This is where the familiar unlock used to be. // Need to recreate function.
        // 
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


function hide_all_divs(nodelist_divs) {
    nodelist_divs.forEach((div) => {
        div.classList.add('no-display')
    })
}
hide_all_divs(divsForHidingMainContainers)

function display_end_of_battle_rewards_p_change(node_list, reward0, reward1, reward2, reward3) {
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



const resourceFarm_ = new ResourceFarm();


const essenceCountAll = document.querySelectorAll('#span-essence-count');
const essenceEssenceCountAll = document.querySelectorAll('.h1-total-essence')
updateEssence(wizard, essenceCountAll)
updateEssenceEssencePage(wizard, essenceEssenceCountAll)



updateBuildingResourcePlayerTable(tdBuildHousePlayerHave, tdBuildHouseRequirementsAllSmall, tdBuildHouseRequirementsAllMedium, tdBuildHouseRequirementsAllLarge, resourceFarm_); // calling the function to display the map