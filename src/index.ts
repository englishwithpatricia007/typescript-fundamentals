//Tipos básicos
let age: number = 5;
const firstName: string = "Lucas";
const isValid: boolean = true;

let idk: any = 5;
idk = '12'
idk = true;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const names: string[] = ['Lucas', 'João', 'Maria'];

//Tupla
const person: [string, number] = ['Lucas', 5];

//Lista de tuplas
const people: [string, number][] = [
  ['Lucas', 5],
  ['João', 10],
  ['Maria', 15]
];

//Intersections
const product: string | number | boolean = false;

//Enum
enum Direction {
  Up = 1,
  Down = 2,
  Left = 'Esquerda',
  Right = 'Direita'
}

let direction = Direction.Up;
console.log(direction);
direction = Direction.Left;
console.log(direction);

//Type Assertion
const productName : any = 'Tênis';

let itemId
itemId = productName as string;
let item2Id = <string>productName;

