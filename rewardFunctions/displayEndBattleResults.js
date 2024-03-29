function display_end_of_battle_rewards_p_change(node_list, reward0, reward1, reward2, reward3) {
    node_list[0].innerText = `Gold: ${reward0}`
    node_list[1].innerText = `Wood: ${reward1}`
    node_list[2].innerText = `Lumber: ${reward2}`
    node_list[3].innerText = `Stone: ${reward3}`
}