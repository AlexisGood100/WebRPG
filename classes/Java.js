class Java {
    constructor(name, typeOfAttribute, amount, price, imgPath){
        this.name = name;
        this.typeOfAttribute = typeOfAttribute;
        this.amount = amount;
        this.price = price;
        this.imgPath = imgPath;
    }
    giveConstitutionAttributeToWizard(wizard){
        wizard.constitution += this.amount;
    }
    giveStrengthAttributeToWizard(wizard){
        wizard.strength += this.amount;
    }
    giveIntelligenceAttributeToWizard(wizard){
        wizard.intelligence += this.amount;
    }
    giveCharmismaAttributeToWizard(wizard){
        wizard.charisma += this.amount;
    }
    giveWillpowerAttributeToWizard(wizard){
        wizard.willpower += this.amount;
    }
    giveDefenseAttributeToWizard(wizard){
        wizard.defense += this.amount;
    }
    giveDexterityAttributeToWizard(wizard){
        wizard.dexterity += this.amount;
    }
    // End of wizard stat + method
    //Familiar stat + method
    giveDefenseToFamiliar(familiarArr){
        familiarArr.forEach((familiar)=>{
            familiar.defense += 1;
        })
    }
    giveStrengthToFamiliar(familiarArr){
        familiarArr.forEach((familiar)=>{
            familiar.strength += 1;
        })
    }
    giveConsititutionToFamiliar(familiarArr){
        familiarArr.forEach((familiar)=>{
            familiar.constitution += 1;
        })
}

}

function createJavaObj(java_obj, parent, wizard, familiarArr,spanForJavaCount, javaCounter){
    let java_div = document.createElement('div');
    java_div.classList.add('card');
    let java_img = document.createElement('div');
    java_img.style.backgroundImage = `url(${java_obj.imgPath})`;
    java_img.classList.add('java-img')
    let p_java_name = document.createElement('p');
    p_java_name.innerText = `Name: ${java_obj.name}`;
    let p_amount = document.createElement('p');
    p_amount.innerText = `Increase Amount: ${java_obj.amount}`;
    let p_price = document.createElement('p');
    p_price.innerText = `Price: ${java_obj.price}`;
    let p_type_of = document.createElement('p');
    p_type_of.innerText = `Type: ${java_obj.typeOfAttribute}`;
    java_div.appendChild(p_java_name)
    java_div.appendChild(java_img)
    java_div.appendChild(p_type_of)
    java_div.appendChild(p_amount)
    java_div.appendChild(p_price)
    parent.appendChild(java_div);
    let buttonBuy = document.createElement('button');
    buttonBuy.innerText = 'Buy';

    buttonBuy.addEventListener('click', ()=>{
        javaCounter.count += 1
        // if(wizard.gold >= java_obj.price){
            if(java_obj.typeOfAttribute === 'Constitution'){
                java_obj.giveConstitutionAttributeToWizard(wizard);
                
            } else if(java_obj.typeOfAttribute === 'Strength'){
                java_obj.giveStrengthAttributeToWizard(wizard);
            }
            else if(java_obj.typeOfAttribute === 'Intelligence'){
                java_obj.giveIntelligenceAttributeToWizard(wizard);
            }
            else if(java_obj.typeOfAttribute === 'Willpower'){
                java_obj.giveWillpowerAttributeToWizard(wizard);
            } 
            else if(java_obj.typeOfAttribute === 'Dexterity'){
                java_obj.giveDexterityAttributeToWizard(wizard);
            }
            else if(java_obj.typeOfAttribute === 'Charisma'){
                java_obj.giveCharismaAttributeToWizard(wizard);
            } else if(java_obj.typeOfAttribute === 'Defense'){
                java_obj.giveDefenseAttributeToWizard(wizard);
            } else if(java_obj.typeOfAttribute === 'Familiar Defense'){
                java_obj.giveDefenseToFamiliar(familiarArr)
            } else if(java_obj.typeOfAttribute === 'Familiar Attack'){
                java_obj.giveStrengthToFamiliar(familiarArr)
            }
            else if(java_obj.typeOfAttribute === 'Familiar Constitution'){
                java_obj.giveConstitutionToFamiliar(familiarArr)
            }
        wizard.gold -= java_obj.price
        spanForJavaCount.innerText = javaCounter.count;
    })
    java_div.appendChild(buttonBuy);
}
