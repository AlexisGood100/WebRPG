const textboxInstructions = document.querySelector('.textbox-instructions');
const buttonInstructionsAll = document.querySelectorAll('.button-instructions');

buttonInstructionsAll[0].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[0];
})
buttonInstructionsAll[1].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[1];
})
buttonInstructionsAll[2].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[2];
})
buttonInstructionsAll[3].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[3];
})
buttonInstructionsAll[4].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[4];
})
buttonInstructionsAll[5].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[5];
})
buttonInstructionsAll[6].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[6];
})
buttonInstructionsAll[7].addEventListener('click', ()=>{
    textboxInstructions.innerText = allOptionsText[7];
})

let allOptionsText = [];
let instructionsForMerchant = 'Purchase an item and it will go to your inventory.';
let instructionsForBuilding = 'Build Houses to get population.';
let instructionsForMap = 'Explore Map by clicking on individual levels. Battle and earn rewards.';
let instructionsForFamiliars = 'Buy Familiars.';
let instructionsForCollecting = 'Collect Various Farm Items';
let instructionsForEquipArea = 'Unequip Items.';
let instructionsForInventory = 'Equip or Sell Item.';
let instructionsForHarvest = 'Harvest Mana to buy Familiars.';

allOptionsText.push(instructionsForMerchant);
allOptionsText.push(instructionsForInventory);
allOptionsText.push(instructionsForEquipArea); 
allOptionsText.push(instructionsForFamiliars);
allOptionsText.push(instructionsForCollecting); 
allOptionsText.push(instructionsForMap);
allOptionsText.push(instructionsForBuilding);
allOptionsText.push(instructionsForHarvest);