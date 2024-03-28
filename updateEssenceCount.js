function updateEssence(wizard, essence_element_node){
    essence_element_node[0].innerText  = ` Total Earth Essence: ${wizard.earthEssence}`
    essence_element_node[1].innerText  = ` Total Water Essence: ${wizard.waterEssence}`
    essence_element_node[2].innerText  = ` Total Fire Essence: ${wizard.fireEssence}`
    essence_element_node[3].innerText  = ` Total Air Essence: ${wizard.airEssence}`
    essence_element_node[4].innerText  = ` Total Light Essence: ${wizard.lightEssence}`
    essence_element_node[5].innerText  = ` Total Dark Essence: ${wizard.darkEssence}`
}


function updateEssenceEssencePage(wizard, essenceEssence_nodeList){
        essenceEssence_nodeList[0].innerText  = `Current Essence: Current Essence: ${wizard.fireEssence}`
        essenceEssence_nodeList[1].innerText  = `Current Essence: ${wizard.airEssence}`
        essenceEssence_nodeList[2].innerText  = `Current Essence: ${wizard.waterEssence}`
    essenceEssence_nodeList[3].innerText  = `Current Essence: ${wizard.earthEssence}`
    essenceEssence_nodeList[4].innerText  = `Current Essence: ${wizard.lightEssence}`
    essenceEssence_nodeList[5].innerText  = `Current Essence: ${wizard.darkEssence}`
}