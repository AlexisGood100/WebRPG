const buttonPlayerBattleControls = document.querySelectorAll('.button-player-control');
const mapLevelHTML = document.querySelector('.h1-map-level');
//basic attack

function makeMoveHavePower(multiplier){
    return wizard.attackPower * multiplier
}

function displayFamiliarButtonSet(currentFamiliar, nodeList){
nodeList[2].innerText = currentFamiliar.specialAbility1Des
nodeList[3].innerText = currentFamiliar.specialAbility2Des
nodeList[4].innerText = currentFamiliar.specialAbility3Des
}

const doDamageBasic = (wizard, currentEnemy, indicator) =>{
indicator === 1 ? currentEnemy.health -= wizard.attackPower
: wizard.health -= currentEnemy.attackPower
    
}

const doSkillDamage = (currentEnemy, arr, index) =>{
let skillDamage = arr[index]
currentEnemy.health -= skillDamage;
}

const setDelay = (time, next) =>{
    setTimeout(()=>{
next()
    }, time * 1000) //conversion straight to seconds in parameters
}

const setStatusHit = (element) =>{
    element === document.querySelector('div-player-background-img') ?
    document.querySelector('.div-player-background-img').classList.add('struck')
    : document.querySelector('.div-enemy-background-img').classList.add('struck')
} 

const removeStatusHit = (element) =>{
    setDelay(1200, ()=>{
        element.class.remove('struck');
    })
}


const displayAllClassesPlayerAndEnemy = (wizard, currentEnemy) => {
    displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
    displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
}

buttonPlayerBattleControls[0].addEventListener('click', ()=>{
    if(usingAlt === false){
        doDamageBasic(wizard, currentEnemy,1)
        setStatusHit(document.querySelector('.div-enemy-background-img'))
        removeStatusHit(document.querySelector('.div-enemy-background-img'))
        
        if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        setDelay(1.5, ()=>{
            displayAllClassesPlayerAndEnemy(wizard, currentEnemy)
        })
    } else {
        doDamageBasic(wizard, currentEnemy,2)
        if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        setDelay(1.5, ()=>{
            displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
            displayFamiliarClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        })
        checkForEndOfBattle();
    }
})

buttonPlayerBattleControls[1].addEventListener('click', ()=>{ //defense
    // usingAlt === 
    if(usingAlt === false){

        wizard.defense += 10;
        displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
        setTimeout(()=>{
            wizard.defense += 10;
            displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
        }, 5000)
    } else {
        setTimeout(()=>{
            currentFamiliar.defense += 10;
            displayFamiliarClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        })
    }
})

