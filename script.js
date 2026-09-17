let counter = 1;
let clickCount = 0;
const container = document.getElementById("popup-container");
const clickCounterDisplay = document.getElementById("click-counter");
function show_click_message() {
    clickCount++;
    if (clickCounterDisplay) {
        clickCounterDisplay.textContent = clickCount;
    }
    window.alert(clickCount % 25 === 0 ? "Why do you keep clicking this?" : "Nothing Here :)");
}

function spawn_doom_popup() {
    if (container) {
        let popup = container.querySelector(".doom-popup");
        if (!popup) {
            popup = document.createElement("button");
            popup.className = "doom-popup";
            popup.type = "button";
            popup.onclick = show_click_message;
            container.appendChild(popup);
        }
        popup.textContent = counter;
        counter++;
    }
    requestAnimationFrame(spawn_doom_popup);
}

requestAnimationFrame(spawn_doom_popup);
