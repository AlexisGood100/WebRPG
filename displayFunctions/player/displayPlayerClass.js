function displayPlayerClass(player, parentDiv) {
    parentDiv.innerHTML = "";

    const tooltipContent = `
        <span class="tooltiptext">
            <p>Class: Players Class.</p>
            <p>Health: Amount of Health Points.</p>
            <p>Mana: Amount of Magic Points.</p>
            <p>Defense: Negates damage.</p>
            <p>Magic Power: Magical Damage.</p>
            <p>Attack Power: Physical Damage.</p>
            <p>Constitution: Determines total health points.</p>
            <p>Dexterity: Determines Speed.</p>
            <p>Strength: Determines physical attack power.</p>
            <p>Charisma: Influences Rewards.</p>
            <p>Willpower: Adds to Magic Power and Mana.</p>
            <p>Intelligence: Adds to Magic Power and Mana</p>
        </span>
    `;

    const html = `
        <div class="player-info-div tooltip">
            <h1>Player Statistics</h1>
            <div class="div-container-for-stats">
            <h1>Class: ${player.class}</h1>
            <h1>Level: ${player.level}</h1>
            <h1>Health: ${player.health}</h1>
            <h1>Mana: ${player.mana}</h1>
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
            ${tooltipContent}
        </div>
    `;

    parentDiv.insertAdjacentHTML('afterbegin', html);
}