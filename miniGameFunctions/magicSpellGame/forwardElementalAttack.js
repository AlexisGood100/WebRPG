createGameRewardDivs(document.querySelector('.game-duel'), 'magical-attack', 19)
let starterDefaultIamgeForMagicalAttacks = './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg';
let allMagicalAttackElements = document.querySelectorAll('.magical-attack')


allMagicalAttackElements.forEach((magicalAttackElement) => {
    magicalAttackElement.style.backgroundImage = `url('${starterDefaultIamgeForMagicalAttacks}')`;
})
allMagicalAttackElements[0].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`
allMagicalAttackElements[4].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`
allMagicalAttackElements[5].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`
allMagicalAttackElements[9].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`
allMagicalAttackElements[10].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`
allMagicalAttackElements[14].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`
allMagicalAttackElements[15].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`
allMagicalAttackElements[19].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`

allMagicalAttackElements[0].classList.add('p-fire');
allMagicalAttackElements[4].classList.add('e-fire');
allMagicalAttackElements[5].classList.add('p-ice');
allMagicalAttackElements[9].classList.add('e-ice');
allMagicalAttackElements[10].classList.add('p-air');
allMagicalAttackElements[14].classList.add('e-air');
allMagicalAttackElements[15].classList.add('p-earth');
allMagicalAttackElements[19].classList.add('e-earth');

//left off thinking about what the next step in this game would be. 
// left side is where you can attack from as a player, right side is where the enemy attacks from.
//??

//setting the event listeners to start the magical attack
allMagicalAttackElements[0].addEventListener('click', () => {
    allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
    allMagicalAttackElements[1].classList.add('p-fire');
})

allMagicalAttackElements[5].addEventListener('click', () => {
    allMagicalAttackElements[6].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
    allMagicalAttackElements[6].classList.add('p-ice');
})

allMagicalAttackElements[10].addEventListener('click', () => {
    allMagicalAttackElements[11].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
    allMagicalAttackElements[11].classList.add('p-air');
})

allMagicalAttackElements[15].addEventListener('click', () => {
    allMagicalAttackElements[16].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
    allMagicalAttackElements[16].classList.add('p-earth');
})
//end of setting the event listeners to start the magical attack

//This is the movement mechanism once the attacks are started

function enablePlayerForwardAttacks() {

    setInterval(() => {
        if (allMagicalAttackElements[1].classList.contains('p-fire')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-fire', 1, 2, './images/miniGame/magicalSpellsGame/elementalAttackFire.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        } else if (allMagicalAttackElements[2].classList.contains('p-fire')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-fire', 2, 3, './images/miniGame/magicalSpellsGame/elementalAttackFire.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        } else if (allMagicalAttackElements[3].classList.contains('p-fire')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-fire', 3, 4, './images/miniGame/magicalSpellsGame/elementalAttackFire.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        }
        else if (allMagicalAttackElements[4].classList.contains('p-fire')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-fire', 3, 4, './images/miniGame/magicalSpellsGame/elementalAttackFire.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        }


        if (allMagicalAttackElements[6].classList.contains('p-ice')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-ice', 6, 7, './images/miniGame/magicalSpellsGame/elementalAttackIce.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        } else if (allMagicalAttackElements[7].classList.contains('p-ice')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-ice', 7, 8, './images/miniGame/magicalSpellsGame/elementalAttackIce.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        } else if (allMagicalAttackElements[8].classList.contains('p-ice')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-ice', 8, 9, './images/miniGame/magicalSpellsGame/elementalAttackIce.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        }
        else if (allMagicalAttackElements[9].classList.contains('p-ice')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-ice', 8, 9, './images/miniGame/magicalSpellsGame/elementalAttackIce.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        }

        if (allMagicalAttackElements[11].classList.contains('p-air')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-air', 11, 12, './images/miniGame/magicalSpellsGame/elementalAttackAir.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        } else if (allMagicalAttackElements[12].classList.contains('p-air')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-air', 12, 13, './images/miniGame/magicalSpellsGame/elementalAttackAir.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        } else if (allMagicalAttackElements[13].classList.contains('p-air')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-air', 13, 14, './images/miniGame/magicalSpellsGame/elementalAttackAir.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        }
        else if (allMagicalAttackElements[14].classList.contains('p-air')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-air', 13, 14, './images/miniGame/magicalSpellsGame/elementalAttackAir.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        }

        if (allMagicalAttackElements[16].classList.contains('p-earth')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-earth', 16, 17, './images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        } else if (allMagicalAttackElements[17].classList.contains('p-earth')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-earth', 17, 18, './images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        } else if (allMagicalAttackElements[18].classList.contains('p-earth')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-earth', 18, 19, './images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        }
        else if (allMagicalAttackElements[19].classList.contains('p-earth')) {
            forwardElementalAttack(allMagicalAttackElements, 'p-earth', 18, 19, './images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')
        }
    }, 1000); // might set later

    ///end of player forward 

    //start of enemy forward
}





