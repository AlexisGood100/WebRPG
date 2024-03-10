//creating legs
function createRandomLegs(nameOf, imgArray){
    let x = Math.floor(Math.random() * 2)
    console.log(x);
    let price = Math.floor(Math.random() * currentDifficulty) + 150;
    let defense = Math.floor(Math.random() * currentDifficulty) + 15;
    let imgIndex = Math.floor(Math.random() * imgArray.length)
    let newHats = new Item(nameOf, 'Boots', price, null, null, false, imgArray[`${imgIndex}`], defense)
    
   
console.log(newHats);
    return newHats;
}