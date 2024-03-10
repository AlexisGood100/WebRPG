// Unequiping an item.
let divEquips = document.querySelectorAll('.div-equip-slot');
let buttonUnequip = document.querySelectorAll('.button-unequip');
// Helmet Unequip
buttonUnequip[0].addEventListener('click', () => {
    let helmetDiv = document.querySelectorAll('.div-equip-slot')[0];
    console.log(helmetDiv)
    if (wizard.armorset.head.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.armorset.head.name, wizard.armorset.head.type, 10, () => {
            console.log(wizard.armorset.head.defense);
            
        }, wizard.armorset.head.description, false, wizard.armorset.head.imgPath, wizard.armorset.head.defense);
        
        wizard.defense -= parseFloat(wizard.armorset.head.defense);
        helmetDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.armorset.head.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
        
    }
});
//Torso Unequip
buttonUnequip[1].addEventListener('click', () => {
    let chestDiv = document.querySelectorAll('.div-equip-slot')[1];
    console.log(chestDiv)
    if (wizard.armorset.chest.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.armorset.chest.name, wizard.armorset.chest.type, 10, () => {
            console.log(wizard.armorsechest.defense);
            console.log(wizard.armorset.head.defense);
        }, wizard.armorset.chest.description, false, wizard.armorset.chest.imgPath, wizard.armorset.chest.defense);
        
        wizard.defense -= parseFloat(wizard.armorset.chest.defense);
        chestDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.armorset.chest.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }
});
//arms Unequip
buttonUnequip[2].addEventListener('click', () => {
    let armsDiv = document.querySelectorAll('.div-equip-slot')[2];
    console.log(armsDiv)
    if (wizard.armorset.arms.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.armorset.arms.name, wizard.armorset.arms.type, 10, () => {
            console.log(wizard.armorset.arms.defense);
            console.log(wizard.armorset.arms.defense);
        }, wizard.armorset.arms.description, false, wizard.armorset.arms.imgPath, wizard.armorset.arms.defense);
        
        wizard.defense -= parseFloat(wizard.armorset.arms.defense);
        armsDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.armorset.arms.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }
});
//Hands
buttonUnequip[3].addEventListener('click', () => {
    let = handsDiv = document.querySelectorAll('.div-equip-slot')[3];
    console.log(handsDiv)
    if (wizard.armorset.hands.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.armorset.hands.name, wizard.armorset.hands.type, 10, () => {
            console.log(wizard.armorset.hands.defense);
            console.log(wizard.armorset.hands.defense);
        }, wizard.armorset.hands.description, false, wizard.armorset.hands.imgPath, wizard.armorset.hands.defense);
        
        wizard.defense -= parseFloat(wizard.armorset.hands.defense);
        handsDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.armorset.hands.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }
});
// Legs
buttonUnequip[4].addEventListener('click', () => {
    let legsDiv = document.querySelectorAll('.div-equip-slot')[4];
    console.log(legsDiv)
    if (wizard.armorset.legs.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.armorset.legs.name, wizard.armorset.legs.type, 10, () => {
            console.log(wizard.armorset.legs.defense);
            console.log(wizard.armorset.legs.defense);
        }, wizard.armorset.legs.description, false, wizard.armorset.legs.imgPath, wizard.armorset.legs.defense);
        
        wizard.defense -= parseFloat(wizard.armorset.legs.defense);
        legsDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.armorset.legs.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }
});
// Feet
buttonUnequip[5].addEventListener('click', () => {
    let feetDiv = document.querySelectorAll('.div-equip-slot')[5];
    console.log(feetDiv)
    if (wizard.armorset.feet.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.armorset.feet.name, wizard.armorset.feet.type, 10, () => {
            console.log(wizard.armorset.feet.defense);
            console.log(wizard.armorset.feet.defense);
        }, wizard.armorset.feet.description, false, wizard.armorset.feet.imgPath, wizard.armorset.feet.defense);
        
        wizard.defense -= parseFloat(wizard.armorset.feet.defense);
        feetDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.armorset.feet.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }
});

