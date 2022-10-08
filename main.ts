let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.show()
basic.forever(function () {
    for (let Index = 0; Index <= 12; Index++) {
        strip.showColor(neopixel.rgb(input.acceleration(Dimension.X) / 70, input.acceleration(Dimension.Y) / 70, input.acceleration(Dimension.Z) / 70))
        strip.show()
        basic.pause(10)
    }
})
