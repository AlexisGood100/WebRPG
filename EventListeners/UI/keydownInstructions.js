//Need to set up the instructions so the player knows what they are doing

const divInstruction = document.querySelector('.div-instructions-container');
// Function to be executed when the space bar is pressed
function onSpaceKeyPress() {
    divInstruction.classList.toggle('hide');
    // Add your code to execute when the space bar is pressed
}

// Event listener for the 'keydown' event
window.addEventListener('keydown', function (event) {
    // Check if the pressed key is the space bar (keyCode 32)
    if (event.keyCode === 32) {
        onSpaceKeyPress();
        document.querySelector('body').classList.toggle('over-flow');
    }
});
