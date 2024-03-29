function hide_all_divs(nodelist_divs) {
    nodelist_divs.forEach((div) => {
        div.classList.add('no-display')
    })
}