function displayEnemyClass(player, parentDiv){
    parentDiv.innerHTML = "";
    const html = 
    `
    <div class="player-info-div">
    <h1>Player Statistics</h1>
    <div class="div-enemy-background-img ${player.imgPath}"> </div>
    <h1>Health: ${player.health}</h1>
    <h1>Defense: ${player.defense}</h1>
    <h1>Magic Power: ${player.magicPower}</h1>
    <h1>Attack Power: ${player.attackPower}</h1>
    <h1>Constitution: ${player.constitution}</h1>
    <h1>Dexterity: ${player.dexterity}</h1>
    <h1>Strength: ${player.strength}</h1>
    <h1>Charisma: ${player.charisma}</h1>
    <h1>Willpower: ${player.willpower}</h1>
    <h1>Intelligence: ${player.intelligence}</h1>
    </div>
    `;

 parentDiv.insertAdjacentHTML('afterbegin', html);

}