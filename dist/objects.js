"use strict";
const user = {
    firstName: 'Lucas',
    lastName: 'Silva',
    age: 25,
    password: '123456',
    orders: [
        { id: 1, price: 100 },
        { id: 2, price: 200 },
        { id: 3, price: 300 }
    ]
};
const pass = (message) => { };
pass(user.password);
const pass2 = (message) => { };
pass2(user.password);
const author = {
    firstName: 'Daniel',
    lastName: 'Silveira',
    age: 0,
    orders: [{ id: 1, price: 35.45 }],
    books: ['Before the frost']
};
