const btnChangeProfileImg = document.querySelector('.btn-change-profile-img');
const divPlayerImg = document.querySelector('.div-player-background-img');
let class_type = null;
console.log(divPlayerImg)
let imageIndex = 0;
let path = `./images/playerClass/${class_type}Profile${imageIndex}.jpg`

function bundlePaths(indicator){
    if(indicator === 1){
        path = `./images/playerClass/${class_type}Profile.jpg`
        imageIndex +=1
        divPlayerImg.style.backgroundImage = `url(${path})`
    } else {
        path = `./images/playerClass/${class_type}Profile${imageIndex}.jpg`
        imageIndex +=1
        divPlayerImg.style.backgroundImage = `url(${path})`
    }
    
}

function changeProfileImage(wizard){
    if(imageIndex > 3){
        imageIndex = 0;
    }

if(wizard.class === 'Priest'){
    class_type = 'priest'
    if(imageIndex === 0){
       bundlePaths(1)
    } else {
     bundlePaths()
    }
}

if(wizard.class === 'Assassin'){
    class_type = 'assassin'
    if(imageIndex === 0){
        bundlePaths(1)
     } else {
      bundlePaths()
     }
}
if(wizard.class === 'Wizard'){
    class_type = 'wizard'
    if(imageIndex === 0){
        bundlePaths(1)
     } else {
      bundlePaths()
     }
}
if(wizard.class === 'Fighter'){
    class_type = 'fighter'
    if(imageIndex === 0){
        bundlePaths(1)
     } else {
      bundlePaths()
     }
}
}

btnChangeProfileImg.addEventListener('click', ()=>{
    changeProfileImage(wizard)
})