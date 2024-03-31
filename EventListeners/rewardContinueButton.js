document.querySelector('.button-remove-reward-screen').addEventListener('click', () => {
    document.querySelector('.end-of-battle-screen').classList.add('hide')
    document.querySelector('body').classList.remove('over-flow')
})
