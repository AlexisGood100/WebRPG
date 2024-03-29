
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
const randomNumberMaker = (bounds) => {
    return Math.floor(Math.random() * bounds);
}


const familiar3 = new Familiar('Friendy', 'Fire', 'familiar1', randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), randomNumberMaker(10), null, null, null, 'Smack', 'Crack', 'Popple', 5);
let currentEnemy = familiar3;
let currentFamiliar = familiar3;

currentFamiliar.generateAttackPower();
currentFamiliar.generateHealth();
currentFamiliar.generateAttackPower();
currentFamiliar.generateMana();
// End of initializing starting familiar


//Player Choice array
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





//Code for scenes-----------------
const divSceneContainer = document.querySelector('.div-scene-container');
const h1SceneDesc = document.querySelector('.h1-scene');
const divSceneImage = document.querySelector('.div-inside-image');
const pSceneDesc = document.querySelector('.p-story-info');
const firstScene = new Scene('Life had been good for quite some time.', './images/scenes/peace.jpg', 'Peace was something that hard been earned 1000 years ago during the great battle of Eiikarti. The war that had raged on before this interlude had lasted for 3000 years. The mad kings conquest had wiped out many races completely, while converting their lands into hellscapes.');
const secondScene = new Scene('Monsters no like other.', './images/scenes/llamaScene.jpg', 'The mad king had obtained an artifact from a magical creature that was sacred. Dragons were never evil creatures, but with this horn he could summon one per day, to do his bidding. The mad king was thought to have died because he disappeared for centuries. Dragons were believed to be encapsulated in the plane that the horn summons them from. Their own magical world that kept them away from this one.')
const thirdScene = new Scene('The giants were the first to see the fiece beast.', './images/scenes/giants.jpg', 'The giants were not worried when they saw one dragon on the horizon. They were more in awe, as a single dragon attacking a nation of giants would be suicide. Regardless this was strange and a council meeting was called upon the existing races to speak how a dragon has appeared 1000 after the great war.')
const fourthScene = new Scene('The Council', './images/scenes/council.jpg', 'As the council reached a nervous decision to track the dragon to where it is staying to see if there are more, the earth began to quake. The wind had been strong for days now but they had thought this was only a storm.')
const fifthScene = new Scene('The skies were full of Llamas', './images/scenes/skyLlama.jpg', 'The council rushed outside to find the sky full of dragons and other types of weird monster. There was still hope if the dragon horn was used in time to send them back to where they came from.')
const sixthScene = new Scene('A chance of hope', './images/scenes/llama_horn.jpg', 'Luckily the Llama horn was secured and blown in time to send three-fourths of the dragons back to their realm. The chance of victory was now about even. This meant it was time to gear up and destroy the wizard before he has enough time to create another army of foul beasts.')
const seventhScene = new Scene('The four guardians', './images/scenes/llamaBoss4.jpg', 'The next great war for peace is marching forward unyeilding to fatigue. We must take arms and sway the winds of war in our favor. The battle begins.')
const EightScene = new Scene('The dark lord', './images/scenes/darkWizardKing.jpg', 'The dark death king has appeared atop a mountain. His fire illuminates the night sky.');
scenesArray = [firstScene, secondScene, thirdScene, fourthScene, fifthScene, sixthScene, seventhScene, EightScene];
divSceneImage.style.backgroundImage = `url(${firstScene.imgPath})`;
const buttonForwardScene = document.querySelector('.button-further-story')

let sceneIndex = 0;
let currentScene = null;

buttonForwardScene.addEventListener('click', () => {
    if (sceneIndex >= scenesArray.length - 1) {
        divSceneContainer.remove();
        document.querySelector('.div-choose-class').classList.add('add-margin')
        document.querySelectorAll('.div-player-choice').forEach((choice) => {
            choice.classList.remove('hide')
        })
        document.querySelector('.div-choose-class').classList.remove('hide');
        console.log('second condition')
    }
    if (sceneIndex === 0) {
        secondScene.setScene(h1SceneDesc, divSceneImage, pSceneDesc)
        sceneIndex += 1
    } else {
        if (sceneIndex >= scenesArray.length - 1) {
            return;
        } else {
            sceneIndex += 1
            currentScene = scenesArray[sceneIndex];
            currentScene.setScene(h1SceneDesc, divSceneImage, pSceneDesc)
        }
    }
})
//----------------------------------
//Start of instructions
const buttonForFinishingInstructions = document.querySelector('.button-done-with-instructions');
buttonForFinishingInstructions.addEventListener('click', () => {
    document.querySelector('.div-choose-class').classList.remove('hide')
    document.querySelectorAll('.div-player-choice').forEach((choice) => {
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

buttonOwnedFamiliars.addEventListener('click', () => {
    document.querySelectorAll('.div-familiar-container-list div').forEach((div) => {
        div.classList.add('hide');
    });
    document.querySelectorAll('.div-familiar-container-list-owned div').forEach((div) => {
        div.classList.remove('hide');
    })
})

buttonAvailableFamiliars.addEventListener('click', () => {
    document.querySelectorAll('.div-familiar-container-list div').forEach((div) => {
        div.classList.remove('hide');
    });
    document.querySelectorAll('.div-familiar-container-list-owned div').forEach((div) => {
        div.classList.add('hide');
    })
})

let currentDifficulty = .5;

// CREATING RANDOM FAMILIARS
for (let i = 0; i < 20; i++) {
    createFamiliarDiv(createRandomFamiliar(currentDifficulty), arrayPlayerFamiliars, DivFamiliarContainer, DivOwnedFamiliarContainer, `./images/familiars/familiar${i}.jpg`)
}
//Left off here after randomally generating the familiars    //up to 10 of 21
//End of Familiars


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



const divPlayerInventory = document.querySelector('.div-inventory-container'); // selecting the player inventory div
const divMerchantInventory = document.querySelector('.div-item-container'); // selecting the merchant inventory div

let arrayPlayerInventory = []; // array that holds the player inventory
let arrayMerchantInventory = []; // array that holds the merchant inventory

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

//Starting the battle section.


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




function initiateBattle() {
    document.querySelector('.battle-overlay').classList.remove('hide');
    displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
    document.querySelector('.div-container-enemy-side-img').style.backgroundImage = `url('./images/enemies/enemy${Math.floor(Math.random() * 16)}.jpg')`
    console.log(document.querySelector('.div-container-enemy-side-img'))
    if (usingAlt === true) {
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

const tdBuildHouseRequirementsAllSmall = document.querySelectorAll('.td-requirement-build-house-small');
const tdBuildHouseRequirementsAllMedium = document.querySelectorAll('.td-requirement-build-house-medium');
const tdBuildHouseRequirementsAllLarge = document.querySelectorAll('.td-requirement-build-house-large');
const tdBuildHousePlayerHave = document.querySelectorAll('.td-player-resources');

const resourceFarm_ = new ResourceFarm();

updateBuildingResourcePlayerTable(tdBuildHousePlayerHave, tdBuildHouseRequirementsAllSmall, tdBuildHouseRequirementsAllMedium, tdBuildHouseRequirementsAllLarge, resourceFarm_); // calling the function to display the map

const essenceCountAll = document.querySelectorAll('#span-essence-count');
const essenceEssenceCountAll = document.querySelectorAll('.h1-total-essence')
updateEssence(wizard, essenceCountAll)
updateEssenceEssencePage(wizard, essenceEssenceCountAll)


