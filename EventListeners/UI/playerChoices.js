//Establishing the player classes that will end up being the wizard object.
const divPlayerClassChoices = document.querySelectorAll('.div-player-choice');
const imgForClass = document.querySelector('.div-player-image')
const divContainerPlayerSide = document.querySelector('.div-container-player-side-img')
const allStartClassChoiceImages = document.querySelectorAll('.div-class-image');
allStartClassChoiceImages[0].style.backgroundImage = `url(${'./images/playerClass/priestProfile.jpg'})`
allStartClassChoiceImages[1].style.backgroundImage = `url(${'./images/playerClass/fighterProfile.jpg'})`
allStartClassChoiceImages[2].style.backgroundImage = `url(${'./images/playerClass/wizardProfile.jpg'})`
allStartClassChoiceImages[3].style.backgroundImage = `url(${'./images/playerClass/assassinProfile.jpeg'})`

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
    wizard.class = "Priest";
    bundleClassChoiceBases()
    imgForClass.style.backgroundImage = `url(${'./images/playerClass/priestProfile1.jpg'})`
    divContainerPlayerSide.style.backgroundImage = `url(${'./images/playerClass/priestProfile1.jpg'})`
    wizard.originalImg = './images/playerClass/priestProfile1.jpg'
});

divPlayerClassChoices[1].addEventListener('click', () => {
    wizard = arrayPlayerChoices[1];
    wizard.class = "Fighter";
    imgForClass.style.backgroundImage = `url(${'./images/playerClass/fighterProfile1.jpg'})`
    divContainerPlayerSide.style.backgroundImage = `url(${'./images/playerClass/fighterProfile1.jpg'})`
    wizard.originalImg = `./images/playerClass/fighterProfile1.jpg`
    bundleClassChoiceBases()
});

divPlayerClassChoices[2].addEventListener('click', () => {
    wizard = arrayPlayerChoices[2];
    wizard.class = "Wizard";
    imgForClass.style.backgroundImage = `url(${'./images/playerClass/wizardProfile1.jpg'})`
    divContainerPlayerSide.style.backgroundImage = `url(${'./images/playerClass/wizardProfile1.jpg'})`
    wizard.originalImg = './images/playerClass/wizardProfile1.jpg'
    bundleClassChoiceBases()
});

divPlayerClassChoices[3].addEventListener('click', () => {
    wizard = arrayPlayerChoices[3];  
    wizard.class = "Assassin";
    imgForClass.style.backgroundImage = `url(${'./images/playerClass/assassinProfile1.jpg'})`
    divContainerPlayerSide.style.backgroundImage = `url(${'./images/playerClass/assassinProfile1.jpg'})`
    wizard.originalImg = './images/playerClass/assassinProfile1.jpg'
    bundleClassChoiceBases()
});

