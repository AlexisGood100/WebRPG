function displayOwnedFamiliars(container, playerFamiliars){
playerFamiliars.forEach((familiar)=>{
    const html = 
    `
    <div class="div-familiar-owned ${familiar.name}">
    <p>Familiar Name: ${familiar.name}</p>
    <div class="div-familiar-img"> </div>
    <p>HP: ${familiar.health}</p>
    <p>MP: ${familiar.mana}</p>
    <p>Defense: ${familiar.defense}</p>
    <p>Attack: ${familiar.attackPower}</p>
    </div>
    `;
    container.insertAdjacentHTML('afterbegin', html);
});

let familiarIMGDiv = document.querySelector(`${familiar.name}`);
familiarIMGDiv.style.backgroundImage = `url('${familiar.imgPath}')`; //Don't know if this approach is going to work.

}