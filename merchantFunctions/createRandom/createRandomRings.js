//creating ring
function createRandomRing(nameOf, imgArray){
    let typeOfChoice = ['Ring-L', 'Ring-R'];
    let x = Math.floor(Math.random() * 2)
    console.log(x);
    let price = Math.floor(Math.random() * currentDifficulty) + 150;
    let defense = Math.floor(Math.random() * currentDifficulty) + 15;
    let imgIndex = Math.floor(Math.random() * imgArray.length)
    let newWeapon = new Item(nameOf, typeOfChoice[x], price, null, null, false, imgArray[`${imgIndex}`], defense)
    
    
console.log(newWeapon);
    return newWeapon;
}