import time
import js #type: ignore
def infinite_counter():
    counter = 1
    while True:
        js.alert(f"DOOM COUNTER: {counter}")
        counter += 1
        time.sleep(0.5)  # Wait half a second before the next number
infinite_counter()
