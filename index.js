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
    wizard.levelUp();
    displayPlayerClass(wizard, document.querySelector('.div-player-statistics'));
    wizard.generateHealth();
    wizard.generateMagicPower()
    currentFamiliar.generateMagicPower()
    currentFamiliar.generateAttackPower();
    currentFamiliar.level = wizard.level;
    spanPlayerGold.innerText = wizard.gold;
    currentDifficulty += .5
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



//Mini-Game
let scoreForGame = { score: 0 }
let timer = 0;


const gameStart = document.querySelector('.button-start-game')
gameStart.addEventListener('click', (e) => {
    timer = 0;
    gameStart.classList.add('hide');
    let colorAssignInterval = setInterval(() => {
        document.querySelector(".span-timer").classList.remove('hide')
        if (timer === 5) {
            clearInterval(colorAssignInterval)
            nodeList_ = document.querySelectorAll('.inside-game-div');
            nodeList_.forEach((element)=>{
                element.style.backgroundColor = 'crimson'
                wizard.gold += scoreForGame.score;
                console.log(wizard.gold)
                timer = 0;
                scoreForGame.score = 0;
                spanForScore.innerText = scoreForGame.score;
                gameStart.classList.remove('hide');
                console.log('You have earned ' + scoreForGame.score + " points.")
                document.querySelector('.span-timer').innerText = 0;
                document.querySelector(".span-timer").classList.add('hide')
            })
        } else {
            assignColorsToAll(checkForColor(assignSelectedColor()));
        }
    }, 2000);
    
    runTimer(1000)

    nodeList_ = document.querySelectorAll('.inside-game-div');
    nodeList_.forEach((element) => {
        element.addEventListener('click', () => {
            if (element.style.backgroundColor === currentColor) {
                console.log('score')
                scoreForGame.score += 1;
                spanForScore.innerText = scoreForGame.score;
            } else {
                console.log('no score')
                scoreForGame.score -= 1;
                spanForScore.innerText = scoreForGame.score;
            }
        })
    })
});
//End of mini-game



const runTimer = (num) => {

    let interval = setInterval(() => {
        if (timer === 5) {
            clearInterval(interval)
            return
        } else{
            timer += 1;
            document.querySelector(".span-timer").innerText = timer;
        }
    }, num)

}

// the duel part of the game.
createGameRewardDivs(document.querySelector('.game-duel'), 'magical-attack', 19)
let starterDefaultIamgeForMagicalAttacks = './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg';
let allMagicalAttackElements = document.querySelectorAll('.magical-attack')


allMagicalAttackElements.forEach((magicalAttackElement)=>{
    magicalAttackElement.style.backgroundImage = `url('${starterDefaultIamgeForMagicalAttacks}')`;
})
allMagicalAttackElements[0].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`
allMagicalAttackElements[4].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`
allMagicalAttackElements[5].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`
allMagicalAttackElements[9].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`
allMagicalAttackElements[10].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`
allMagicalAttackElements[14].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`
allMagicalAttackElements[15].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`
allMagicalAttackElements[19].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`

allMagicalAttackElements[0].classList.add('p-fire');
allMagicalAttackElements[4].classList.add('e-fire');
allMagicalAttackElements[5].classList.add('p-ice');
allMagicalAttackElements[9].classList.add('e-ice');
allMagicalAttackElements[10].classList.add('p-air');
allMagicalAttackElements[14].classList.add('e-air');
allMagicalAttackElements[15].classList.add('p-earth');
allMagicalAttackElements[19].classList.add('e-earth');

//left off thinking about what the next step in this game would be. 
// left side is where you can attack from as a player, right side is where the enemy attacks from.
//??

//setting the event listeners to start the magical attack
allMagicalAttackElements[0].addEventListener('click', ()=>{
allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
allMagicalAttackElements[1].classList.add('p-fire');

})

allMagicalAttackElements[5].addEventListener('click', ()=>{
    allMagicalAttackElements[6].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
    allMagicalAttackElements[6].classList.add('p-ice');
})

allMagicalAttackElements[10].addEventListener('click', ()=>{
    allMagicalAttackElements[11].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
    allMagicalAttackElements[11].classList.add('p-air');
})

allMagicalAttackElements[15].addEventListener('click', ()=>{
    allMagicalAttackElements[16].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
    allMagicalAttackElements[16].classList.add('p-earth');
})
//end of setting the event listeners to start the magical attack

