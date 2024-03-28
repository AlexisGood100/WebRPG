const playerClassRollObject = document.querySelector('.div-character-dice-roll-container');
function displayPlayerClassRollObject(playerClassDiceRollObject, parentDiv){
    parentDiv.textContent = '';
    const html = ` 
<div class="div-player-class">
<h1> Constitution: ${playerClassDiceRollObject.constitution}</h1>
<h1>Strength: ${playerClassDiceRollObject.strength}</h1>
<h1>Willpower: ${playerClassDiceRollObject.willpower}</h1>
<h1>Charisma: ${playerClassDiceRollObject.charisma}</h1>
<h1>Dexterity: ${playerClassDiceRollObject.dexterity}</h1>
<h1>Intelligence: ${playerClassDiceRollObject.intelligence}</h1>
<h1>Total: ${playerClassDiceRollObject.total}</h1>
</div>
`
parentDiv.insertAdjacentHTML('afterbegin', html);
}