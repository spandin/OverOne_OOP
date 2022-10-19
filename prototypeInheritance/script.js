1.
function Product(name, book) {
    this.name = name
    this.book = book
}

Product.prototype.booking = function () {
    return `${this.name}, ${++this.book} - Заказов`
}

Product.prototype.cancelBooking = function () {
    return `${this.name}, ${--this.book} - Заказов`
}

const book1 = new Product('Sapiens', 0)
const book2 = new Product('Преступление и наказание', 0)

console.log(book1.booking());
console.log(book1.booking());
console.log(book1.booking());

console.log(book1.cancelBooking());

console.log(book2.booking());
console.log(book2.booking());

console.log(book2.cancelBooking());


2.
function Car(name, speed) {
    this.name = name
    this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed += 5
    return `${this.name}, Скорость - ${this.speed} км/ч`
}

Car.prototype.break = function () {
    this.speed -= 5
    return `${this.name}, Скорость - ${this.speed} км/ч`
}

const auto1 = new Car('Audi', 80)
const auto2 = new Car('Ford', 30)

console.log(auto1.accelerate());
console.log(auto1.accelerate());

console.log(auto1.break());

console.log(auto2.accelerate());
console.log(auto2.break());
console.log(auto2.accelerate());
console.log(auto2.accelerate());
console.log(auto2.accelerate());

