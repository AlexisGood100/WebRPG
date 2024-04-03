

let GameRewardDiv = document.querySelectorAll('.inside-game-div');
const gameContainer = document.querySelector('.game')

const createGameRewardDivs = (parent) =>{

let gameDiv = document.createElement('div')

gameDiv.classList.add('inside-game-div')

parent.appendChild(gameDiv)

}
let spanForScore = document.querySelector('.span-score');
for(let i = 0;i<=19;i++){
    createGameRewardDivs(gameContainer)
}



function removeElementByValue(arr, value) {
    const index = arr.indexOf(value);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

// Left off in the middle of the creation of this mini-game
const randomNumber1 = (bounds) =>{
    return Math.floor(Math.random() * bounds)
}

const assignColorsToAll = (currentColor_) =>{
    let colors = ['red', 'blue', 'white', 'orange', 'green'];
    let newColors = removeElementByValue(colors, currentColor_.color);
    nodeList_ = document.querySelectorAll('.inside-game-div');
    nodeList_.forEach((element,i)=>{
        if(i === currentColor_.index){
            console.log('Found')
        } else{
            element.style.backgroundColor = newColors[Math.floor(Math.random() * newColors.length)]
        }
    })
}

let currentColor = ''

const assignSelectedColor = () =>{
    let colors = ['red', 'blue', 'white', 'orange', 'green'];
    let randomNum = randomNumber1(colors.length)
    let currentColor_ = colors[randomNum]
    let randomNum2 = randomNumber1(nodeList_.length);
    let obj = {currentColor:currentColor_, index: randomNum2}
        nodeList_ = document.querySelectorAll('.inside-game-div');
        nodeList_[randomNum2].style.backgroundColor = currentColor_;
        document.querySelector('.color-choice').innerText = currentColor_;
        currentColor = obj.currentColor;
        return obj;
}

const checkForColor = (assignSelectedColor) =>{
    setTimeout(()=>{
        nodeList_ = document.querySelectorAll('.inside-game-div');
    }, 2000)
    let assignSelectedColor_ = {color: document.querySelector('.color-choice').innerText, index:assignSelectedColor.index}
    return assignSelectedColor_
}


