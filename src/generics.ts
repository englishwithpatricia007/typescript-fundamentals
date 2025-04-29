const returnValue = <T>(value: T): T => value;

const message = returnValue<string>('Hello World!');
const count = returnValue<number>(10);

function getFirstValueFromArray(array: any): any {
    return array[0];
}

function getFirstValueFromArray2<T>(array: T[]): T {
    return array[0];
}

const getFirstValueFromStringArray = getFirstValueFromArray(['oi, ', 'tudo', 'bem! ', 'Viu?']);
const getFirstValueFromNumberArray = getFirstValueFromArray([1, 'Lucas', true, 2.5, { name: 'Lucas' }]);

const getFirstValueFromStringArray2 = getFirstValueFromArray2<string>(['Lucas', 'Felipe', 'Daniel']);
const getFirstValueFromNumberArray2 = getFirstValueFromArray2<number>([1, 2, 3, 4, 5]);

//PRoMiSES
const returnPromise = async (): Promise<number> => {
    return 5;
}

//Classes
class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }

}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);