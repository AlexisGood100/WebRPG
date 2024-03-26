const buttonFarmSell = document.querySelectorAll('.sell-farm-btn');
const farm_value = document.querySelectorAll('.td-value-farm')
buttonFarmSell[0].addEventListener('click', () => {
    wizard.addGold(parseFloat(newFarm.cornValue));
    newFarm.corn = 0;
    console.log(spanPlayerGold);
    document.querySelector('#span-player-gold').innerText  = wizard.gold;
    farm_value[0].innerText = 0
    newFarm.cornValue = 0
})


buttonFarmSell[1].addEventListener('click', () => {
    wizard.addGold(parseFloat(newFarm.carrotsValue));
        document.querySelector('#span-player-gold').innerText  = wizard.gold;
    newFarm.carrots = 0;
    farm_value[1].innerText = 0
    newFarm.carrotsValue = 0
})

buttonFarmSell[2].addEventListener('click', () => {
    wizard.addGold(parseFloat(newFarm.potatoValue));
    document.querySelector('#span-player-gold').innerText  = wizard.gold;
    newFarm.potatoes = 0;
    farm_value[2].innerText = 0
    newFarm.potatoValue = 0
})

buttonFarmSell[3].addEventListener('click', () => {
    wizard.addGold(parseFloat(newFarm.chickenValue));
    document.querySelector('#span-player-gold').innerText  = wizard.gold;
    newFarm.chickens = 0;
    farm_value[3].innerText = 0
    newFarm.chickenValue = 0
})

buttonFarmSell[4].addEventListener('click', () => {
    wizard.addGold(parseFloat(newFarm.cowValue));
    document.querySelector('.span-player-gold').innerText = wizard.gold;
    newFarm.cows = 0;
    farm_value[4].innerText = 0
    newFarm.cowValue = 0
})

buttonFarmSell[5].addEventListener('click', () => {
    wizard.addGold(parseFloat(newFarm.pigValue));
    document.querySelector('#span-player-gold').innerText  = wizard.gold;
    newFarm.pigs = 0;
    farm_value[5].innerText = 0
    newFarm.pigValue = 0
})

// Not using this right now coming back to fix it later.
buttonFarmSell[6].addEventListener('click', () => {
    if(newFarm.eggs = 0){
        return
    } else{
        wizard.gold += parseFloat(newFarm.eggValue);
        document.querySelector('#span-player-gold').innerText  = wizard.gold;
        newFarm.eggs = 0;
        farm_value[6].innerText = 0
    newFarm.eggValue = 0
    }
})