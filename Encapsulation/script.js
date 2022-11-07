class Product {
    constructor(name, book) {
        this.name = name
        this.book = book
    }
    #generateBookingNumber() {
        return Math.floor(Math.random() * 100000)
    }
    booking() {
        return `${this.name}, ${this.#generateBookingNumber()} - Заказов`
    }
    cancelBooking() {
        return `${this.name}, ${--this.book} - Заказов`
    }
}

const book1 = new Product('Sapiens', 0)

console.log(book1.booking());