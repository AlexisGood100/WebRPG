class Java {
    constructor(name, typeOfAttribute, amount, price, imgPath){
        this.name = name;
        this.typeOfAttribute = typeOfAttribute;
        this.amount = amount;
        this.price = price;
        this.imgPath = imgPath;
    }
    giveHealthAttributeToWizard(wizard){
        wizard.constitution += this.amount;
    }
}



function createJavaObj(java_obj, parent, wizard){
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
        if(java_div.typeOfAttribute === 'Health'){
            java_obj.giveConstitutionAttributeToWizard(wizard);
        } else if(java_div.typeOfAttribute === 'Constitution'){

        }
    })
    java_div.appendChild(buttonBuy);
}
