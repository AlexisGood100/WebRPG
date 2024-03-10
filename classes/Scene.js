class Scene {
    constructor(title, imgPath, description){
        this.title = title;
        this.imgPath = imgPath;
        this.description = description;
    }
    setScene(title_element, image_element, p_element){
        title_element.innerText = this.title;
        image_element.classList.add(this.imgPath);
        p_element.innerText = this.description;
    }
}