function enableEnemyAttack() {
    //Random initiating an enemy attack
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 4)
        if (randomNumber === 0) {
            allMagicalAttackElements[3].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`
            allMagicalAttackElements[3].classList.add('e-fire');
        }
        else if (randomNumber === 1) {
            allMagicalAttackElements[8].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`
            allMagicalAttackElements[8].classList.add('e-ice');
        }
        else if (randomNumber === 2) {
            allMagicalAttackElements[13].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`
            allMagicalAttackElements[13].classList.add('e-air');
        }
        else if (randomNumber === 3) {
            allMagicalAttackElements[18].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`
            allMagicalAttackElements[18].classList.add('e-earth');
        }
    }, 2000);
}

//end of randomaly initiating an enemy attack

function checkForCollision(index, nodeList_, classList) {
    if (nodeList_[index].classList.contains(classList) && nodeList_[index].classList.contains(classList)) {
        nodeList_[index].classList.remove(classList)
        nodeList_[index].classList.remove(classList)
        collisionCount += 1;
        console.log('collision:' + allMagicalAttackElements[3])
    }
}

function moveEnemyAttackForward() {

    //enemies attacks
    setInterval(() => {
        if (allMagicalAttackElements[3].classList.contains('e-fire')) {
            allMagicalAttackElements[3].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[3].classList.remove('e-fire');

            allMagicalAttackElements[2].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
            allMagicalAttackElements[2].classList.add('e-fire');

        } else if (allMagicalAttackElements[2].classList.contains('e-fire')) {
            allMagicalAttackElements[2].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[2].classList.remove('e-fire');

            allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
            allMagicalAttackElements[1].classList.add('e-fire');
        }
        else if (allMagicalAttackElements[1].classList.contains('e-fire')) {
            allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[1].classList.remove('e-fire');
            // allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
            allMagicalAttackElements[0].classList.add('e-fire');
        }



        if (allMagicalAttackElements[8].classList.contains('e-ice')) {
            allMagicalAttackElements[8].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[8].classList.remove('e-ice');

            allMagicalAttackElements[7].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
            allMagicalAttackElements[7].classList.add('e-ice');

        } else if (allMagicalAttackElements[7].classList.contains('e-ice')) {
            allMagicalAttackElements[7].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[7].classList.remove('e-ice');

            allMagicalAttackElements[6].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
            allMagicalAttackElements[6].classList.add('e-ice');
        }
        else if (allMagicalAttackElements[6].classList.contains('e-ice')) {
            allMagicalAttackElements[6].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[6].classList.remove('e-ice');

            allMagicalAttackElements[5].classList.add('e-ice');
        }



        if (allMagicalAttackElements[13].classList.contains('e-air')) {
            allMagicalAttackElements[13].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[13].classList.remove('e-air');

            allMagicalAttackElements[12].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
            allMagicalAttackElements[12].classList.add('e-air');

        } else if (allMagicalAttackElements[12].classList.contains('e-air')) {
            allMagicalAttackElements[12].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[12].classList.remove('e-air');

            allMagicalAttackElements[11].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
            allMagicalAttackElements[11].classList.add('e-air');
        }
        else if (allMagicalAttackElements[11].classList.contains('e-air')) {
            allMagicalAttackElements[11].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[11].classList.remove('e-air');

            allMagicalAttackElements[10].classList.add('e-air');


        }




        if (allMagicalAttackElements[18].classList.contains('e-earth')) {
            allMagicalAttackElements[18].classList.remove('e-earth');
            allMagicalAttackElements[18].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;

            allMagicalAttackElements[17].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
            allMagicalAttackElements[17].classList.add('e-earth');

        } else if (allMagicalAttackElements[17].classList.contains('e-earth')) {
            allMagicalAttackElements[17].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[17].classList.remove('e-earth');

            allMagicalAttackElements[16].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
            allMagicalAttackElements[16].classList.add('e-earth');
        }
        else if (allMagicalAttackElements[16].classList.contains('e-earth')) {
            allMagicalAttackElements[16].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
            allMagicalAttackElements[16].classList.remove('e-earth');


            allMagicalAttackElements[15].classList.add('e-earth');
        }
    }, 2000);
}

