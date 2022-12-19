radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    if (AUTHORIZED == 0) {
        entry_attempt = "" + entry_attempt + "A"
    } else {
        radio.sendNumber(1)
        basic.showNumber(1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (AUTHORIZED == 0) {
        entry_attempt = "" + entry_attempt + "B"
    } else {
        radio.sendNumber(2)
        basic.showNumber(2)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (entry_attempt == password) {
        basic.showIcon(IconNames.Yes)
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(659, music.beat(BeatFraction.Half))
        AUTHORIZED = 1
        basic.clearScreen()
        basic.pause(10000)
        basic.showIcon(IconNames.Sad)
        AUTHORIZED = 0
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(208, music.beat(BeatFraction.Breve))
        basic.clearScreen()
        entry_attempt = ""
    }
})
let entry_attempt = ""
let AUTHORIZED = 0
let password = ""
password = "ABAABABB"
radio.setGroup(911)
AUTHORIZED = 0
basic.forever(function () {
	
})
