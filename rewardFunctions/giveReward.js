function giveReward(currentEnemy) {
    //write code for overlay to appear that explains reward with a next button.
    currentEnemy.reward();
}

const div_reward_container = document.querySelector('.end-of-battle-screen')
const remove_reward_button = document.querySelector('.button-remove-reward-screen')