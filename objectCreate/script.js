const PersonProto = {
    greetingEn() {
        return `Hi ${this.name}`
    },
    greetingSp() {
        return `Holla ${this.name}`
    },
    greetingRu() {
        return `Привет ${this.name}`
    }
}

const Stanislau = Object.create(PersonProto, {
    name: {
        writable: false,
        value: 'Stanislau'
    }
})

console.log(Stanislau.greetingSp());
