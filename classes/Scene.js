class Scene {
    constructor(title, imgPath, description){
        this.title = title;
        this.imgPath = imgPath;
        this.description = description;
    }
    setScene(title_element, image_element, p_element){
        title_element.innerText = this.title;
        image_element.style.backgroundImage = `url(${this.imgPath})`
        p_element.innerText = this.description;
    }
}

//Code for scenes-----------------
const divSceneContainer = document.querySelector('.div-scene-container');
const h1SceneDesc = document.querySelector('.h1-scene');
const divSceneImage = document.querySelector('.div-inside-image');
const pSceneDesc = document.querySelector('.p-story-info');
const firstScene = new Scene('Another boring day.', './images/scenes/ScenceOmwToSchool.jpg', 'My mother sent me on a trip to get some groceries... Ugh I just want to play my RPG... School had been tough this week.');
const secondScene = new Scene('Being the hero.', './images/scenes/sceneCatInStreet.jpg', 'Wait... that cat is going to be run over. I have to help them!')
const thirdScene = new Scene("The collision. The end and the beginning.", './images/scenes/sceneCarCollision.jpg', "Wait that car isn't stopping. I've managed to push the cat out of the way but I...")
const fourthScene = new Scene('Where am I, and why do I feel so strange...', './images/scenes/sceneWhereAmI.jpg', "This feeling... I feel warm but my body... I cannot feel my body. The colors around me are so different than anything i've seen")
const fifthScene = new Scene('Entering Aldagin Online', './images/scenes/sceneTower.jpg', "This doesn't make any sense... This is the tower from Aldagin Online... The RPG that I have been playing for a few years now...")
const sixthScene = new Scene('A chance of hope', './images/scenes/llama_horn.jpg', 'Luckily the Llama horn was secured and blown in time to send three-fourths of the dragons back to their realm. The chance of victory was now about even. This meant it was time to gear up and destroy the wizard before he has enough time to create another army of foul beasts.')
const seventhScene = new Scene('The four guardians', './images/scenes/llamaBoss4.jpg', 'The next great war for peace is marching forward unyeilding to fatigue. We must take arms and sway the winds of war in our favor. The battle begins.')
const EightScene = new Scene('The dark lord', './images/scenes/darkWizardKing.jpg', 'The dark death king has appeared atop a mountain. His fire illuminates the night sky.');
scenesArray = [firstScene, secondScene, thirdScene, fourthScene, fifthScene, sixthScene, seventhScene, EightScene];
divSceneImage.style.backgroundImage = `url(${firstScene.imgPath})`;
const buttonForwardScene = document.querySelector('.button-further-story')

let sceneIndex = 0;
let currentScene = null;

buttonForwardScene.addEventListener('click', () => {
    if (sceneIndex === 0) {
        secondScene.setScene(h1SceneDesc, divSceneImage, pSceneDesc)
        sceneIndex += 1
    } else {
        if (sceneIndex >= scenesArray.length - 1) {
            return;
        } else {
            sceneIndex += 1
            currentScene = scenesArray[sceneIndex];
            currentScene.setScene(h1SceneDesc, divSceneImage, pSceneDesc)
        }
    }
    if (sceneIndex >= scenesArray.length - 1) {
        divSceneContainer.remove();
        document.querySelector('.div-choose-class').classList.add('add-margin')
        document.querySelectorAll('.div-player-choice').forEach((choice) => {
            choice.classList.remove('hide')
        })
        document.querySelector('.div-choose-class').classList.remove('hide');
        console.log('second condition')
    }
})