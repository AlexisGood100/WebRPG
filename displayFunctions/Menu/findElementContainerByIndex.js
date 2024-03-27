function findElementContainerByIndex(index, container) {
    for (let i = 0; i < container.length; i += 1) {
        if (index === i) {
            let element = container[i]
            element.classList.remove('hide')
            console.log(`#${i}: ${element}`)
        } else {
            let element = container[i]
            element.classList.add('hide')
            console.log(`#${i}: ${element}`)
        }
    }
}