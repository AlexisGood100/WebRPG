function setBattleButtons(){
    //fighter
    if(wizard.class === 'Fighter'){
        buttonPlayerBattleControls[2].innerText = 'Heavy Slash';
    }
    if(wizard.class === 'Fighter'){
        buttonPlayerBattleControls[3].innerText = 'Cleave';
    }
    if(wizard.class === 'Fighter'){
        buttonPlayerBattleControls[4].innerText = 'Dragon Slayer';
    }
     //assassin
    if(wizard.class === 'Assassin'){
        buttonPlayerBattleControls[2].innerText = 'Shadow Slash';
    }
    if(wizard.class === 'Assassin'){
        buttonPlayerBattleControls[3].innerText = 'Triple Stab';
    }
    if(wizard.class === 'Assassin'){
        buttonPlayerBattleControls[4].innerText = 'Demon Breaker';
    }
    //Wizard
    if(wizard.class === 'Wizard'){
        buttonPlayerBattleControls[2].innerText = 'Fireball';
    }
    if(wizard.class === 'Wizard'){
        buttonPlayerBattleControls[3].innerText = 'Lightening Bolt';
    }
    if(wizard.class === 'Wizard'){
        buttonPlayerBattleControls[4].innerText = 'Ice Orb';
    }
//priest 
    if(wizard.class === 'Priest'){
        buttonPlayerBattleControls[2].innerText = 'Holy Slash';
    }
    if(wizard.class === 'Priest'){
        buttonPlayerBattleControls[3].innerText = 'Holy Beam';
    }
    
    if(wizard.class === 'Priest'){
        buttonPlayerBattleControls[4].innerText = 'Heal All';
    }
}