allMagicalAttackElements.forEach((magicalAttackElement) => {
    magicalAttackElement.style.backgroundImage = `url('${starterDefaultIamgeForMagicalAttacks}')`;
})

function forwardElementalAttack(nodeList, classList, index1, index2, imagePath1, imagePath2) {
    if (nodeList[index1].classList.contains(classList)) {
        nodeList[index1].style.backgroundImage = `url('${imagePath2}')`;
        nodeList[index1].classList.remove(classList);
        nodeList[index2].style.backgroundImage = `url('${imagePath1}')`;
        nodeList[index2].classList.add(classList);
    }
}
function compressForwardElementalAttack(nodeList, classList, index1, imagePath1, imagePath2, time) {
    let index2 = index1 + 1; let index3 = index2 + 1; let index4 = index3 + 1; //assigning the values without putting too many param
    setInterval(() => {
        if (nodeList[index1].classList.contains(classList)) {
            forwardElementalAttack(nodeList, classList, index1, index2, imagePath1, imagePath2);
        } else if (nodeList[index2].classList.contains(classList)) {
            forwardElementalAttack(nodeList, classList, index2, index3, imagePath1, imagePath2);
        } else if (nodeList[index3].classList.contains(classList)) {
            forwardElementalAttack(nodeList, classList, index3, index4, imagePath1, imagePath2);
        }
    }, time);
};




compressForwardElementalAttack(allMagicalAttackElements, 'p-fire', 1, './images/miniGame/magicalSpellsGame/elementalAttackFire.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg', 4000);
compressForwardElementalAttack(allMagicalAttackElements, 'p-ice', 6, './images/miniGame/magicalSpellsGame/elementalAttackIce.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg', 4000);
compressForwardElementalAttack(allMagicalAttackElements, 'p-fire', 11, './images/miniGame/magicalSpellsGame/elementalAttackAir.jpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg', 4000);
compressForwardElementalAttack(allMagicalAttackElements, 'p-fire', 16, './images/miniGame/magicalSpellsGame/elementalAttackEarthjpg', './images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg', 4000);
//end of enemy attack doing to the left towards players root elements

//Random initiating an enemy attack
function initateEnemyAttack(time){
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 4)
        if (randomNumber === 0) {
            allMagicalAttackElements[3].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`
            allMagicalAttackElements[3].classList.add('e-fire');
        }
        else if (randomNumber === 1) {
            allMagicalAttackElements[8].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`
            allMagicalAttackElements[8].classList.add('e-ice');
        }
        else if (randomNumber === 2) {
        allMagicalAttackElements[13].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`
        allMagicalAttackElements[13].classList.add('e-air');
    }
    else if (randomNumber === 3) {
        allMagicalAttackElements[18].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`
        allMagicalAttackElements[18].classList.add('e-earth');
    }
    
}, time)
}




allMagicalAttackElements = document.querySelectorAll('.magical-attack')
allMagicalAttackElements[0].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`
allMagicalAttackElements[4].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`
allMagicalAttackElements[5].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`
allMagicalAttackElements[9].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`
allMagicalAttackElements[10].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`
allMagicalAttackElements[14].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`
allMagicalAttackElements[15].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`
allMagicalAttackElements[19].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`

allMagicalAttackElements[0].classList.add('p-fire');
allMagicalAttackElements[4].classList.add('e-fire');
allMagicalAttackElements[5].classList.add('p-ice');
allMagicalAttackElements[9].classList.add('e-ice');
allMagicalAttackElements[10].classList.add('p-air');
allMagicalAttackElements[14].classList.add('e-air');
allMagicalAttackElements[15].classList.add('p-earth');
allMagicalAttackElements[19].classList.add('e-earth');

