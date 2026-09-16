
let counter = 1;
let clickCount = 0;

const container = document.getElementById("popup-container");

if (container) {
    container.addEventListener("click", (event) => {
        if (event.target.closest(".doom-popup")) {
            clickCount++;
            alert(clickCount === 25 ? "Why do you keep clicking this?" : "Nothing Here :)");
        }
    });
}

function spawn_doom_popup() {
    if (container) {
        container.innerHTML = '<button class="doom-popup" type="button">' + counter + '</button>';
        counter++;
    }
    requestAnimationFrame(spawn_doom_popup);
}
requestAnimationFrame(spawn_doom_popup);
