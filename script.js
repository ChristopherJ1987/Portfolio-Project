const panels = document.querySelectorAll('.panel');
const allPanels = document.querySelector('.panels');
const glowingButton = document.querySelector('.glowing-btn');

    function toggleOpen() {
        // console.log('Hello');
        this.classList.toggle('open');
    }

    function toggleActive(e) {
        // console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function showPanels() {
    if(allPanels.style.display === 'none') {
        allPanels.style.display = "flex";
    }
}

glowingButton.addEventListener('click', showPanels);