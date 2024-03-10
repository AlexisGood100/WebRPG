//creating necklace
function createRandomNecklace(nameOf, imgArray){
    let x = Math.floor(Math.random() * 2)
    console.log(x);
    let price = Math.floor(Math.random() * currentDifficulty) + 150;
    let defense = Math.floor(Math.random() * currentDifficulty) + 15;
    let imgIndex = Math.floor(Math.random() * imgArray.length)
    let newNecklace = new Item(nameOf, 'Necklace', price, null, 'an item', false, imgArray[`${imgIndex}`], defense)
    
    // console.log(imgIndex);
console.log(newNecklace);
    return newNecklace
}