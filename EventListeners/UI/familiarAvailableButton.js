const buttonAvailableFamiliars = document.querySelector('.button-familiar-available');
buttonAvailableFamiliars.addEventListener('click', () => {
    document.querySelectorAll('.div-familiar-container-list div').forEach((div) => {
        div.classList.remove('hide');
    });
    document.querySelectorAll('.div-familiar-container-list-owned div').forEach((div) => {
        div.classList.add('hide');
    })
})
