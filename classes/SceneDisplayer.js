class SceneDisplayer {
    constructor(parent, scene, next){
        this.parent = parent;
        this.scene = scene;
        this.next = next;
    }
    displayScene(){
        const divScene = document.createElement('div');
        const h1SceneTitle = document.createElement('h1');
        const imgScene = document.createElement('div');
        const h1SceneDesc = document.createElement('h1');
        const buttonSceneContinue = document.createElement('button');

        h1SceneTitle.innerText = this.scene.title;
        h1SceneDesc.innerText = this.scene.description;
        buttonSceneContinue.innerText = 'Continue';
        divScene.appendChild(h1SceneTitle);
        divScene.appendChild(imgScene);
        divScene.appendChild(h1SceneTitle);
        divScene.appendChild(buttonSceneContinue);
        this.parent.appendChild(divScene);
        
        buttonSceneContinue.addEventListener('click', ()=>{
            this.parent.remove();
            this.next();
            console.log('hello');
        })
    }
}