//This is the movement mechanism once the attacks are started
setInterval(()=>{
    if(allMagicalAttackElements[1].classList.contains('p-fire')){
        allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[1].classList.remove('p-fire');

        allMagicalAttackElements[2].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
        allMagicalAttackElements[2].classList.add('p-fire');

    } else if(allMagicalAttackElements[2].classList.contains('p-fire')){
            allMagicalAttackElements[2].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[2].classList.remove('p-fire');
    
            allMagicalAttackElements[3].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
            allMagicalAttackElements[3].classList.add('p-fire');
        }
        else if(allMagicalAttackElements[3].classList.contains('p-fire')){
            allMagicalAttackElements[3].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[3].classList.remove('p-fire');
    
            allMagicalAttackElements[4].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
            allMagicalAttackElements[4].classList.add('p-fire');
        }
    },3000);

    setInterval(()=>{
        if(allMagicalAttackElements[6].classList.contains('p-ice')){
            allMagicalAttackElements[6].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[6].classList.remove('p-ice');
    
            allMagicalAttackElements[7].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
            allMagicalAttackElements[7].classList.add('p-ice');
    
        } else if(allMagicalAttackElements[7].classList.contains('p-ice')){
                allMagicalAttackElements[7].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                allMagicalAttackElements[7].classList.remove('p-ice');
        
                allMagicalAttackElements[8].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
                allMagicalAttackElements[8].classList.add('p-ice');
            }
            else if(allMagicalAttackElements[8].classList.contains('p-ice')){
                allMagicalAttackElements[8].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                allMagicalAttackElements[8].classList.remove('p-ice');
        
                allMagicalAttackElements[9].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
                allMagicalAttackElements[9].classList.add('p-ice');
            }
            else if(allMagicalAttackElements[10].classList.contains('p-ice')){
                allMagicalAttackElements[9].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
                allMagicalAttackElements[9].classList.remove('p-ice');
                
                allMagicalAttackElements[10].classList.remove('p-ice');
             
            }
        },3000);

        setInterval(()=>{
            if(allMagicalAttackElements[11].classList.contains('p-air')){
                allMagicalAttackElements[11].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                allMagicalAttackElements[11].classList.remove('p-air');
        
                allMagicalAttackElements[12].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
                allMagicalAttackElements[12].classList.add('p-air');
        
            } else if(allMagicalAttackElements[12].classList.contains('p-air')){
                    allMagicalAttackElements[12].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                    allMagicalAttackElements[12].classList.remove('p-air');
            
                    allMagicalAttackElements[13].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
                    allMagicalAttackElements[13].classList.add('p-air');
                }
                else if(allMagicalAttackElements[13].classList.contains('p-air')){
                    allMagicalAttackElements[13].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                    allMagicalAttackElements[13].classList.remove('p-air');
            
                    allMagicalAttackElements[14].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
                    allMagicalAttackElements[14].classList.add('p-air');
                }
            },3000);

            setInterval(()=>{
                if(allMagicalAttackElements[16].classList.contains('p-earth')){
                    allMagicalAttackElements[16].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                    allMagicalAttackElements[16].classList.remove('p-earth');
            
                    allMagicalAttackElements[17].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
                    allMagicalAttackElements[17].classList.add('p-earth');
            
                } else if(allMagicalAttackElements[17].classList.contains('p-earth')){
                        allMagicalAttackElements[17].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                        allMagicalAttackElements[17].classList.remove('p-earth');
                
                        allMagicalAttackElements[18].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
                        allMagicalAttackElements[18].classList.add('p-earth');
                    }
                    else if(allMagicalAttackElements[18].classList.contains('p-earth')){
                        allMagicalAttackElements[18].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                        allMagicalAttackElements[18].classList.remove('p-earth');
          
                        allMagicalAttackElements[19].classList.remove('p-earth');
                    }
                },3000);




//Random initiating an enemy attack
    setInterval(()=>{
        let randomNumber = Math.floor(Math.random() * 4)
        if(randomNumber === 0) {
            allMagicalAttackElements[3].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`
            allMagicalAttackElements[3].classList.add('e-fire');
        } 
      else if(randomNumber === 1){
          allMagicalAttackElements[8].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`
          allMagicalAttackElements[8].classList.add('e-ice');
        }
      else if(randomNumber === 2){
            allMagicalAttackElements[13].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`
            allMagicalAttackElements[13].classList.add('e-air');
        }
      else if(randomNumber === 3){
            allMagicalAttackElements[18].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`
            allMagicalAttackElements[18].classList.add('e-earth');
      }
        
    }, 3000)
//end of randomaly initiating an enemy attack

