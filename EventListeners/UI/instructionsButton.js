//Start of instructions
const buttonForFinishingInstructions = document.querySelector('.button-done-with-instructions');
buttonForFinishingInstructions.addEventListener('click', () => {
    document.querySelector('.div-choose-class').classList.remove('hide')
    document.querySelectorAll('.div-player-choice').forEach((choice) => {
        choice.classList.remove('hide');
        document.querySelector('body').classList.remove('over-flow')
    })
    document.querySelector('.div-menu').classList.remove('hide')
    document.querySelector('.instructions-to-game-page').remove();
})