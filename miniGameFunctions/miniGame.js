

let GameRewardDiv = document.querySelectorAll('.inside-game-div');
const gameContainer = document.querySelector('.game')

const createGameRewardDivs = (parent, classList, num) => {
    for (let i = 0; i <= num; i++) {
        let gameDiv = document.createElement('div')
        gameDiv.classList.add(classList)

        parent.appendChild(gameDiv)
    }
}

createGameRewardDivs(gameContainer, 'inside-game-div', 19)

let spanForScore = document.querySelector('.span-score');




function removeElementByValue(arr, value) {
    const index = arr.indexOf(value);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

// Left off in the middle of the creation of this mini-game
const randomNumber1 = (bounds) => {
    return Math.floor(Math.random() * bounds)
}

const assignColorsToAll = (currentColor_) => {
    let colors = ['red', 'blue', 'white', 'orange', 'green'];
    let newColors = removeElementByValue(colors, currentColor_.color);
    nodeList_ = document.querySelectorAll('.inside-game-div');
    nodeList_.forEach((element, i) => {
        if (i === currentColor_.index) {
            console.log('Found')
        } else {
            element.style.backgroundColor = newColors[Math.floor(Math.random() * newColors.length)]
        }
    })
}

let currentColor = ''

const assignSelectedColor = () => {
    let colors = ['red', 'blue', 'white', 'orange', 'green'];
    let randomNum = randomNumber1(colors.length)
    let currentColor_ = colors[randomNum]
    let randomNum2 = randomNumber1(nodeList_.length);
    let obj = { currentColor: currentColor_, index: randomNum2 }
    nodeList_ = document.querySelectorAll('.inside-game-div');
    nodeList_[randomNum2].style.backgroundColor = currentColor_;
    document.querySelector('.color-choice').innerText = currentColor_;
    currentColor = obj.currentColor;
    return obj;
}

const checkForColor = (assignSelectedColor) => {
    setTimeout(() => {
        nodeList_ = document.querySelectorAll('.inside-game-div');
    }, 2000)
    let assignSelectedColor_ = { color: document.querySelector('.color-choice').innerText, index: assignSelectedColor.index }
    return assignSelectedColor_
}


//Mini-Game
let scoreForGame = { score: 0 }
let timer = 0;
const gameStart = document.querySelector('.button-start-game')
gameStart.addEventListener('click', (e) => {
    timer = 0;
    gameStart.classList.add('hide');
    let colorAssignInterval = setInterval(() => {
        document.querySelector(".span-timer").classList.remove('hide')
        if (timer === 5) {
            clearInterval(colorAssignInterval)
            nodeList_ = document.querySelectorAll('.inside-game-div');
            nodeList_.forEach((element)=>{
                element.style.backgroundColor = 'crimson'
                wizard.gold += scoreForGame.score;
                console.log(wizard.gold)
                timer = 0;
                scoreForGame.score = 0;
                spanForScore.innerText = scoreForGame.score;
                gameStart.classList.remove('hide');
                console.log('You have earned ' + scoreForGame.score + " points.")
                document.querySelector('.span-timer').innerText = 0;
                document.querySelector(".span-timer").classList.add('hide')
            })
        } else {
            assignColorsToAll(checkForColor(assignSelectedColor()));
        }
    }, 2000);
    
    runTimer(1000)

    nodeList_ = document.querySelectorAll('.inside-game-div');
    nodeList_.forEach((element) => {
        element.addEventListener('click', () => {
            if (element.style.backgroundColor === currentColor) {
                console.log('score')
                scoreForGame.score += 1;
                spanForScore.innerText = scoreForGame.score;
            } else {
                console.log('no score')
                scoreForGame.score -= 1;
                spanForScore.innerText = scoreForGame.score;
            }
        })
    })
});
//End of mini-game



const runTimer = (num) => {

    let interval = setInterval(() => {
        if (timer === 5) {
            clearInterval(interval)
            return
        } else{
            timer += 1;
            document.querySelector(".span-timer").innerText = timer;
        }
    }, num)

}