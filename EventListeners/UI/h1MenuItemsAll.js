const divResourceContainer = document.querySelector('.div-resource-container');
const menuContainer = document.querySelector('.div-menu')
const h1MenuItemsAll = document.querySelectorAll(".h1-menu-item");
h1MenuItemsAll[1].addEventListener('click', () => {
    divMerchant.classList.remove('hide');
    divPlayerStatistics.classList.add('hide');
    divInventorySlotAll.forEach((item) => {
        item.classList.add('hide')
    })
    
    document.querySelector('.div-inventory-container-container').classList.add('hide');
    document.querySelector('.div-map-container').classList.add('hide');
    document.querySelector('.div-farming-container').classList.add('hide');
    document.querySelector('.div-familiar-container').classList.add('hide');
    document.querySelector('.div-all-building-container').classList.add('hide');
    document.querySelector('.div-harvesting-container').classList.add('hide')
    
})
h1MenuItemsAll[0].addEventListener('click', () => {
    divPlayerStatistics.classList.remove('hide');
    divMerchant.classList.add('hide');
    divInventorySlotAll.forEach((item) => {
        item.classList.add('hide')
    })
    document.querySelector('.div-inventory-container-container').classList.add('hide');
    document.querySelector('.div-map-container').classList.add('hide');
    document.querySelector('.div-farming-container').classList.add('hide');
    document.querySelector('.div-familiar-container').classList.add('hide');
    document.querySelectorAll('.div-equip-slot').forEach((div)=>{
        div.classList.add('hide');
    })
    document.querySelector('.div-all-building-container').classList.add('hide');
    document.querySelector('.div-harvesting-container').classList.add('hide')
})

const divMerchant = document.querySelector('.div-merchant');

const divInventorySlotAll = document.querySelectorAll('.div-equip-slot')
const divEquip = document.querySelector('.div-player-equip-area')
h1MenuItemsAll[2].addEventListener('click', () => {

divEquip.classList.remove('hide');
document.querySelectorAll('.div-equip-slot').forEach((div)=>{
    div.classList.remove('hide');
})

    //Adding hide
    document.querySelector('.div-inventory-container-container').classList.add('hide');
    document.querySelector('.div-map-container').classList.add('hide');
    document.querySelector('.div-farming-container').classList.add('hide');
    document.querySelector('.div-familiar-container').classList.add('hide');
    divMerchant.classList.add('hide');
    divPlayerStatistics.classList.add('hide');
    
    document.querySelector('.div-all-building-container').classList.add('hide');
    document.querySelector('.div-harvesting-container').classList.add('hide')
});


h1MenuItemsAll[3].addEventListener('click', () => {
  document.querySelector('.div-inventory-container-container').classList.remove('hide');
  divInventorySlotAll.forEach((item) => {
    item.classList.remove('hide')
})
  //Adding hide
  document.querySelector('.div-map-container').classList.add('hide');
    
  divPlayerStatistics.classList.add('hide');
  divMerchant.classList.add('hide');

  document.querySelector('.div-familiar-container').classList.add('hide');
  document.querySelector('.div-farming-container').classList.add('hide');
  
  document.querySelector('.div-all-building-container').classList.add('hide');
  document.querySelectorAll('.div-equip-slot').forEach((div)=>{
    div.classList.add('hide');
})
document.querySelector('.div-harvesting-container').classList.add('hide');
})



h1MenuItemsAll[4].addEventListener('click', () => {
    //Removing Hide
    document.querySelector('.div-familiar-container').classList.remove('hide');

    //Adding Hide
    divPlayerStatistics.classList.add('hide');
    document.querySelector('.div-inventory-container-container').classList.add('hide');
    divMerchant.classList.add('hide');
    
    divInventorySlotAll.forEach((item) => {
        item.classList.add('hide')
    })
    document.querySelector('.div-farming-container').classList.add('hide');
    document.querySelector('.div-map-container').classList.add('hide');
    document.querySelectorAll('.div-equip-slot').forEach((div)=>{
        div.classList.add('hide');
    })
    document.querySelector('.div-all-building-container').classList.add('hide');
    document.querySelector('.div-harvesting-container').classList.add('hide');
})

h1MenuItemsAll[5].addEventListener('click', () => {
    document.querySelector('.div-farming-container').classList.remove('hide');
//Adding hide
    document.querySelector('.div-map-container').classList.add('hide');
    document.querySelector('.div-familiar-container').classList.add('hide');
    document.querySelector('.div-inventory-container-container').classList.add('hide');
    divMerchant.classList.add('hide');
    divPlayerStatistics.classList.add('hide');
    divInventorySlotAll.forEach((item) => {
        item.classList.add('hide')
    })
    document.querySelector('.div-all-building-container').classList.add('hide');
    document.querySelectorAll('.div-equip-slot').forEach((div)=>{
        div.classList.add('hide');
    })
    document.querySelector('.div-harvesting-container').classList.add('hide')
})

h1MenuItemsAll[6].addEventListener('click', () => {
    document.querySelector('.div-map-container').classList.remove('hide');
    //Adding hide
    document.querySelector('.div-inventory-container-container').classList.add('hide');
    divPlayerStatistics.classList.add('hide');
    divMerchant.classList.add('hide');
    divInventorySlotAll.forEach((item) => {
        item.classList.add('hide')
    })

    document.querySelector('.div-familiar-container').classList.add('hide');
    document.querySelector('.div-farming-container').classList.add('hide');
    document.querySelectorAll('.div-equip-slot').forEach((div)=>{
        div.classList.add('hide');
    })
    document.querySelector('.div-all-building-container').classList.add('hide');
    document.querySelector('.div-harvesting-container').classList.add('hide')
})


h1MenuItemsAll[7].addEventListener('click', () => {
    document.querySelector('.div-all-building-container').classList.remove('hide');

//Adding hide
    document.querySelector('.div-inventory-container-container').classList.add('hide');
    document.querySelector('.div-farming-container').classList.add('hide');
    document.querySelector('.div-map-container').classList.add('hide');
    document.querySelector('.div-familiar-container').classList.add('hide');
 
    divMerchant.classList.add('hide');
    divPlayerStatistics.classList.add('hide');
    divInventorySlotAll.forEach((item) => {
        item.classList.add('hide')
    })
  
    document.querySelectorAll('.div-equip-slot').forEach((div)=>{
        div.classList.add('hide');
    })
    document.querySelector('.div-harvesting-container').classList.add('hide')
})


h1MenuItemsAll[8].addEventListener('click', () => {
    document.querySelector('.div-harvesting-container').classList.remove('hide')
    //Adding hide
    document.querySelector('.div-all-building-container').classList.add('hide');
    document.querySelector('.div-inventory-container-container').classList.add('hide');
    document.querySelector('.div-farming-container').classList.add('hide');
    document.querySelector('.div-map-container').classList.add('hide');
    document.querySelector('.div-familiar-container').classList.add('hide');
 
    divMerchant.classList.add('hide');
    divPlayerStatistics.classList.add('hide');
    divInventorySlotAll.forEach((item) => {
        item.classList.add('hide')
    })
  
    document.querySelectorAll('.div-equip-slot').forEach((div)=>{
        div.classList.add('hide');
    })

})