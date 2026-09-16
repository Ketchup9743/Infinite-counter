from pyscript import window
state = {"counter": 1}
def trigger_doom_alert():
    window.alert(f"DOOM COUNTER: {state['counter']}")
    state["counter"] += 1
window.setInterval(trigger_doom_alert, 500)