//left off thinking about what the next step in this game would be. 
// left side is where you can attack from as a player, right side is where the enemy attacks from.
//??

//setting the event listeners to start the magical attack
allMagicalAttackElements[0].addEventListener('click', () => {
    allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
    allMagicalAttackElements[1].classList.add('p-fire');

})

allMagicalAttackElements[5].addEventListener('click', () => {
    allMagicalAttackElements[6].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
    allMagicalAttackElements[6].classList.add('p-ice');
})

allMagicalAttackElements[10].addEventListener('click', () => {
    allMagicalAttackElements[11].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
    allMagicalAttackElements[11].classList.add('p-air');
})

allMagicalAttackElements[15].addEventListener('click', () => {
    allMagicalAttackElements[16].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
    allMagicalAttackElements[16].classList.add('p-earth');
})
//end of setting the event listeners to start the magical attack

//This is the movement mechanism once the attacks are started


//end of randomaly initiating an enemy attack

//enemies attacks

setInterval(() => {
    if (allMagicalAttackElements[3].classList.contains('e-fire')) {
        allMagicalAttackElements[3].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[3].classList.remove('e-fire');

        allMagicalAttackElements[2].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
        allMagicalAttackElements[2].classList.add('e-fire');

    } else if (allMagicalAttackElements[2].classList.contains('e-fire')) {
        allMagicalAttackElements[2].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[2].classList.remove('e-fire');

        allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackFire.jpg')`;
        allMagicalAttackElements[1].classList.add('e-fire');
    }
    else if (allMagicalAttackElements[1].classList.contains('e-fire')) {
        allMagicalAttackElements[1].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[1].classList.remove('e-fire');
        allMagicalAttackElements[0].classList.add('e-fire');
    }
    setTimeout(()=>{
        allMagicalAttackElements[0].classList.remove('e-fire')
    }, 1000)

    if (allMagicalAttackElements[8].classList.contains('e-ice')) {
        allMagicalAttackElements[8].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[8].classList.remove('e-ice');

        allMagicalAttackElements[7].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
        allMagicalAttackElements[7].classList.add('e-ice');

    } else if (allMagicalAttackElements[7].classList.contains('e-ice')) {
        allMagicalAttackElements[7].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[7].classList.remove('e-ice');

        allMagicalAttackElements[6].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackIce.jpg')`;
        allMagicalAttackElements[6].classList.add('e-ice');
    }
    else if (allMagicalAttackElements[6].classList.contains('e-ice')) {
        allMagicalAttackElements[6].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[6].classList.remove('e-ice');

        allMagicalAttackElements[5].classList.add('e-ice');
    }
    setTimeout(()=>{
        allMagicalAttackElements[5].classList.remove('e-ice')
    }, 1000)

    if (allMagicalAttackElements[13].classList.contains('e-air')) {
        allMagicalAttackElements[13].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[13].classList.remove('e-air');

        allMagicalAttackElements[12].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
        allMagicalAttackElements[12].classList.add('e-air');

    } else if (allMagicalAttackElements[12].classList.contains('e-air')) {
        allMagicalAttackElements[12].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[12].classList.remove('e-air');

        allMagicalAttackElements[11].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackAir.jpg')`;
        allMagicalAttackElements[11].classList.add('e-air');
    }
    else if (allMagicalAttackElements[11].classList.contains('e-air')) {
        allMagicalAttackElements[11].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[11].classList.remove('e-air');

        allMagicalAttackElements[10].classList.add('e-air');
    }
    setTimeout(()=>{
        allMagicalAttackElements[10].classList.remove('e-air')
    }, 1000)
    if (allMagicalAttackElements[18].classList.contains('e-earth')) {
        allMagicalAttackElements[18].classList.remove('e-earth');
        allMagicalAttackElements[18].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;

        allMagicalAttackElements[17].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
        allMagicalAttackElements[17].classList.add('e-earth');

    } else if (allMagicalAttackElements[17].classList.contains('e-earth')) {
        allMagicalAttackElements[17].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[17].classList.remove('e-earth');

        allMagicalAttackElements[16].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalAttackEarth.jpg')`;
        allMagicalAttackElements[16].classList.add('e-earth');
    }
    else if (allMagicalAttackElements[16].classList.contains('e-earth')) {
        allMagicalAttackElements[16].style.backgroundImage = `url('./images/miniGame/magicalSpellsGame/elementalDefaultBackground.jpg')`;
        allMagicalAttackElements[16].classList.remove('e-earth');


        allMagicalAttackElements[15].classList.add('e-earth');
    }
    setTimeout(()=>{
        allMagicalAttackElements[15].classList.remove('e-earth')
    }, 1000)
}, 2000);



