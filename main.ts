input.onButtonPressed(Button.A, function () {
    dir += 3
    dir = dir % 4
})
input.onButtonPressed(Button.B, function () {
    dir += 1
    dir = dir % 4
})
let show = false
let won = false
let dir = 0
let x_snake = 2
let y_snake = 2
loops.everyInterval(500, function () {
    if (won) {
        if (!(show)) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            show = true
        } else {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            show = false
        }
        return;
    }
    led.toggle(x_snake, y_snake)
    if (dir == 0) {
        y_snake += 0 - 1
    } else if (dir == 1) {
        x_snake += 1
    } else if (dir == 2) {
        y_snake += 1
    } else if (dir == 3) {
        x_snake += 0 - 1
    }
    if (x_snake < 0) {
        x_snake = 0
    }
    if (x_snake > 4) {
        x_snake = 4
    }
    if (y_snake < 0) {
        y_snake = 0
    }
    if (y_snake > 4) {
        y_snake = 4
    }
    won = led.point(0, 0) && led.point(1, 0) && led.point(2, 0) && led.point(3, 0) && led.point(4, 0) && led.point(0, 1) && led.point(1, 1) && led.point(2, 1) && led.point(3, 1) && led.point(4, 1) && led.point(0, 2) && led.point(1, 2) && led.point(2, 2) && led.point(3, 2) && led.point(4, 2) && led.point(0, 3) && led.point(1, 3) && led.point(2, 3) && led.point(3, 3) && led.point(4, 3) && led.point(0, 4) && led.point(1, 4) && led.point(2, 4) && led.point(3, 4) && led.point(4, 4)
})
basic.forever(function () {
	
})
