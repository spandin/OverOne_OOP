class Car {
    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }
}

class Bike extends Car {
    constructor(name, speed, color, year) {
        super(name, speed)
        this.color = color
        this.year = year
    }
}

const audi = new Bike('Audi', 80, 'Blue', 1999)

console.log(audi);