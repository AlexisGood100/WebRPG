//Establishing the player classes that will end up being the wizard object.
const divPlayerClassChoices = document.querySelectorAll('.div-player-choice');
divPlayerClassChoices[0].addEventListener('click', () => {
    wizard = arrayPlayerChoices[0];
    wizard.class = "Priest";
    wizard.imgPath = `${wizard.imgPath}1`
    activatePlayerStatistics(wizard);
    rollDie(divPlayerStatistics)
    displayPlayerClassRollObject(playerClassDiceRollObject, playerClassRollObject)
    displayPlayerClass(wizard, divPlayerStatistics);
    document.querySelector('.div-choose-class').remove();
    document.querySelector('.roll-die-container').classList.remove('hide');
    setBattleButtons();
});

divPlayerClassChoices[1].addEventListener('click', () => {
    wizard = arrayPlayerChoices[1];
    wizard.class = "Fighter";
    wizard.imgPath = `${wizard.imgPath}1`
    activatePlayerStatistics(wizard);
    rollDie(divPlayerStatistics)
    displayPlayerClassRollObject(playerClassDiceRollObject, playerClassRollObject)
    displayPlayerClass(wizard, divPlayerStatistics);
    document.querySelector('.div-choose-class').remove();
    document.querySelector('.roll-die-container').classList.remove('hide');
    setBattleButtons()
});

divPlayerClassChoices[2].addEventListener('click', () => {
    wizard = arrayPlayerChoices[2];
    wizard.class = "Wizard";
    wizard.imgPath = `${wizard.imgPath}1`
    activatePlayerStatistics(wizard);
    rollDie(divPlayerStatistics)
    displayPlayerClassRollObject(playerClassDiceRollObject, playerClassRollObject)
    displayPlayerClass(wizard, divPlayerStatistics);
    document.querySelector('.div-choose-class').remove();
    document.querySelector('.roll-die-container').classList.remove('hide');
    setBattleButtons()
});

divPlayerClassChoices[3].addEventListener('click', () => {
    wizard = arrayPlayerChoices[3];  
    wizard.class = "Assassin";
    wizard.imgPath = `${wizard.imgPath}1`
    wizard.imgPath = arrayPlayerChoices[3].imgPath;
    activatePlayerStatistics(wizard);
    rollDie(divPlayerStatistics)
    displayPlayerClassRollObject(playerClassDiceRollObject, playerClassRollObject)
    displayPlayerClass(wizard, divPlayerStatistics);
    document.querySelector('.div-choose-class').remove();
    document.querySelector('.roll-die-container').classList.remove('hide');
    setBattleButtons()
});

//end of player class choice