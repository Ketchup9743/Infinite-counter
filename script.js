let counter = 1;

function spawn_doom_popup() {
    const container = document.getElementById("popup-container");
    if (container) {
        container.innerHTML = '<div class="doom-popup">' + counter + '</div>';
        counter++;
    }
}

setInterval(spawn_doom_popup, 1);
