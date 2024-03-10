
function unlockNewFamiliars(){
    if(mapLevel % 3 === 0){
        document.querySelector('.div-familiar-container-list div').remove();
        for(let i = 0; i < 10; i++){
            createFamiliarDiv(createRandomFamiliar('any', arrayFamiliarImages, currentDifficulty), arrayPlayerFamiliars, DivFamiliarContainer, DivOwnedFamiliarContainer)
        }
    }
}