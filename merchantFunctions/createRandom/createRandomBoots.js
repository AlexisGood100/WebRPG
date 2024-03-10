
//creating boots
function randomNumberMaker(bound){
    let randomNumber = Math.floor(Math.random() * bound) + 1
    return randomNumber;
}
function createRandomBoots(nameOf, imgArray){
    let price = randomNumberMaker(200);
    let defense = randomNumberMaker(5) * currentDifficulty;
    let imgIndex = Math.floor(Math.random() * imgArray.length)
    let newBoots = new Item(nameOf, 'Boots', price, null, null, false, imgArray[`${imgIndex}`], defense)
    
    // console.log(imgIndex);
console.log(newBoots);
    return newBoots;
}