buttonUnequip[6].addEventListener('click', () => {
    let weaponRightDiv = document.querySelectorAll('.div-equip-slot')[6];
    console.log(weaponRightDiv)
    if (wizard.weaponset.rightHand.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.weaponset.rightHand.name, wizard.weaponset.rightHand.type, 10, () => {
            console.log(wizard.weaponset.weaponRightDiv.defense);
            console.log(wizard.weaponset.rightHand.defense);
        }, wizard.weaponset.rightHand.description, false, wizard.weaponset.rightHand.imgPath, wizard.weaponset.rightHand.defense);
        
        wizard.defense -= parseFloat(wizard.weaponset.rightHand.defense);
        weaponRightDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.weaponset.rightHand.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }



});

buttonUnequip[7].addEventListener('click', () => {
    let weaponleftDiv = document.querySelectorAll('.div-equip-slot')[7];
    console.log(weaponleftDiv)
    if (wizard.weaponset.leftHand.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.weaponset.leftHand.name, wizard.weaponset.leftHand.type, 10, () => {
            console.log(wizard.armorset.leftHand.defense);
            console.log(wizard.weaponset.leftHand.defense);
        }, wizard.weaponset.leftHand.description, false, wizard.weaponset.leftHand.imgPath, wizard.weaponset.leftHand.defense);
        
        wizard.defense -= parseFloat(wizard.weaponset.leftHand.defense);
        weaponleftDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.weaponset.leftHand.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }



});

buttonUnequip[8].addEventListener('click', () => {
    let ringRightDiv = document.querySelectorAll('.div-equip-slot')[8];
    console.log(ringRightDiv)
    if (wizard.armorset.ringRight.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.armorset.ringRight.name, wizard.armorset.ringRight.type, 10, () => {
            console.log(wizard.armorset.ringRight.defense);
            console.log(wizard.armorset.ringRight.defense);
        }, wizard.armorset.ringRight.description, false, wizard.armorset.ringRight.imgPath, wizard.armorset.ringRight.defense);
        
        wizard.defense -= parseFloat(wizard.armorset.ringRight.defense);
        ringRightDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.armorset.ringRight.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }
});

buttonUnequip[9].addEventListener('click', () => {
    let ringLeftDiv = document.querySelectorAll('.div-equip-slot')[9];
    console.log(ringLeftDiv)
    if (wizard.armorset.ringLeft.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.armorset.ringLeft.name, wizard.armorset.ringLeft.type, 10, () => {
            console.log(wizard.armorset.ringLeft.defense);
            console.log(wizard.armorset.ringLeft.defense);
        }, wizard.armorset.ringLeft.description, false, wizard.armorset.ringLeft.imgPath, wizard.armorset.ringLeft.defense);
        
        wizard.defense -= parseFloat(wizard.armorset.ringLeft.defense);
        ringLeftDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.armorset.ringRight.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }
});

buttonUnequip[10].addEventListener('click', () => {
    let beltDiv = document.querySelectorAll('.div-equip-slot')[10];
    console.log(beltDiv)
    if (wizard.armorset.belt.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.armorset.belt.name, wizard.armorset.belt.type, 10, () => {
            console.log(wizard.armorset.belt.defense);
            console.log(wizard.armorset.belt.defense);
        }, wizard.armorset.belt.description, false, wizard.armorset.belt.imgPath, wizard.armorset.belt.defense);
        
        wizard.defense -= parseFloat(wizard.armorset.belt.defense);
        beltDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.armorset.belt.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }
});

buttonUnequip[11].addEventListener('click', () => {
    let necklaceDiv = document.querySelectorAll('.div-equip-slot')[11];
    console.log(necklaceDiv)
    if (wizard.armorset.necklace.on === false) {
        return;
    } else {
        let newItem = new Item(wizard.armorset.necklace.name, wizard.armorset.necklace.type, 10, () => {
            console.log(wizard.armorset.necklace.defense);
            console.log(wizard.armorset.necklace.defense);
        }, wizard.armorset.necklace.description, false, wizard.armorset.necklace.imgPath, wizard.armorset.necklace.defense);
        
        wizard.defense -= parseFloat(wizard.armorset.necklace.defense);
        necklaceDiv.style.backgroundImage = `url(${null})`;
        createItemDisplay(divPlayerInventory, newItem, wizard)
        wizard.armorset.necklace.on = false;
        displayPlayerClass(wizard, divPlayerStatistics);
    }
});