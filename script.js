document.addEventListener('DOMContentLoaded', function() {
    const wizard = document.getElementById('wizard');
    let wizardWidth = wizard.offsetWidth / 2;
    let wizardHeight = wizard.offsetHeight / 2;

    document.body.addEventListener('click', function(event) {
        let clickX = event.clientX - wizardWidth;
        let clickY = event.clientY - wizardHeight;

        let wizardX = wizard.offsetLeft;
        let wizardY = wizard.offsetTop;

        let direction = clickX > wizardX ? 'right' : 'left';

        wizard.style.transform = `translate(${clickX}px, ${clickY}px) scaleX(${direction === 'left' ? 1 : -1})`;
    });
});

