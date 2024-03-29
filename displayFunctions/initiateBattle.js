function initiateBattle() {
    document.querySelector('.battle-overlay').classList.remove('hide');
    displayEnemyClass(currentEnemy, document.querySelector('.div-container-enemy-side-stats'));
    document.querySelector('.div-container-enemy-side-img').style.backgroundImage = `url('./images/enemies/enemy${Math.floor(Math.random() * 16)}.jpg')`
    console.log(document.querySelector('.div-container-enemy-side-img'))
    if (usingAlt === true) {
        displayFamiliarClass(currentFamiliar, document.querySelector('.div-container-player-side-stats'));
        displayFamiliarButtonSet(currentFamiliar, buttonPlayerBattleControls)
    } else {
        displayPlayerClass(wizard, document.querySelector('.div-container-player-side-stats'));
    }
}