1.
class Product {
    constructor(name, book) {
        this.name = name
        this.book = book
    }
    booking() {
        return `${this.name}, ${++this.book} - Заказов`
    }
    cancelBooking() {
        return `${this.name}, ${--this.book} - Заказов`
    }

    get numberOfBook() {
        return `${this.book} - Заказов`
    }

    set newBook(value) {
        this._book = value + this.book
        return this._book
   }
}

const book1 = new Product('Sapiens', 0)
const book2 = new Product('Преступление и наказание', 0)

console.log(book1.booking())
console.log(book1.booking())
console.log(book1.booking())
console.log(book1.cancelBooking())

book1.newBook = 100 // Присвоение нового значения

console.log(book1.numberOfBook);

console.log(book1._book);

console.log(book1);



2.
class Car {
    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }
    accelerate() {
        this.speed += 5
        return `${this.name}, Скорость - ${this.speed} км/ч`
    }

    break() {
        this.speed -= 5
        return `${this.name}, Скорость - ${this.speed} км/ч`
    }

    get speedMph() {
        return `${this.name}, Скорость - ${this.speed / 1.6} миль/ч`
    }

    set speedMph(value) {
        this._speedMph = value / 1.6
        this.speed = value * 1.6
    }
}

const auto1 = new Car('Audi', 80)
const auto2 = new Car('Ford', 30)

auto1.speedMph = 100

console.log(auto1);


