
let counter = 1;

function spawn_doom_popup() {
    const container = document.getElementById("popup-container");
    if (container) {
        let calculatedValue = counter * 500;
        container.innerHTML = '<div class="doom-popup">' + calculatedValue + '</div>';
        counter++;
    }
    requestAnimationFrame(spawn_doom_popup);
}

requestAnimationFrame(spawn_doom_popup);
