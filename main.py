strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
strip.clear()
strip.show()
strip.show_rainbow(1, 360)
strip.set_brightness(10)
strip.shift(4)

def on_forever():
    pass
basic.forever(on_forever)
