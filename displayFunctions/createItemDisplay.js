function createItemDisplay(parent, item, player) {
    console.log(item);
    // if(item)
    if (item.consumable === true) {

        let div = document.createElement('div');
        div.classList.add('div-inventory-item');
        let h1NameOf = document.createElement('h1');
        let h1Type = document.createElement('h1');
        let h1Effect = document.createElement('h1');
        let h1Description = document.createElement('h1');
        let h1Price = document.createElement('h1')
        let buttonConsumeItem = document.createElement('button');
        buttonConsumeItem.classList.add('button-consume-item');
        buttonConsumeItem.innerText = 'Consume';
        h1Price.innerText = item.defense;

        // let h1ID = document.createElement('h1');
        // id.innerText = newItem.id;
        h1NameOf.innerText = `Name: ${item.nameOf}`;

        h1Type.innerText = `Type: ${item.type}`;
        h1Effect.innerText = `Effect: ${item.effectDesc}`;
        h1Description.innerText = `Description: ${item.description}`;
        div.appendChild(h1NameOf);
        div.appendChild(h1Type);
        div.append(h1Price);
        print(h1Price)
        print(item.defense)
        div.appendChild(h1Description);
        div.appendChild(buttonConsumeItem);
        div.style.backgroundImage = `url(${item.imgPath})`;


        parent.appendChild(div);

        buttonConsumeItem.addEventListener('click', () => {
            if (item.type == 'Healing Potion') {
                displayPlayerClass(player, divPlayerStatistics);
                document.querySelector('.span-player-health').innerText = player.health;

                div.remove();

            }
            if (item.type == 'Mana Potion') {
                displayPlayerClass(player, divPlayerStatistics);

                document.querySelector('.span-player-mana').innerText = player.magicPower;
                div.remove();

            }
        })
    } else if (item.consumable === false) {
        
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
    
            buttonSellItem.addEventListener('click',()=>{
                giveIDtoList(arrayPlayerInventory);
                player.gold += item.price;
                document.querySelector('#span-player-gold').innerText  = wizard.gold;
                console.log(player.gold);
                let newItem = arrayPlayerInventory.splice(item.id, 1);
                  div.remove();
            });
    
            // let h1ID = document.createElement('h1');
            // id.innerText = newItem.id;
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
            
                let allEquipSlots = document.querySelectorAll('.div-equip-slot');
                if (item.type === 'Head' && player.armorset.head.on === false) {
                   

                        allEquipSlots[0].style.backgroundImage = `url(${item.imgPath})`;
                        player.armorset.head.name = item.nameOf;
                        player.armorset.head.type = item.type;
                        console.log(item.defense);
                        player.armorset.head.defense = parseFloat(item.defense);
                        player.armorset.head.imgPath = item.imgPath;
                        player.armorset.head.description = item.description;
                        player.defense += parseFloat(item.defense);
                        player.armorset.head.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                } else if(item.type === 'Head' && player.armorset.head.on === true){
                    alert('Please unequip current helmet and try again.');
                    return;
                }
                
                
                if (item.type === 'Chest') {
                    allEquipSlots[1].style.backgroundImage = `url(${item.imgPath})`;
                    player.armorset.chest.name = item.nameOf;
                    player.armorset.chest.type = item.type;
                    player.armorset.chest.defense += item.defense;
                    player.armorset.chest.imgPath = item.imgPath;
                    player.defense += parseFloat(player.armorset.chest.defense);
                    player.armorset.chest.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                }

                else if (item.type === 'Arms') {
                    allEquipSlots[2].style.backgroundImage = `url(${item.imgPath})`;
                    player.armorset.arms.name = item.nameOf;
                    player.armorset.arms.type = item.type;
                    player.armorset.arms.defense += item.defense;
                    player.armorset.arms.imgPath = item.imgPath;
                    player.defense += parseFloat(player.armorset.arms.defense);
                    player.armorset.arms.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                }

                else if (item.type === 'Hands') {
                    allEquipSlots[3].style.backgroundImage = `url(${item.imgPath})`;
                    player.armorset.hands.name = item.nameOf;
                    player.armorset.hands.type = item.type;
                    player.armorset.hands.defense += item.defense;
                    player.armorset.hands.imgPath = item.imgPath;
                    player.defense += parseFloat(player.armorset.hands.defense);
                    player.armorset.hands.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                }
    
             if (item.type === 'Legs') {
                    allEquipSlots[4].style.backgroundImage = `url(${item.imgPath})`;
                    player.armorset.legs.name = item.nameOf;
                    player.armorset.legs.type = item.type;
                    player.armorset.legs.defense += item.defense;
                    player.armorset.legs.imgPath = item.imgPath;
                    player.defense += parseFloat(player.armorset.legs.defense);
                    player.armorset.legs.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                }
    
             if (item.type === 'Feet') {
                    allEquipSlots[5].style.backgroundImage = `url(${item.imgPath})`;
                    player.armorset.feet.name = item.nameOf;
                    player.armorset.feet.type = item.type;
                    player.armorset.feet.defense += item.defense;
                    player.armorset.feet.imgPath = item.imgPath;
                    player.defense += parseFloat(player.armorset.feet.defense);
                    player.armorset.feet.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                }
                
             if (item.type === 'Weapon-R') {
                    allEquipSlots[6].style.backgroundImage = `url(${item.imgPath})`;
                    player.weaponset.rightHand.name = item.nameOf;
                    player.weaponset.rightHand.type = item.type;
                    player.weaponset.rightHand.defense += item.defense;
                    player.weaponset.rightHand.imgPath = item.imgPath;
                    player.defense += parseFloat(player.weaponset.rightHand.defense);
                    player.weaponset.rightHand.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                }
             if (item.type === 'Weapon-L') {
    
                    allEquipSlots[7].style.backgroundImage = `url(${item.imgPath})`;
                    player.weaponset.leftHand.name = item.nameOf;
                    player.weaponset.leftHand.type = item.type;
                    player.weaponset.leftHand.defense += item.defense;
                    player.weaponset.leftHand.imgPath = item.imgPath;
                    player.defense += parseFloat(player.weaponset.leftHand.defense);
                    player.weaponset.leftHand.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                }
             if (item.type === 'Ring-R') {
                    allEquipSlots[8].style.backgroundImage = `url(${item.imgPath})`;
                    player.armorset.ringRight.name = item.nameOf;
                    player.armorset.ringRight.type = item.type;
                    player.armorset.ringRight.defense += item.defense;
                    player.armorset.ringRight.imgPath = item.imgPath;
                    player.defense += parseFloat(player.armorset.ringRight.defense);
                    player.armorset.ringRight.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                }
             if (item.type === 'Ring-L') {
                    allEquipSlots[9].style.backgroundImage = `url(${item.imgPath})`;
                    player.armorset.ringLeft.name = item.nameOf;
                    player.armorset.ringLeft.type = item.type;
                    player.armorset.ringLeft.defense += item.defense;
                    player.armorset.ringLeft.imgPath = item.imgPath;
                    player.defense += parseFloat(player.armorset.ringLeft.defense);
                    player.armorset.ringLeft.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                }
             if (item.type === 'Belt') {
                    allEquipSlots[10].style.backgroundImage = `url(${item.imgPath})`;
                    player.armorset.belt.name = item.nameOf;
                    player.armorset.belt.type = item.type;
                    player.armorset.belt.defense += item.defense;
                    player.armorset.belt.imgPath = item.imgPath;
                    player.defense += parseFloat(player.armorset.belt.defense);
                    player.armorset.belt.on = true;
                }
             if (item.type === 'Necklace') {
                    allEquipSlots[11].style.backgroundImage = `url(${item.imgPath})`;
                    player.armorset.necklace.name = item.nameOf;
                    player.armorset.necklace.type = item.type;
                    player.armorset.necklace.defense += item.defense;
                    player.armorset.necklace.imgPath = item.imgPath;
                    player.defense += parseFloat(player.armorset.necklace.defense);
                    player.armorset.necklace.on = true;
                        displayPlayerClass(wizard, divPlayerStatistics);
                        div.remove();
                }
            })
        }
            
        } 

        //Left off trying to make it so the equip doesn't overwrite the currently equipped or do nothing.

    //Solution was alerting and returning for now. I tried a few other methods to do this but failed. I could write more code but I'll come back to this later, as the solution is fine for now.