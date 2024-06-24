document.addEventListener('DOMContentLoaded', function() {
    const wizard = document.getElementById('wizard');

    document.body.addEventListener('click', function(event) {
        // Get the position of the click
        const clickX = event.clientX;
        const clickY = event.clientY;

        // Calculate the new position for the wizard (centering the wizard)
        const wizardX = clickX - (wizard.offsetWidth / 2);
        const wizardY = clickY - (wizard.offsetHeight / 2);

        // Determine the direction the wizard should face
        const direction = clickX > wizard.offsetLeft + wizard.offsetWidth / 2 ? 'right' : 'left';

        // Move the wizard to the new position and flip it if necessary
        wizard.style.left = `${wizardX}px`;
        wizard.style.top = `${wizardY}px`;
        wizard.style.transform = `scaleX(${direction === 'right' ? 1 : -1})`;
    });
});
