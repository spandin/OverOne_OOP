// 1. Используйте шаблон Product. Создайте шаблон Clothes, который будет наследоваться от Product.
// 2. Шаблон Clothes должен иметь такие собственные свойства как size, color.

function Product(name, code, price) {
    this.name = name
    this.code = code
    this.price = price
}

function Clothes(name, code, price, size, color) {
    Product.call(this, name, code, price)
    this.size = size
    this.color = color
}

Clothes.prototype = Product.prototype

Clothes.prototype.getColor = function() {
    return this.color
}

const shirt = new Clothes('Bershka Shirt', '231775', '25$', 'L', 'White')

console.log(shirt);

console.log(shirt.getColor());