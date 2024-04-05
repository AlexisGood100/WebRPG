const btnChangeProfileImg = document.querySelector('.btn-change-profile-img');
const divPlayerImg = document.querySelector('.div-player-background-img');
let class_type = null;
console.log(divPlayerImg)
let imageIndex = 1;
let path = `./images/playerClass/${class_type}Profile1${imageIndex}.jpg`

function bundlePaths(){
        path = `./images/playerClass/${class_type}Profile${imageIndex}.jpg`
        imageIndex +=1
        divPlayerImg.style.backgroundImage = `url(${path})`    
}

function changeProfileImage(wizard){
    if(imageIndex > 3){
        imageIndex = 1;
    }

if(wizard.class === 'Priest'){
    class_type = 'priest'
       bundlePaths()
}

if(wizard.class === 'Assassin'){
    class_type = 'assassin'
      bundlePaths()
}
if(wizard.class === 'Wizard'){
    class_type = 'wizard'
      bundlePaths()
}
if(wizard.class === 'Fighter'){
    class_type = 'fighter'
      bundlePaths()
}
}

btnChangeProfileImg.addEventListener('click', ()=>{
    changeProfileImage(wizard)
})