function createMerchantDisplayItem(newItem, parent, array, playerInventoryArray, divPlayerInventory){
        let buttonBuy = document.createElement('button');
        buttonBuy.classList.add('button-buy')
        buttonBuy.innerText = 'Buy';
        let div = document.createElement('div');
        div.classList.add('div-merchant-item');
        let h1NameOf = document.createElement('h1');
        let h1Type = document.createElement('h1');
        let h1Price = document.createElement('h1');
        let h1Defense = document.createElement('h1');
        let h1Effect = document.createElement('h1');
        let h1Description = document.createElement('h1');
        h1Defense.innerText = `Defense: ${newItem.defense}`
        h1NameOf.innerText = `Name: ${newItem.nameOf}`;
        h1Type.innerText = `Type: ${newItem.type}`;
        h1Price.innerText = `Price: ${newItem.price}`;
        h1Effect.innerText = `Effect: ${newItem.effectDesc}`;
        h1Description.innerText = `Description: ${newItem.description}`;
        div.appendChild(h1NameOf);
        div.appendChild(h1Type);
        div.appendChild(h1Price);
        div.appendChild(h1Defense)
        div.appendChild(h1Description);
        div.appendChild(buttonBuy);
    div.style.backgroundImage=`url(${newItem.imgPath})`;
    parent.appendChild(div);
    
    //buy button
    buttonBuy.addEventListener('click', ()=>{
        let checkItem = array[newItem.id]
        if(wizard.gold >= checkItem.price){
        let item = array.splice(newItem.id, 1);
        let nodeList = document.querySelectorAll('.div-merchant-item');
        giveIDtoList(arrayMerchantInventory);
            div.remove();
            console.log(nodeList);
         wizard.gold -= parseFloat(item[0].price);
         playerInventoryArray.push(item[0]);
         createItemDisplay(divPlayerInventory, item[0], wizard);
         document.querySelector('#span-player-gold').innerText  = wizard.gold; 
        } else {alert('Insufficent gold')}
    });
    }




