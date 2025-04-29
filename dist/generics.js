"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const returnValue = (value) => value;
const message = returnValue('Hello World!');
const count = returnValue(10);
function getFirstValueFromArray(array) {
    return array[0];
}
function getFirstValueFromArray2(array) {
    return array[0];
}
const getFirstValueFromStringArray = getFirstValueFromArray(['oi, ', 'tudo', 'bem! ', 'Viu?']);
const getFirstValueFromNumberArray = getFirstValueFromArray([1, 'Lucas', true, 2.5, { name: 'Lucas' }]);
const getFirstValueFromStringArray2 = getFirstValueFromArray2(['Lucas', 'Felipe', 'Daniel']);
const getFirstValueFromNumberArray2 = getFirstValueFromArray2([1, 2, 3, 4, 5]);
const returnPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return 5;
});
class GenericNumber {
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => x + y);
