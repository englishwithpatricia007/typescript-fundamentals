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