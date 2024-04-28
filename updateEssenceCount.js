function updateEssence(essenceContainer, essence_element_node){
    essence_element_node[0].innerText  = ` Total Earth Essence: ${essenceContainer.earthEssence}`
    essence_element_node[1].innerText  = ` Total Water Essence: ${essenceContainer.waterEssence}`
    essence_element_node[2].innerText  = ` Total Fire Essence: ${essenceContainer.fireEssence}`
    essence_element_node[3].innerText  = ` Total Air Essence: ${essenceContainer.airEssence}`
    essence_element_node[4].innerText  = ` Total Light Essence: ${essenceContainer.lightEssence}`
    essence_element_node[5].innerText  = ` Total Dark Essence: ${essenceContainer.darkEssence}`
}


function updateEssenceEssencePage(essenceContainer, essenceEssence_nodeList){
        essenceEssence_nodeList[0].innerText  = `Current Essence: Current Essence: ${essenceContainer.fireEssence}`
        essenceEssence_nodeList[1].innerText  = `Current Essence: ${essenceContainer.airEssence}`
        essenceEssence_nodeList[2].innerText  = `Current Essence: ${essenceContainer.waterEssence}`
    essenceEssence_nodeList[3].innerText  = `Current Essence: ${essenceContainer.earthEssence}`
    essenceEssence_nodeList[4].innerText  = `Current Essence: ${essenceContainer.lightEssence}`
    essenceEssence_nodeList[5].innerText  = `Current Essence: ${essenceContainer.darkEssence}`
}