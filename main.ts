let mySprite = sprites.create(assets.image`geometrydash ship`, SpriteKind.Player)
mySprite.ay = 300
forever(function () {
    if (controller.A.isPressed()) {
        mySprite.vy = -120
    }
})
