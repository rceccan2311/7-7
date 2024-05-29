let distancia = 0
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.pause(200)
    if (distancia > 0 && distancia < 10) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    }
})
