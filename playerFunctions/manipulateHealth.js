function manipulateHealth(player, wizard, type){
    if(type === '-'){
        player.health -= wizard.attackPower;
    } else {
        player.health += wizard.attackPower;
    }
}