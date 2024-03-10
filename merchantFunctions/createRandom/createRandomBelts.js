
//creating belts
function createRandomBelts(nameOf, imgArray){
    let x = Math.floor(Math.random() * 2)
    console.log(x);
    let price = Math.floor(Math.random() * currentDifficulty) + 150;
    let defense = Math.floor(Math.random() * currentDifficulty) + 15;
    let imgIndex = Math.floor(Math.random() * imgArray.length)
    let newBelt = new Item(nameOf, 'Belt', price, null, null, false, imgArray[`${imgIndex}`], defense)
    
    // console.log(imgIndex);
console.log(newBelt);
    return newBelt;
}