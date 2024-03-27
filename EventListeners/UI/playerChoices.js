//Establishing the player classes that will end up being the wizard object.
const divPlayerClassChoices = document.querySelectorAll('.div-player-choice');

function bundleClassChoiceBases(){ //all the events use these lines regardless so I just abstracted them to this function.
    wizard.imgPath = `${wizard.imgPath}1`
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
});

divPlayerClassChoices[1].addEventListener('click', () => {
    wizard = arrayPlayerChoices[1];
    wizard.class = "Fighter";
    bundleClassChoiceBases()
});

divPlayerClassChoices[2].addEventListener('click', () => {
    wizard = arrayPlayerChoices[2];
    wizard.class = "Wizard";
    bundleClassChoiceBases()
});

divPlayerClassChoices[3].addEventListener('click', () => {
    wizard = arrayPlayerChoices[3];  
    wizard.class = "Assassin";
    bundleClassChoiceBases()
});

