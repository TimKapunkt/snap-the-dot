input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        if (game.score() < 2) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.pause(100)
            sprite.delete()
        } else {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(100)
            sprite.delete()
        }
        game.gameOver()
    }
})
input.onGesture(Gesture.Shake, function () {
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    game.pause()
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let speed = 100
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(speed)
})
