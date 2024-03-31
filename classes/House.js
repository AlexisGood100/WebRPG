const divHouseContainer =  document.querySelector('.div-house-container');

function random_number(){
let random_number = Math.floor(Math.random() * 7) - 1
if(random_number < 0){
    return 0
} else {
    return random_number;
}
}

class House {
    constructor(){
        
    }
    create_essence_clock(){
        let random_essence = this.find_element_type()
        if(random_essence == 'Fire'){
            setInterval(()=>{
                wizard.fireEssence += 1
            }, 1000)
        }
        if(random_essence == 'Water'){
            setInterval(()=>{
                wizard.waterEssence += 1
            }, 1000)
        }
        if(random_essence == 'Earth'){
            setInterval(()=>{
                wizard.earthEssenceEssence += 1
            }, 1000)
        }
        if(random_essence == 'Air'){
            setInterval(()=>{
                wizard.airEssence += 1
            }, 1000)
        }
        if(random_essence == 'Light'){
            setInterval(()=>{
                wizard.lightEssence += 1
            }, 1000)
        }
        if(random_essence == 'Dark'){
            setInterval(()=>{
                wizard.darkEssence += 1
            }, 1000)
        }
    }
    find_element_type(){
        let typeArray = ['Water', 'Fire', 'Earth', 'Air', 'Light', 'Dark'];
        return typeArray[random_number()];
}
insert_house(parent, size){
    let house_element = document.createElement('div')
    if(size === 'small'){
        house_element.classList.add('house')
        house_element.classList.add('house-element')
    } else if(size === 'medium'){
        house_element.classList.add('medium-house')
        house_element.classList.add('house-element')
    } else if(size === 'large'){
        house_element.classList.add('large-house')
        house_element.classList.add('house-element')
    }
    parent.append(house_element)
}
}




