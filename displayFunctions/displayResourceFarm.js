function updateBuildingResourcePlayerTable(tableR1, tableR2, tableR3, tableR4, RSFARM){   //display function for the house building section
    tableR1[0].innerText = wizard.gold;
    tableR1[1].innerText = RSFARM.wood;
    tableR1[2].innerText = RSFARM.stone;
    tableR1[3].innerText = RSFARM.lumber;
    
    tableR2[0].innerText = RSFARM.goldRS;
    tableR2[1].innerText = RSFARM.woodRS;
    tableR2[2].innerText = RSFARM.stoneRS;
    tableR2[3].innerText = RSFARM.lumberRS;
    
    tableR3[0].innerText = RSFARM.goldRM;
    tableR3[1].innerText = RSFARM.woodRM;
    tableR3[2].innerText = RSFARM.stoneRM;
    tableR3[3].innerText = RSFARM.lumberRM;
    
    tableR4[0].innerText = RSFARM.goldRL;
    tableR4[1].innerText = RSFARM.woodRL;
    tableR4[2].innerText = RSFARM.stoneRL;
    tableR4[3].innerText = RSFARM.lumberRL;
}