const updatePopulationHarvesting = () => {
    document.querySelector('.h1-population-harvest').innerText = `Population: ${population}`;
    document.querySelector('.h1-population').innerText = `Population: ${population}`;
}
const allHarvestingAreaButtons = document.querySelectorAll('.button-harvest-mana'); //selecting all of the map harvesting buttons
const allPlayerEssence = document.querySelectorAll('.h1-total-essence'); // Selecting all of the essence h1's


allHarvestingAreaButtons[0].addEventListener('click', () => { // Event listener for harvesting button
    if (population >= 2) {
        wizard.fireEssence += 2;
        allPlayerEssence[0].innerText = `Current Essence: ${wizard.fireEssence}`;
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
    
})

allHarvestingAreaButtons[1].addEventListener('click', () => { // Event listener for harvesting button
    if (population >= 2) {
        wizard.airEssence += 2;
        allPlayerEssence[1].innerText = `Current Essence: ${wizard.airEssence}`;
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
})

allHarvestingAreaButtons[2].addEventListener('click', () => { //Event listener for harvesting button
    if (population >= 2) {
        wizard.waterEssence += 2;
        allPlayerEssence[2].innerText = `Current Essence: ${wizard.waterEssence}`;
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
})

allHarvestingAreaButtons[3].addEventListener('click', () => { // Event listener for harvesting button
    if (population >= 2) {
        wizard.earthEssence += 2;
        allPlayerEssence[3].innerText = `Current Essence: ${wizard.earthEssence}`
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
})

allHarvestingAreaButtons[4].addEventListener('click', () => { // Event listener for harvesting button
    if (population >= 2) {
        wizard.lightEssence += 2;
        allPlayerEssence[4].innerText = `Current Essence: ${wizard.lightEssence}`
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
})

allHarvestingAreaButtons[5].addEventListener('click', () => { // Event listener for harvesting button
    if (population >= 2) {
        wizard.darkEssence += 2;
        allPlayerEssence[5].innerText = `Current Essence: ${wizard.darkEssence}`
        population -= 2;
        updatePopulationHarvesting()
        updateEssence(wizard, essenceEssenceCountAll)
    } else {
        alert('Insufficent Population.');
    }
})