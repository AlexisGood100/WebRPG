const buttonOwnedFamiliars = document.querySelector('.button-familiar-owned');
buttonOwnedFamiliars.addEventListener('click', () => {
    document.querySelectorAll('.div-familiar-container-list div').forEach((div) => {
        div.classList.add('hide');
    });
    document.querySelectorAll('.div-familiar-container-list-owned div').forEach((div) => {
        div.classList.remove('hide');
    })
})