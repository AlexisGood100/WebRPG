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
            
                
        })
    }  
} 

        //Left off trying to make it so the equip doesn't overwrite the currently equipped or do nothing.

    //Solution was alerting and returning for now. I tried a few other methods to do this but failed. I could write more code but I'll come back to this later, as the solution is fine for now.