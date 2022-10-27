// 1. Создайте шаблон Person с помощью класса.
// 2. Добавьте для этого класса три статических метода greeting, которые будут выводить приветствие на разных языках.

1.
class Person {
    static greetingEn() {
        console.log('Hi');
    }
    static greetingSp() {
        console.log('Holla');
    }
    static greetingRu() {
        console.log('Привет');
    }
}

Person.greetingEn()
Person.greetingSp()
Person.greetingRu()



