"use strict";
let age = 5;
const firstName = "Lucas";
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true];
const names = ['Lucas', 'João', 'Maria'];
const person = ['Lucas', 5];
const people = [
    ['Lucas', 5],
    ['João', 10],
    ['Maria', 15]
];
const product = false;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
    Direction["Right"] = "Direita";
})(Direction || (Direction = {}));
let direction = Direction.Up;
console.log(direction);
direction = Direction.Left;
console.log(direction);
const productName = 'Tênis';
let itemId;
itemId = productName;
let item2Id = productName;