//enemies attacks

    setInterval(()=>{
        if(allMagicalAttackElements[3].classList.contains('e-fire')){
            allMagicalAttackElements[3].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[3].classList.remove('e-fire');
    
            allMagicalAttackElements[2].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
            allMagicalAttackElements[2].classList.add('e-fire');
    
        } else if(allMagicalAttackElements[2].classList.contains('e-fire')){
                allMagicalAttackElements[2].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                allMagicalAttackElements[2].classList.remove('e-fire');
        
                allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
                allMagicalAttackElements[1].classList.add('e-fire');
            } 
            else if(allMagicalAttackElements[1].classList.contains('e-fire')){
                allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                allMagicalAttackElements[1].classList.remove('e-fire');
                // allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
                allMagicalAttackElements[0].classList.add('e-fire');
            } 
        },2000);

        setInterval(()=>{
            if(allMagicalAttackElements[8].classList.contains('e-ice')){
                allMagicalAttackElements[8].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                allMagicalAttackElements[8].classList.remove('e-ice');
        
                allMagicalAttackElements[7].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
                allMagicalAttackElements[7].classList.add('e-ice');
        
            } else if(allMagicalAttackElements[7].classList.contains('e-ice')){
                    allMagicalAttackElements[7].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                    allMagicalAttackElements[7].classList.remove('e-ice');
            
                    allMagicalAttackElements[6].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
                    allMagicalAttackElements[6].classList.add('e-ice');
                } 
                else if(allMagicalAttackElements[6].classList.contains('e-ice')){
                    allMagicalAttackElements[6].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                    allMagicalAttackElements[6].classList.remove('e-ice');

                    allMagicalAttackElements[5].classList.add('e-ice');
                } 
            },2000);

            
            setInterval(()=>{
                if(allMagicalAttackElements[13].classList.contains('e-air')){
                    allMagicalAttackElements[13].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                    allMagicalAttackElements[13].classList.remove('e-air');
            
                    allMagicalAttackElements[12].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
                    allMagicalAttackElements[12].classList.add('e-air');
            
                } else if(allMagicalAttackElements[12].classList.contains('e-air')){
                        allMagicalAttackElements[12].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                        allMagicalAttackElements[12].classList.remove('e-air');
            
                        allMagicalAttackElements[11].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
                        allMagicalAttackElements[11].classList.add('e-air');
                    } 
                    else if(allMagicalAttackElements[11].classList.contains('e-air')){
                        allMagicalAttackElements[11].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                        allMagicalAttackElements[11].classList.remove('e-air');
                        
                        allMagicalAttackElements[10].classList.add('e-air');
                       
                        
                    } 
                },2000);

                
                setInterval(()=>{
                    if(allMagicalAttackElements[18].classList.contains('e-earth')){
                        allMagicalAttackElements[18].classList.remove('e-earth');
                        allMagicalAttackElements[18].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                
                        allMagicalAttackElements[17].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
                        allMagicalAttackElements[17].classList.add('e-earth');
                
                    } else if(allMagicalAttackElements[17].classList.contains('e-earth')){
                            allMagicalAttackElements[17].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                            allMagicalAttackElements[17].classList.remove('e-earth');
                    
                            allMagicalAttackElements[16].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
                            allMagicalAttackElements[16].classList.add('e-earth');
                        } 
                        else if(allMagicalAttackElements[16].classList.contains('e-earth')){
                            allMagicalAttackElements[16].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
                            allMagicalAttackElements[16].classList.remove('e-earth');
                    
                            
                            allMagicalAttackElements[15].classList.add('e-earth');
                        } 
                    },2000);
            


















///////////collision detection
setInterval(()=>{
    if(allMagicalAttackElements[3].classList.contains('p-fire') && allMagicalAttackElements[3].classList.contains('e-fire')){
        allMagicalAttackElements[3].classList.remove('p-fire') 
         allMagicalAttackElements[3].classList.remove('e-fire')


        console.log('collision:' + allMagicalAttackElements[3])
    }
    if(allMagicalAttackElements[2].classList.contains('p-fire') && allMagicalAttackElements[2].classList.contains('e-fire')){
        allMagicalAttackElements[2].classList.remove('p-fire') 
         allMagicalAttackElements[2].classList.remove('e-fire')

        console.log('collision: ' +allMagicalAttackElements[2])
    }
    if(allMagicalAttackElements[1].classList.contains('p-fire') && allMagicalAttackElements[1].classList.contains('e-fire')){
        allMagicalAttackElements[1].classList.remove('p-fire') 
         allMagicalAttackElements[1].classList.remove('e-fire')

        console.log('collision: ' +allMagicalAttackElements[1])
    }
    if(allMagicalAttackElements[4].classList.contains('p-fire') && allMagicalAttackElements[4].classList.contains('e-fire')){
        allMagicalAttackElements[4].classList.remove('p-fire') 
         allMagicalAttackElements[4].classList.remove('e-fire')



        console.log('collision: ' +allMagicalAttackElements[4])
        console.log('score')
    }
    if(allMagicalAttackElements[5].classList.contains('p-fire')){
        allMagicalAttackElements[5].classList.remove('p-fire') 


        


        console.log('collision: ' +allMagicalAttackElements[4])
        console.log('score')
    }
   
},1000)
// end of collision detection

