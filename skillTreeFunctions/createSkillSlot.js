// Start of skill tree code
function createSkillSlot(classListForAbsolutePositioning, skillUp, skillNum, parent) {
    // if (wizard.requiredLevel >= skillNum) {
        let skillDiv = document.createElement('div');
        skillDiv.classList.add('skill-div');
        skillDiv.classList.add(classListForAbsolutePositioning);
        let skillNumP = document.createElement('p');
        skillNumP.innerText = skillNum;
        let skillUpP = document.createElement('p');
        skillUpP.innerText = skillUp;
        skillDiv.appendChild(skillNumP);
        skillDiv.appendChild(skillUpP);
        parent.appendChild(skillDiv);
        //event listener for the skill tree
        skillDiv.addEventListener('click', ()=>{
            let wizardLevel = wizard.level
            if(skillUp === 'Strength'){
                wizard.strength += parseFloat(wizardLevel);
                console.log(wizardLevel)
                console.log(wizard.strength)
            }
            if(skillUp === 'Intelligence'){
                wizard.attack += wizardLevel;
            }
        })
   
    }


    createSkillSlot('left-1-skill-tree-div', 'Strength', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('left-3-skill-tree-div', 'Intelligence', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('left-4-skill-tree-div', 'Willpower', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('left-5-skill-tree-div', 'Charisma', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('left-6-skill-tree-div', 'Defense', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('right-1-skill-tree-div', 'Willpower', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('right-2-skill-tree-div', 'Consititution', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('right-3-skill-tree-div', 'F-Strength', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('right-4-skill-tree-div', 'F-Dexterity', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('right-5-skill-tree-div', 'F-Intelligence', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('right-6-skill-tree-div', 'F-Willpower', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('middle-1-skill-tree-div', 'F-Charisma', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('middle-2-skill-tree-div', 'F-Defense', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('middle-3-skill-tree-div', 'F-Willpower', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('middle-4-skill-tree-div', '+Difficulty', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('middle-5-skill-tree-div', '+Item Ratings', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('middle-6-skill-tree-div', '+F Strength', 1, document.querySelector('.div-skill-tree'))
    createSkillSlot('left-2-skill-tree-div', 'Dexterity', 1, document.querySelector('.div-skill-tree'))