function displayFamiliarClass(currentFamiliar, parentDiv){
    parentDiv.innerHTML = "";
    const html = 
    `
    <div class="player-info-div">
    <h1>Player Statistics</h1>
    <div class="div-familiar-background-img ${currentFamiliar.imgPath}"> </div>
    <h1>Class: ${currentFamiliar.class}</h1>
    <h1>Health: ${currentFamiliar.health}</h1>
    <h1>Mana: ${currentFamiliar.mana}</h1>
    <h1>Defense: ${currentFamiliar.defense}</h1>
    <h1>Magic Power: ${currentFamiliar.magicPower}</h1>
    <h1>Attack Power: ${currentFamiliar.attackPower}</h1>
    <h1>Constitution: ${currentFamiliar.constitution}</h1>
    <h1>Dexterity: ${currentFamiliar.dexterity}</h1>
    <h1>Strength: ${currentFamiliar.strength}</h1>
    <h1>Charisma: ${currentFamiliar.charisma}</h1>
    <h1>Willpower: ${currentFamiliar.willpower}</h1>
    <h1>Intelligence: ${currentFamiliar.intelligence}</h1>
    </div>
    `;
    document.querySelector('.div-player-background-img').style.backgroundImage = `url(${currentFamiliar.imgPath})`;
 parentDiv.insertAdjacentHTML('afterbegin', html);

}