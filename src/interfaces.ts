interface UserInterface {
    readonly firstName: string;
    email   : string;
}

const newUser: UserInterface = {
    firstName: 'felipe',
    email   : 'felipe@gmail.com '
}

interface AuthorInterface {
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface   = {
    firstName: 'John',
    email: 'john@example.com',
    books: ['Book 1', 'Book 2']
}

interface MathematicalOperations {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

const mathOperations: MathematicalOperations = {
    add: (a: number, b: number): number => a + b,
    subtract: (a: number, b: number): number => a - b
};

mathOperations.add(5, 3); // 8
mathOperations.subtract(5, 3); // 2