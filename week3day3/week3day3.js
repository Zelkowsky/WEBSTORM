
//1

let a = 0;
while (a < 11) {
    console.log( a );
    a++;
}

let a1 = 0;
do {
    console.log( a1 );
    a1++;
} while (a1 < 11);


for (let a2 = 0; a2 < 11; a2++) {
    console.log(a2);
}


//2


let stopWord = prompt();

for (let i = 0; stopWord !== "Завершить" && i <= 10; i++){
  console.log(i);
  stopWord = prompt();
  console.log(stopWord);
}

//3

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log( i );
    }
}

//4



const A = 201;

switch (A % 2) {
  case 0:
    console.log('чет');
    break;
  default:
    console.log('нечет');
    break;
}

//5

let a4 = 2, b = 1;
a4 = a4 ^ b;
b = a4 ^ b;
a4 = a4 ^ b;

console.log('a is now:', a4);
console.log('b is now:', b);

//6

var numb = 143.2343;
numb = numb.toFixed(2);


//7

var number = 42.2654
var rounded = Math.round(number * 10) / 10


//8

'I learn JavaScript'.indexOf('JavaScript');


//9

var count = 0;

function counter() {
    count++;
    return count;
}

console.log(counter());
console.log(counter());

//10


function partial(func, ...argsBound) {
    return function(...args) { // (*)
        return func.call(this, ...argsBound, ...args);
    }
}

let user = {
    firstName: "Гость",
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};

user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Привет");


//11


let squarePow = (n, callbackFn) => {
  return callbackFn(n*n);
}
squarePow(2, (x) => {console.log(x*x);});


//12

function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}


function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(5)(5) );



// часть 2


//1

// var obj = new Object({a : 'a' , b : 'b' , c : 'c'});
//
// alert(obj['a']);
// alert(obj.a);
// alert(obj['b']);
// alert(obj.b);
// alert(obj['c']);
// alert(obj.c);

//2

const user1 = ({ a: 2, b : "Coding"}) ;

const cloneuser1 = { ...user1 };

console.log(cloneuser1);


const user2 = { a: 2, b : "Coding" };

const cloneuser2 = Object.assign({}, user2);

console.log(cloneuser2);


//3

const user3 = ({ a: 4 })
user3.b = 5
delete user3.a
console.log(user3)


//4



var user4s = {
    name: "Иван",
    lastname: "Иванов",
    salary: "7"
};

for (var user4 in user4s) {
    var value = user4s[user4];

    alert( user4 + ": " + value );
}


//5



let iterable = [0 ,1, 2, 3 , 4 ,5, 6, 7, 8, 9 ,10];

for (let value of iterable) {
    console.log(value);
}


var obj = {a:1, b:2, c:3 , d:4 , e:5 , f:6 , g:7 , h:8 , i:9 , j:10 };

for (var prop in obj) {
    console.log("obj." + prop + " = " + obj[prop]);
}


//6


function User(Animal) {
    this.Animal = Animal;
    this.kind = false;
}

let user5 = new User("Единарог(аче)");

alert(user5.Animal);
alert(user5.kind);


//7


let string = "приветик";

const sortFunc = str => {
    let sortedStr = str.split('').sort().join('');
    console.log(sortedStr);
}

sortFunc(string);

//8

var myarray=[100, 540, 400 , 414]
myarray.sort()

//9

const findIndex = (arr, el) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if(el === arr[i]){
            return i;
        }
    }
}

console.log(`Index of number 90 is ${findIndex(numsArray, 90)}`);

//10

var items = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.table(items);


//второй вариант



// const number2 = [
//     [1, 2, 3],
//     [0, 3, 10],
//     [5, 2, 9]
// ];
//
// console.log(number2[0]);
// console.log(number2[1]);




//11

var arr = [
    ["a" , 0],
    ["January", 1],
    ["February", 2],
    ["March", 3],
    ["April ", 4],
    ["May", 5],
    ["June", 6],
    ["July", 7],
    ["August", 8],
    ["September", 9],
    ["October", 10],
    ["November", 11],
    ["December", 12]
];
var en = arr.reduce(function (out, en) {
    out[el[0]] = (out[el[0]] || 0) + el[1];
    return out;
}, {});
var out = Object.keys(en).map(function (key) {
    return [key, en[key]]
});


//русские

var arr1 = [
    ["a" , 0],
    ["Январь", 1],
    ["Февраль", 2],
    ["Март", 3],
    ["Апрель ", 4],
    ["Май", 5],
    ["Июнь", 6],
    ["Июль", 7],
    ["Август", 8],
    ["Сантябрь", 9],
    ["Октябрь", 10],
    ["Ноябрь", 11],
    ["Декабрь", 12]
];
var ru = arr1.reduce(function (out, el) {
    out[el[0]] = (out[el[0]] || 0) + el[1];
    return out;
}, {});
var out1 = Object.keys(ru).map(function (key) {
    return [key, ru[key]]
});


//12

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

var d1 = new Date();

/* Executes function after 5 seconds. */
setTimeout(function(){
    var d2 = clone(d1);
    alert("d1 = " + d1.toString() + "\nd2 = " + d2.toString());
}, 5000);



//13


let numsArr = [46, 67, 4, 345, 2389, 567];

const counterFunc = arr => {arr.reduce((a,b) => a + b, 0)};


//14

var pancakes = {
    tasty: true
};
var peas = {
    not_tasty: true,
    tasty: false
};

peas.__proto__ = pancakes;

alert( peas.tasty );


//15

// const flatten = function(arr, result = []) {
//     for (let i = 0, length = arr.length; i < length; i++) {
//         const value = arr[i];
//         if (Array.isArray(value)) {
//             flatten(value, result);
//         } else {
//             result.push(value);
//         }
//     }
//     return result;
// };
// flatten(Array(200000).fill([1]));

//сверху функция,но по мне следующее лучше

var arrays = [
    ["Привет"],
    ["Как"],
    ["Твои"],
    ["Делишки?"],
    ["Надеюсь"],
    ["Все"],
    ["ХОРОШО!!!1!1"]
];
var merged = [].concat.apply([], arrays);

console.log(merged);

//16

//ввел их все в консоль,угадал че будет только у половины)

//17

// let user8 = {
//     firstname: "Иван",
//     lastname:"Иванов",
//     years: 25,
// }
//
// let [name, age]= user8
//
// alert(name);
// alert(age);

//сверху вариант по задаче,но он почему то не работает
//снизу измененный,но рабочий


let user8 = ["Иван", 25, "Иванов"]

let [name, age]= user8

alert(name);
alert(age);

//18

let weekdays = ["Понельник", "Вторник", "Среда"];

let [first,second,third]= weekdays

console.log(first);
console.log(second);
console.log(third);


//19

let games = ["The last of us", "God of war "];

let [first1,second1]= games

let [first2,second2] = [first1,second1]

console.log(first2)
console.log(second2)

//20



var numbers = [10, 25, 51, 12, 13];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);

//21


function slasher(arr, howMany) {
    arr.splice(0, howMany);
    return arr;
}

slasher([1, 2, 3], 2);

//не понял как это сделать с индексом

//22


let massive = ['-', 17, false];
let data = {
    id: 17,
    name: 'дима',
}

let copyObjFunc = obj => {
    let copyObj1 = Object.assign({}, obj);
    return copyObj1;
}

let copyArrFunc = arr => {
    let copyArr1 = [...arr];
    return copyArr1;
}




//23

var array1 = ['a','b','c'];
var array2 = [1,2,3];

var array3 = array1.concat(array2);

console.log(array3)