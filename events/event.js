const eventEmitter = require("events")

class Event extends eventEmitter {}

const event = new Event()

event.on("Click", () => {
    console.log("Button clicked")
})

event.on("Click", () => {
    console.log("Button clicked 2")
});

event.emit("Click") // Button clicked