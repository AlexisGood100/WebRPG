const buttonBuildHouse = document.querySelectorAll('.button-build-house');
let house_limit = 3
let current_houses_medium = 0
let current_houses_large = 0
let current_houses = 0
function display_house_element_updates(){
    setInterval(()=>{
        updateEssenceEssencePage(wizard, essenceEssenceCountAll)
    }, 1000)
}

const updateWoodStoneAndGold = () => {
    tdBuildHousePlayerHave[0].innerText = wizard.gold;
    tdBuildHousePlayerHave[1].innerText = resourceFarm_.wood;
    tdBuildHousePlayerHave[2].innerText = resourceFarm_.stone;
    tdBuildHousePlayerHave[3].innerText = resourceFarm_.lumber;
}
const updateFarmResourceActual = () =>{
    resourceFarm_.wood -= resourceFarm_.woodRL;
    resourceFarm_.stone -= resourceFarm_.stoneRL;
    resourceFarm_.lumber -= resourceFarm_.lumberRL;
}

const houseContainer = document.querySelector('.div-house-container')
buttonBuildHouse[0].addEventListener('click', ()=>{
    current_houses +=1
    if(resourceFarm_.wood >= resourceFarm_.woodPlankRS && resourceFarm_.stone >= resourceFarm_.stoneBlockRS && resourceFarm_.lumber >= resourceFarm_.lumberRS && wizard.gold >= 0){
        population += 2;
        wizard.gold -= resourceFarm_.goldRS;
        updateFarmResourceActual()
        h1Population.innerText = `Population: ${population}`;
        document.querySelector('.h1-population-harvest').innerText = `Population: ${population}`;
     updateWoodStoneAndGold();
    let new_house = new House()
    new_house.create_essence_clock(wizard);
    if(current_houses <= house_limit){
        new_house.insert_house(houseContainer, 'small')
        display_house_element_updates()
    }
    display_house_element_updates()

    } else {
        alert('Insufficient Resources');
    }
})

buttonBuildHouse[1].addEventListener('click', ()=>{
    current_houses_medium +=1
    if(resourceFarm_.wood >= resourceFarm_.woodPlankRM && resourceFarm_.stone >= resourceFarm_.stoneBlockRM && resourceFarm_.lumber >= resourceFarm_.lumberRM && wizard.gold >= resourceFarm_.goldRM){
    population += 5;
    wizard.gold -= resourceFarm_.goldRM;
    updateFarmResourceActual()
    h1Population.innerText = `Population: ${population}`;
    document.querySelector('.h1-population-harvest').innerText = `Population: ${population}`;
let new_house = new House()
    new_house.create_essence_clock(wizard);
    if(current_houses <= house_limit){
        new_house.insert_house(houseContainer, 'medium')
        display_house_element_updates()
        
    }
    display_house_element_updates()
    } else {
        alert('Insufficient Resources')
    }
})

buttonBuildHouse[2].addEventListener('click', ()=>{
    current_houses_large +=1
    if(resourceFarm_.wood >= resourceFarm_.woodPlankRL && resourceFarm_.stone >= resourceFarm_.stoneBlockRL && resourceFarm_.lumber >= resourceFarm_.lumberRL && wizard.gold >= resourceFarm_.goldRL){
    population += 7;
    wizard.gold -= resourceFarm_.goldRL;
    updateFarmResourceActual()
    h1Population.innerText = `Population: ${population}`;
    document.querySelector('.h1-population-harvest').innerText = `Population: ${population}`;
    updateWoodStoneAndGold();
let new_house = new House()
    new_house.create_essence_clock(wizard);
    if(current_houses <= house_limit){
        new_house.insert_house(houseContainer, 'large')
        display_house_element_updates()
    }
    } else {
        alert('Insufficient Resources');
    }
})


//

const tdBuildHouseRequirementsAllSmall = document.querySelectorAll('.td-requirement-build-house-small');
const tdBuildHouseRequirementsAllMedium = document.querySelectorAll('.td-requirement-build-house-medium');
const tdBuildHouseRequirementsAllLarge = document.querySelectorAll('.td-requirement-build-house-large');
const tdBuildHousePlayerHave = document.querySelectorAll('.td-player-resources');
