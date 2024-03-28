//Establishing the player classes that will end up being the wizard object.
const divPlayerClassChoices = document.querySelectorAll('.div-player-choice');

// allStartClassChoiceImages[0].style.backgroundImage = `url(${'./images/playerClass/priestProfile.jpg'})`
function bundleClassChoiceBases(){ //all the events use these lines regardless so I just abstracted them to this function.
    activatePlayerStatistics(wizard);
    rollDie(divPlayerStatistics)
    displayPlayerClassRollObject(playerClassDiceRollObject, playerClassRollObject)
    displayPlayerClass(wizard, divPlayerStatistics);
    document.querySelector('.div-choose-class').remove();
    document.querySelector('.roll-die-container').classList.remove('hide');
    setBattleButtons()
    
}



divPlayerClassChoices[0].addEventListener('click', () => {
    wizard = arrayPlayerChoices[0];
    let imgForClass = document.querySelector('.div-player-background-img')
    console.log(imgForClass)
    wizard.class = "Priest";
    bundleClassChoiceBases()
    imgForClass.style.backgroundImage = `url(${'./images/playerClass/priestProfile.jpg'})`
});

divPlayerClassChoices[1].addEventListener('click', () => {
    wizard = arrayPlayerChoices[1];
    wizard.class = "Fighter";
    divPlayerStatistics.style.backgroundImage = `url(${'./images/playerClass/fighterProfile.jpg'})`
    bundleClassChoiceBases()
});

divPlayerClassChoices[2].addEventListener('click', () => {
    wizard = arrayPlayerChoices[2];
    wizard.class = "Wizard";
    divPlayerStatistics.style.backgroundImage = `url(${'./images/playerClass/wizardProfile.jpg'})`
    bundleClassChoiceBases()
});

divPlayerClassChoices[3].addEventListener('click', () => {
    wizard = arrayPlayerChoices[3];  
    wizard.class = "Assassin";
    divPlayerStatistics.style.backgroundImage = `url(${'./images/playerClass/assassinProfile.jpeg'})`
    bundleClassChoiceBases()
});

