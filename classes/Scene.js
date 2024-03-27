class Scene {
    constructor(title, imgPath, description){
        this.title = title;
        this.imgPath = imgPath;
        this.description = description;
    }
    setScene(title_element, image_element, p_element){
        title_element.innerText = this.title;
      console.log(image_element)
        p_element.innerText = this.description;
    }
}

