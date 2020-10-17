function Happy () {
    images.createImage(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `).showImage(0)
    basic.clearScreen()
    images.createBigImage(`
        # . # # # # . # # #
        # . # # . # . # . #
        # # # # # # . # # #
        # . # # . # . # . .
        # . # # . # . # . .
        `).scrollImage(0, 300)
    images.createBigImage(`
        . # # # . # . # . #
        . # . # . # . # . #
        . # # # . . # . . #
        . # . . . . # . . .
        . # . . . . # . . #
        `).scrollImage(1, 300)
    basic.clearScreen()
    bluetooth.advertiseUrl(
    "https://makecode.com",
    1e+116,
    true
    )
}
function PLAY_ () {
    basic.showNumber(0)
    control.waitMicros(1)
    basic.showNumber(1)
    control.waitMicros(1)
    basic.showNumber(2)
    control.waitMicros(1)
    basic.showNumber(3)
    control.waitMicros(1)
    basic.showNumber(4)
    control.waitMicros(1)
    basic.showNumber(5)
    control.waitMicros(1)
    basic.showNumber(6)
    control.waitMicros(1)
    basic.showNumber(7)
    control.waitMicros(1)
    basic.showNumber(8)
    control.waitMicros(1)
    basic.showNumber(9)
    control.waitMicros(1)
    images.createImage(`
        . # # # #
        # # # . #
        . # # . #
        . # # . #
        . # # # #
        `).showImage(0)
    basic.clearScreen()
    Happy()
}
PLAY_()
