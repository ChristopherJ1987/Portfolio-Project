const panels = document.querySelectorAll('.panel');
const allPanels = document.querySelector('.panels');
let glowingButton = document.querySelector('.glowing-btn');

// Can't get the hide button to work yet....
// let hideButton = document.querySelector('#hidePanels');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function showPanels() {
    if (allPanels.style.display === 'none') {
        allPanels.style.display = "flex";
    }
    glowingButton.style.display = "none";

    // Can't get the hide button to work yet....
    // glowingButton.innerHTML = '<span class="glowing-txt">Hi<span class="faulty-letter">d</span>e <span class="faulty-letter">P</span>anels</span>';
    // glowingButton.id = "hidePanels";

}
// Can't get the hide button to work yet....
// function closePanels() {
//     console.log("hide button pushed");
//     if (allPanels.style.display === 'flex') {
//         allPanels.style.display = "none";
//     }
// }

glowingButton.addEventListener('click', showPanels);

// Can't get the hide button to work yet....
// hideButton.addEventListener('click', closePanels);