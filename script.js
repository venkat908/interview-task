document.addEventListener('DOMContentLoaded', function() {
    const wizard = document.getElementById('wizard');

    document.body.addEventListener('click', function(event) {
        let clickX = event.clientX;
        let clickY = event.clientY;

        let wizardX = clickX - (wizard.offsetWidth / 2);
        let wizardY = clickY - (wizard.offsetHeight / 2);

        let direction = clickX > wizard.offsetLeft ? 'right' : 'left';

        wizard.style.transform = `translate(${wizardX}px, ${wizardY}px) scaleX(${direction === 'right' ? 1 : -1})`;
    });
});

