let estado_motor = 0
pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
    if (estado_motor == 0) {
        estado_motor = 1
    } else {
        estado_motor = 0
    }
})
basic.forever(function () {
    if (estado_motor == 1) {
        hackbitmotors.MotorRun(hackbitmotors.Motors.M1A, 255)
    } else {
        hackbitmotors.MotorStopAll()
    }
})
