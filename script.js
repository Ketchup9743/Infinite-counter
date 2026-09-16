
let counter = 1;
let multiplier = 1;

function spawn_doom_popup() {
    const container = document.getElementById("popup-container");
    if (container) {
        let calculatedValue = counter * multiplier;
        container.innerHTML = '<div class="doom-popup">' + counter + ' = ' + calculatedValue + '</div>';
        counter++;
    }
    requestAnimationFrame(spawn_doom_popup);
}

fetch('config.json')
    .then(response => response.json())
    .then(data => {
        if (data.multiplier) {
            multiplier = data.multiplier;
        }
        requestAnimationFrame(spawn_doom_popup);
    })
    .catch(() => {
        requestAnimationFrame(spawn_doom_popup);
    });