setInterval(()=>{
    if(allMagicalAttackElements[6].classList.contains('p-ice') && allMagicalAttackElements[6].classList.contains('e-ice')){
        allMagicalAttackElements[6].classList.remove('p-ice') 
         allMagicalAttackElements[6].classList.remove('e-ice')

    


        console.log('collision:' + allMagicalAttackElements[3])
    }
    if(allMagicalAttackElements[7].classList.contains('p-ice') && allMagicalAttackElements[7].classList.contains('e-ice')){
        allMagicalAttackElements[7].classList.remove('p-ice') 
         allMagicalAttackElements[7].classList.remove('e-ice')

      

        console.log('collision: ' +allMagicalAttackElements[2])
    }
    if(allMagicalAttackElements[8].classList.contains('p-ice') && allMagicalAttackElements[8].classList.contains('e-ice')){
        allMagicalAttackElements[8].classList.remove('p-ice') 
         allMagicalAttackElements[8].classList.remove('e-ice')

  
    }
    if(allMagicalAttackElements[9].classList.contains('p-ice') && allMagicalAttackElements[9].classList.contains('e-ice')){
        allMagicalAttackElements[9].classList.remove('p-ice') 
        


        console.log('score')
    }
    if(allMagicalAttackElements[10].classList.contains('p-ice')){
        allMagicalAttackElements[10].classList.remove('p-ice') 
        


        console.log('score')
    }
   
},1000)
// end of collision detection

setInterval(()=>{
    if(allMagicalAttackElements[16].classList.contains('p-earth') && allMagicalAttackElements[16].classList.contains('e-earth')){
        allMagicalAttackElements[16].classList.remove('p-earth') 
         allMagicalAttackElements[16].classList.remove('e-earth')



        console.log('collision:' + allMagicalAttackElements[3])
    }
    if(allMagicalAttackElements[17].classList.contains('p-earth') && allMagicalAttackElements[17].classList.contains('e-earth')){
        allMagicalAttackElements[17].classList.remove('p-earth') 
         allMagicalAttackElements[17].classList.remove('e-earth')


        console.log('collision: ' +allMagicalAttackElements[2])
    }
    if(allMagicalAttackElements[18].classList.contains('p-earth') && allMagicalAttackElements[18].classList.contains('e-earth')){
        allMagicalAttackElements[18].classList.remove('p-earth') 
         allMagicalAttackElements[18].classList.remove('e-earth')

        console.log('collision: ' +allMagicalAttackElements[1])
    }
    if(allMagicalAttackElements[19].classList.contains('p-earth') && allMagicalAttackElements[18].classList.contains('e-earth')){
        allMagicalAttackElements[19].classList.remove('p-earth') 
        

        console.log('collision: ' +allMagicalAttackElements[1])
    }
  
  
  
   
},1000)
//End of air collision

setInterval(()=>{
    if(allMagicalAttackElements[11].classList.contains('p-earth') && allMagicalAttackElements[11].classList.contains('e-earth')){
        allMagicalAttackElements[11].classList.remove('p-earth') 
         allMagicalAttackElements[11].classList.remove('e-earth')


        console.log('collision:' + allMagicalAttackElements[3])
    }
    if(allMagicalAttackElements[12].classList.contains('p-earth') && allMagicalAttackElements[12].classList.contains('e-earth')){
        allMagicalAttackElements[12].classList.remove('p-earth') 
         allMagicalAttackElements[12].classList.remove('e-earth')

        
        console.log('collision: ' +allMagicalAttackElements[2])
    }
    if(allMagicalAttackElements[13].classList.contains('p-earth') && allMagicalAttackElements[13].classList.contains('e-earth')){
        allMagicalAttackElements[13].classList.remove('p-earth') 
         allMagicalAttackElements[13].classList.remove('e-earth')


        console.log('collision: ' +allMagicalAttackElements[1])
    }
    if(allMagicalAttackElements[14].classList.contains('p-earth') && allMagicalAttackElements[14].classList.contains('e-earth')){
        allMagicalAttackElements[14].classList.remove('p-earth') 
         allMagicalAttackElements[14].classList.remove('e-earth')


        console.log('score')
    }   if(allMagicalAttackElements[15].classList.contains('p-earth')){
        allMagicalAttackElements[15].classList.remove('p-earth') 
        allMagicalAttackElements[14].classList.remove('p-earth') 
        allMagicalAttackElements[14].classList.remove('e-earth')


        console.log('score')
    }
   
},1000)