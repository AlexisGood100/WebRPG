const buttonFarmSell = document.querySelectorAll('.sell-farm-btn');
const corn_farm_value = document.querySelectorAll('.td-value-farm')
buttonFarmSell[0].addEventListener('click', () => {
    wizard.gold += parseFloat(newFarm.cornValue);
    console.log(wizard.gold);
    newFarm.corn = 0;
    console.log(spanPlayerGold);
    document.querySelector('#span-player-gold').innerText  = wizard.gold;
    corn_farm_value[0].innerText = 0
    newFarm.cornValue = 0
})


buttonFarmSell[1].addEventListener('click', () => {
    wizard.gold += parseFloat(newFarm.carrotsValue);
    console.log(newFarm.carrotsPrice);
        document.querySelector('#span-player-gold').innerText  = wizard.gold;
    console.log(wizard.gold);
    newFarm.carrots = 0;
    corn_farm_value[1].innerText = 0
    newFarm.carrotsValue = 0
})

buttonFarmSell[2].addEventListener('click', () => {
    wizard.gold += parseFloat(newFarm.potatoValue);
    document.querySelector('#span-player-gold').innerText  = wizard.gold;
    console.log(wizard.gold);
    newFarm.potatoes = 0;
    corn_farm_value[2].innerText = 0
    newFarm.potatoValue = 0
})

buttonFarmSell[3].addEventListener('click', () => {
    wizard.gold += parseFloat(newFarm.chickenValue);
    document.querySelector('#span-player-gold').innerText  = wizard.gold;
    console.log(wizard.gold);
    newFarm.chickens = 0;
    corn_farm_value[3].innerText = 0
    newFarm.chickenValue = 0
})

buttonFarmSell[4].addEventListener('click', () => {
    wizard.gold += parseFloat(newFarm.cowPrice);
    document.querySelector('.span-player-gold').innerText = wizard.gold;
    console.log(wizard.gold);
    newFarm.cows = 0;
    corn_farm_value[4].innerText = 0
    newFarm.cowValue = 0
})

buttonFarmSell[5].addEventListener('click', () => {
    wizard.gold += parseFloat(newFarm.pigValue);
    document.querySelector('#span-player-gold').innerText  = wizard.gold;
    console.log(wizard.gold);
    newFarm.pigs = 0;
    corn_farm_value[5].innerText = 0
    newFarm.pigValue = 0
})


buttonFarmSell[6].addEventListener('click', () => {
    if(newFarm.eggs = 0){
        return
    } else{
        wizard.gold += parseFloat(newFarm.eggValue);
        document.querySelector('#span-player-gold').innerText  = wizard.gold;
        console.log(wizard.gold);
        newFarm.eggs = 0;
        corn_farm_value[6].innerText = 0
    newFarm.eggValue = 0
    }
})