function checkForCollision(index, nodeList_, eClassList, pClassList) {
    if (nodeList_[index].classList.contains(eClassList) && nodeList_[index].classList.contains(pClassList)) {
        nodeList_[index].classList.remove(eClassList)
        nodeList_[index].classList.remove(pClassList)
        collisionCount.total += 1;
        updateCollision(collisionCount)
        console.log('collision:' + allMagicalAttackElements[3])
    }
}
let scoreElements = {score: 0}
function runCdetection(){

        checkForCollision(1, allMagicalAttackElements, 'e-earth', 'p-earth')
        checkForCollision(2, allMagicalAttackElements, 'e-earth', 'p-earth')
        checkForCollision(3, allMagicalAttackElements, 'e-earth', 'p-earth')
        
        if (allMagicalAttackElements[4].classList.contains('p-fire') && allMagicalAttackElements[4].classList.contains('e-fire')) {
            allMagicalAttackElements[4].classList.remove('p-fire')
            allMagicalAttackElements[4].classList.remove('e-fire')

            scoreElements.score += 1;
            document.querySelector('.h1-score-duel').innerText = `Score: ${scoreElements.score}`;
      
       
        }
        
        // end of collision detection
        
        checkForCollision(6, allMagicalAttackElements, 'e-ice', 'p-ice')
        checkForCollision(7, allMagicalAttackElements, 'e-ice', 'p-ice')
        checkForCollision(8, allMagicalAttackElements, 'e-ice', 'p-ice')
        
        if (allMagicalAttackElements[9].classList.contains('p-ice') && allMagicalAttackElements[9].classList.contains('e-ice')) {
            allMagicalAttackElements[9].classList.remove('p-ice')
          
            scoreElements.score += 1;
            document.querySelector('.h1-score-duel').innerText = `Score: ${scoreElements.score}`;
         
        }
        

        // end of collision detection
        
        
        checkForCollision(16, allMagicalAttackElements, 'e-earth', 'p-earth')
        checkForCollision(17, allMagicalAttackElements, 'e-earth', 'p-earth')
        checkForCollision(18, allMagicalAttackElements, 'e-earth', 'p-earth')
        if (allMagicalAttackElements[19].classList.contains('p-earth')) {
            allMagicalAttackElements[19].classList.remove('p-earth')
             scoreElements.score += 1;
             document.querySelector('.h1-score-duel').innerText = `Score: ${scoreElements.score}`;
        }
        
        //End of air collision
        checkForCollision(11, allMagicalAttackElements, 'e-air', 'p-air')
        checkForCollision(12, allMagicalAttackElements, 'e-air', 'p-air')
        checkForCollision(13, allMagicalAttackElements, 'e-air', 'p-air')
        if (allMagicalAttackElements[14].classList.contains('p-earth') && allMagicalAttackElements[14].classList.contains('e-earth')) {
            allMagicalAttackElements[14].classList.remove('p-earth')
            scoreElements.score += 1;
           document.querySelector('.h1-score-duel').innerText = `Score: ${scoreElements.score}`;
        } 
        

}

function updateCollision(){
    document.querySelector('.span-score-collision').innerText = collisionCount.total;
}

let collisionCount = {total: 0}
//initiation 
//1 - start enemy attack and player attack.
//2 detect collision
function runGame(){ //call this to start the game.
    setInterval(()=>{

        enableEnemyAttack()
        enablePlayerForwardAttacks()
        runCdetection()
    }, 3500)
}


document.querySelector('.button-start-game-duel').addEventListener('click', ()=>{
    runGame()
})

