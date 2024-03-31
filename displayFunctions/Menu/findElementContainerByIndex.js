function findElementContainerByIndex(index, container) {
    for (let i = 0; i < container.length; i += 1) {
        if (index === i) {
            let element = container[i]
            element.classList.remove('hide')
        } else {
            let element = container[i]
            element.classList.add('hide')
        }
    }
}