buttonPlayerBattleControls[2].addEventListener('click', ()=>{
    if(usingAlt === false){
        if(wizard.class === 'Fighter'){
            currentEnemy.health -= (wizard.attackPower * 2);
              wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
              setStatusHit(document.querySelector('.div-enemy-background-img'))
              removeStatusHit(document.querySelector('.div-enemy-background-img'))
            if(currentEnemy.health <= 0){
                checkForEndOfBattle();
                    mapLevel += 1;
                    mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
            }
        }
        if(wizard.class === 'Priest'){
            currentEnemy.health -= makeMoveHavePower(2.6);
              wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
              setStatusHit(document.querySelector('.div-enemy-background-img'))
              removeStatusHit(document.querySelector('.div-enemy-background-img'))
            if(currentEnemy.health <= 0){
                checkForEndOfBattle();
                    mapLevel += 1;
                    mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
            }
        }
        if(wizard.class === 'Assassin'){
            currentEnemy.health -= (wizard.attackPower * 3);
              wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3)); 
              setStatusHit(document.querySelector('.div-enemy-background-img'))
              removeStatusHit(document.querySelector('.div-enemy-background-img'))
            if(currentEnemy.health <= 0){
                checkForEndOfBattle();
                    mapLevel += 1;
                    mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
            }
        }
        if(wizard.class === 'Wizard'){
            currentEnemy.health -= (wizard.magicPower * 3);
              wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
              setStatusHit(document.querySelector('.div-enemy-background-img'))
              removeStatusHit(document.querySelector('.div-enemy-background-img'))
            if(currentEnemy.health <= 0){
                checkForEndOfBattle();
                    mapLevel += 1;
                    mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
            }
        }
    displayAllClassesPlayerAndEnemy(wizard, currentEnemy)
    } else {
        if(currentFamiliar.fight_type === 'Fire'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
            currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(currentFamiliar.fight_type === 'Water'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
            currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(currentFamiliar.fight_type === 'Earth'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
            currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(currentFamiliar.fight_type === 'Air'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
            currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        } if(currentFamiliar.fight_type === 'Darkness'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(currentFamiliar.fight_type === 'Light'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        displayFamiliarClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
    }
})

buttonPlayerBattleControls[3].addEventListener('click', ()=>{
    if(usingAlt === false){
        if(wizard.class === 'Fighter'){
            currentEnemy.health -= (wizard.attackPower * 2);
               wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(wizard.class === 'Priest'){
            currentEnemy.health -=(wizard.magicPower * 3.6);
               wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(wizard.class === 'Assassin'){
            currentEnemy.health -=(wizard.attackPower * 3);
               wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(wizard.class === 'Wizard'){
            currentEnemy.health -=(wizard.magicPower * 3);
               wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(currentEnemy.health > 0){
            displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
        } 
    } else {

        if(currentFamiliar.fight_type === 'Fire'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
            currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(currentFamiliar.fight_type === 'Water'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                  currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(currentFamiliar.fight_type === 'Earth'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                  currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(currentFamiliar.fight_type === 'Air'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                  currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        } if(currentFamiliar.fight_type === 'Darkness'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
            currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        if(currentFamiliar.fight_type === 'Light'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
            currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
                if(currentEnemy.health <= 0){
            checkForEndOfBattle();
                mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        }
        displayFamiliarClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        
    }
})


buttonPlayerBattleControls[4].addEventListener('click', ()=>{
    if(usingAlt === false){
        if(wizard.class === 'Fighter'){
            currentEnemy.health -= (wizard.magicPower * 2);
            setStatusHit(document.querySelector('.div-enemy-background-img'))
              removeStatusHit(document.querySelector('.div-enemy-background-img'))
             wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
            checkForEndOfBattle();
            mapLevel += 1;
            mapLevelHTML.innerText = `Map Level: ${mapLevel}`;

        }
        if(wizard.class === 'Priest'){
            currentEnemy.health -=(wizard.magicPower * 5.6);
            setStatusHit(document.querySelector('.div-enemy-background-img'))
              removeStatusHit(document.querySelector('.div-enemy-background-img'))
                wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
            checkForEndOfBattle();
             mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        if(wizard.class === 'Assassin'){
            currentEnemy.health -=(wizard.magicPower * 3);
            setStatusHit(document.querySelector('.div-enemy-background-img'))
              removeStatusHit(document.querySelector('.div-enemy-background-img'))
                wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
            checkForEndOfBattle();
             mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        if(wizard.class === 'Wizard'){
            currentEnemy.health -=(wizard.magicPower * 3);
            setStatusHit(document.querySelector('.div-enemy-background-img'))
              removeStatusHit(document.querySelector('.div-enemy-background-img'))
                wizard.health -= (parseFloat(currentEnemy.attackPower) - (wizard.defense/3));
            checkForEndOfBattle();
             mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
    } else {
        if(currentFamiliar.fight_type === 'Fire'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                  currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
            checkForEndOfBattle();
             mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        if(currentFamiliar.fight_type === 'Water'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                  currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
            checkForEndOfBattle();
             mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        if(currentFamiliar.fight_type === 'Earth'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                  currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
            checkForEndOfBattle();
             mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        if(currentFamiliar.fight_type === 'Air'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                  currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
            checkForEndOfBattle();
             mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        } if(currentFamiliar.fight_type === 'Darkness'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                  currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
            checkForEndOfBattle();
             mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        if(currentFamiliar.fight_type === 'Light'){
            currentEnemy.health -= (currentFamiliar.attackPower * 2);
                  currentFamiliar.health -= parseFloat(currentEnemy.attackPower);
            checkForEndOfBattle();
             mapLevel += 1;
                mapLevelHTML.innerText = `Map Level: ${mapLevel}`;
        }
        displayFamiliarClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
        
    }
})

buttonPlayerBattleControls[5].addEventListener('click', ()=>{
    if(usingAlt === false){
        if(wizard.healthPotions >= 1){
            wizard.healthPotions -= 1;
            wizard.generateHealth();
        }

    } else {
        if(wizard.healthPotions >= 1){
            currentFamiliar.healthPotions -= 1;
            currentFamiliar.generateHealth();
            displayFamiliarClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        }
    }
})

buttonPlayerBattleControls[6].addEventListener('click', ()=>{
    
    if(usingAlt === false){
        if(wizard.manaPotions >= 1){
            wizard.manaPotions -= 1;
            wizard.generateMana();
            displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
        }
    } else {
        wizard.manaPotions -= 1;    
       currentFamiliar.generateMana();
        displayFamiliarClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
    }
})

//switching back and forth between familiars.
buttonPlayerBattleControls[7].addEventListener('click', ()=>{
    if(usingAlt === false){
        displayFamiliarClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        displayFamiliarButtonSet(currentFamiliar, buttonPlayerBattleControls)
        usingAlt = true;
    } else {
        displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
        setBattleButtons()
        usingAlt = false;
    }

})