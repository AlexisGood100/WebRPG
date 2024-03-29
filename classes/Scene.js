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
const firstScene = new Scene('Life had been good for quite some time.', './images/scenes/peace.jpg', 'Peace was something that hard been earned 1000 years ago during the great battle of Eiikarti. The war that had raged on before this interlude had lasted for 3000 years. The mad kings conquest had wiped out many races completely, while converting their lands into hellscapes.');
const secondScene = new Scene('Monsters no like other.', './images/scenes/llamaScene.jpg', 'The mad king had obtained an artifact from a magical creature that was sacred. Dragons were never evil creatures, but with this horn he could summon one per day, to do his bidding. The mad king was thought to have died because he disappeared for centuries. Dragons were believed to be encapsulated in the plane that the horn summons them from. Their own magical world that kept them away from this one.')
const thirdScene = new Scene('The giants were the first to see the fiece beast.', './images/scenes/giants.jpg', 'The giants were not worried when they saw one dragon on the horizon. They were more in awe, as a single dragon attacking a nation of giants would be suicide. Regardless this was strange and a council meeting was called upon the existing races to speak how a dragon has appeared 1000 after the great war.')
const fourthScene = new Scene('The Council', './images/scenes/council.jpg', 'As the council reached a nervous decision to track the dragon to where it is staying to see if there are more, the earth began to quake. The wind had been strong for days now but they had thought this was only a storm.')
const fifthScene = new Scene('The skies were full of Llamas', './images/scenes/skyLlama.jpg', 'The council rushed outside to find the sky full of dragons and other types of weird monster. There was still hope if the dragon horn was used in time to send them back to where they came from.')
const sixthScene = new Scene('A chance of hope', './images/scenes/llama_horn.jpg', 'Luckily the Llama horn was secured and blown in time to send three-fourths of the dragons back to their realm. The chance of victory was now about even. This meant it was time to gear up and destroy the wizard before he has enough time to create another army of foul beasts.')
const seventhScene = new Scene('The four guardians', './images/scenes/llamaBoss4.jpg', 'The next great war for peace is marching forward unyeilding to fatigue. We must take arms and sway the winds of war in our favor. The battle begins.')
const EightScene = new Scene('The dark lord', './images/scenes/darkWizardKing.jpg', 'The dark death king has appeared atop a mountain. His fire illuminates the night sky.');
scenesArray = [firstScene, secondScene, thirdScene, fourthScene, fifthScene, sixthScene, seventhScene, EightScene];
divSceneImage.style.backgroundImage = `url(${firstScene.imgPath})`;
const buttonForwardScene = document.querySelector('.button-further-story')

let sceneIndex = 0;
let currentScene = null;

buttonForwardScene.addEventListener('click', () => {
    if (sceneIndex >= scenesArray.length - 1) {
        divSceneContainer.remove();
        document.querySelector('.div-choose-class').classList.add('add-margin')
        document.querySelectorAll('.div-player-choice').forEach((choice) => {
            choice.classList.remove('hide')
        })
        document.querySelector('.div-choose-class').classList.remove('hide');
        console.log('second condition')
    }
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
})