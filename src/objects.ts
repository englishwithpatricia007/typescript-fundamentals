//Type
type Order ={
    id: number;
    price: number;
}

type User = {
    firstName: string;
    lastName: string;
    age: number;
    password?: string; //? significa que é opcional
    // password: string; // Se não for opcional, o TypeScript vai exigir que a propriedade seja passada
    orders: Order[]; // Array de objetos do tipo Order
}

const user: User = {
    firstName: 'Lucas',
    lastName: 'Silva',
    age: 25,
    password: '123456', // Se a propriedade password for opcional, não é necessário passar ela
    orders: [
        { id: 1, price: 100 },
        { id: 2, price: 200 },
        { id: 3, price: 300 }
    ]   
}

const pass = (message : string) : void => {} // Se a propriedade password for opcional, não é necessário passar ela
pass(user.password!) //Estou certa de que o password não é undefined ou null, então não preciso me preocupar com isso. O operador ! diz ao TypeScript que a variável não é nula ou indefinida.

const pass2 = (message? : string) : void => {} // Se a propriedade password for opcional, não é necessário passar ela
pass2(user.password) 

//Unions
type Author = {
    books : string[];
}

const author: Author & User = {
    firstName: 'Daniel',
    lastName: 'Silveira',
    age: 0,
    orders: [{ id: 1, price: 35.45 }],
    books: ['Before the frost']
};
