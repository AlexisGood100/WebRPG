function createDifferentClasses(nameOf, arrayPlayerChoices, imgPath){
    let newCharacter = new PlayerClass(10,10,10,12,13,18);
    newCharacter.name = nameOf;
    newCharacter.class = nameOf;
    newCharacter.imgPath = imgPath;
    arrayPlayerChoices.push(newCharacter);
    console.log(nameOf + ' has been created.');
    }
