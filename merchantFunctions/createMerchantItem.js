function createMerchantItem(newItem, parent, array, arrayPlayerInventory, divPlayerInventory){
    array.push(newItem);
    giveIDtoList(array);
    createMerchantDisplayItem(newItem, parent, array, arrayPlayerInventory, divPlayerInventory);
    }

    