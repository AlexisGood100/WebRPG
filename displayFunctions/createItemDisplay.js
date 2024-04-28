function createItemDisplay(parent, item, player) {
    let div = document.createElement('div');
    div.classList.add('div-inventory-item');
    let h1NameOf = document.createElement('h1');
    let h1Type = document.createElement('h1');
    let h1Effect = document.createElement('h1');

    let h1Description = document.createElement('h1');
    let buttonEquipItem = document.createElement('button');
    buttonEquipItem.classList.add('button-equip-item');

    let buttonSellItem = document.createElement('button');
    buttonSellItem.innerText = 'Sell';



    buttonSellItem.addEventListener('click', () => {
        player.gold += item.price;
        document.querySelector('#span-player-gold').innerText = wizard.gold;
        console.log(player.gold);
        let newItem = arrayPlayerInventory.splice(item.id, 1);
        giveIDtoList(arrayPlayerInventory);
        div.remove();
    });
    //creating the item in the inventory
    h1NameOf.innerText = `Name: ${item.nameOf}`;
    buttonEquipItem.innerText = 'Equip';
    h1Type.innerText = `Type: ${item.type}`;
    h1Effect.innerText = `Effect: ${item.effectDesc}`;
    h1Description.innerText = `Description: ${item.description}`;
    div.appendChild(h1NameOf);
    div.appendChild(h1Type);
    div.appendChild(h1Description);
    div.appendChild(buttonEquipItem);
    div.appendChild(buttonSellItem);
    div.style.backgroundImage = `url(${item.imgPath})`;
    parent.appendChild(div);



    //Button for Equipping an item.
    buttonEquipItem.addEventListener('click', () => {
        let equipSlotImage = document.querySelectorAll('.div-equip-item-image');
        let newItem = arrayPlayerInventory[item.id]
        giveIDtoList(arrayPlayerInventory)

        if (newItem.type === 'Head') {
            console.log('head')
            itemSlots[0] = newItem
            equipSlotImage[0].style.backgroundImage = `url(${newItem.imgPath})`

        } else if (newItem.type === 'Chest') {
            console.log('chest')
            itemSlots[1] = newItem
            equipSlotImage[1].style.backgroundImage = `url(${newItem.imgPath})`

        } else if (newItem.type === 'Hands') {
            console.log('Hands')
            itemSlots[2] = newItem
            equipSlotImage[2].style.backgroundImage = `url(${newItem.imgPath})`
        } else if (newItem.type === 'Feet') {
            console.log('Feet')
            itemSlots[3] = newItem
            equipSlotImage[3].style.backgroundImage = `url(${newItem.imgPath})`
        } else if (newItem.type === 'Weapon-R') {
            console.log('Weapon-R')
            itemSlots[4] = newItem
            equipSlotImage[4].style.backgroundImage = `url(${newItem.imgPath})`

        } else if (newItem.type === 'Weapon-L') {
            console.log('Weapon-L')
            itemSlots[5] = newItem
            equipSlotImage[5].style.backgroundImage = `url(${newItem.imgPath})`

        } else if (newItem.type === 'Ring-R') {
            console.log('Ring-R')
            itemSlots[6] = newItem
            equipSlotImage[6].style.backgroundImage = `url(${newItem.imgPath})`

        } else if (newItem.type === 'Ring-L') {
            console.log('Ring-L')
            itemSlots[7] = newItem
            equipSlotImage[7].style.backgroundImage = `url(${newItem.imgPath})`
        }

        else if (newItem.type === 'Belt') {
            console.log('Belt')
            itemSlots[8] = newItem
            equipSlotImage[8].style.backgroundImage = `url(${newItem.imgPath})`
        }

        else if (newItem.type === 'Necklace') {
            console.log('Necklace')
            itemSlots[9] = newItem
            equipSlotImage[9].style.backgroundImage = `url(${newItem.imgPath})`
        }


        div.remove()
        player.defense += newItem
    })
}

//Left off trying to make it so the equip doesn't overwrite the currently equipped or do nothing.

//Solution was alerting and returning for now. I tried a few other methods to do this but failed. I could write more code but I'll come back to this later, as the solution is fine for now.