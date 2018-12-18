// microbit

input.onButtonPressed(Button.AB, function () {
    transmitMessage2()
})
function transmitMessage2() {
    basic.showIcon(IconNames.No)
    bluetooth.advertiseUrl(
    "https://github.com/tws4793",
    7,
    false
    )
    basic.pause(5000)
    bluetooth.stopAdvertising()
}
const threshold = {
    light: 200,
    temp: 26
}
basic.forever(function () {
    if (input.lightLevel() < threshold.light && input.temperature() > threshold.temp) {
        transmitMessage2()
    }
    basic.pause(5000)
})
