const map_level_html = document.querySelector('.h1-map-level')
map_level_html.innerText = 'Map Level: 1';

function fillMap(map) {
    for (let i = 0; i < 15; i++) {
        let mapSquare = document.createElement('div');
        mapSquare.classList.add('map-square');
        mapSquare.style.backgroundImage = `url('/images/map/map${i + 1}.jpg')`;
        map.appendChild(mapSquare);
    }
}
fillMap(document.querySelector('.div-map-piece-container'));
