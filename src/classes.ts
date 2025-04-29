interface IPerson {
    id: number;
    greet(): string;
}

class Person implements IPerson {
    readonly id: number;
    protected name: string; //apenas na classe
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;   
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        return this.name;
    }
}

const individual = new Person(1, 'Lucas', 25);
individual.greet(); // Hello, my name is Lucas and I am 25 years old.

class Employee extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age); // Chama o construtor da classe pai (Person)
    }

    whoAmI() {
        console.log(`I am an employee. My name is ${this.name}.`);
        return this.name;
    }
}

