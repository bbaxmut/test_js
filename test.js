// /*
// /!*
// //(age >= 18) ? console.log('ечли правда') : console.log('если ложь')
// //switch case
//
//
// let count = 20;
// switch(count) {
//     case 1:
//         console.log('count is 1 ');
//         break;
//     case 2:
//         console.log('count is 2');
//         break;
//     case 3:
//         console.log('count is 20');
//         break;
//     default:
//         console.log('default');
//
// }
//
//
// //let greet = 'Здравствуйте';
// //switch (greet) {
//    // case 'Привет':
//        // console.log('Вежливость 0');
//
// }
//
//
// let count2 = 14;
// switch (count2) {
//     //case (13 || 14 || 15):
//     case 14:
//     case 13:
//     case 15:
//         console.log('14 || 13 || 15');
//         break;
// }
//
// //циклы
//
// //for .for in .for of .while .do while
// let c = 1;
// while (c < 5) {
//     console.log(c);
//     c = c + 1;//c++ увеличивает на 1 каждый цикл, c-- уменьшает на 1 переменную с каждый цикл
//     с = c++; // ++c   --c  текущее обращение к переменной даст +1
//
// }
// let counter2 = 0;
// do {
//     console.log('doing');
//     counter2++;
//
// }while (counter2 < 5)
//
// // for (начало итерации; условие пока цикл работает; действие накаждой итерации) {действие}
// /!*for (let i = 0; i <= 5; i++) {
//     console.log('foring');
// }*!/
// *!/
//
// /!*let a = 2;
// let b = 3;
// if (a = b) {
//     console.log('ложь');*!/
//
//
// }
//
// /!*var step;
// for (step = 0; step < 5; step++) {
//  // Запускается 5 раз, с шагом от 0 до 4.
//  console.log('Идём 1 шаг на восток');
// }
//
//
//  let i = 5;
// let b = 3;
// let c = (i + b)
//
//  console.log('c');*!/
//
// const kurs = 'ready';
// if (kurs === 'ready') {
//  console.log('курс готов')
// } else if(kurs === 'pending') {
//  console.log('курс не готов пока')
// }
//
//
//
// alert("Hello, World!");
//
// ("Hello, World!")
//
//
//
//  */
//
//
// // console.log("Hello, World!");
//
// // const kurs = 'pending';
// // if (kurs === 'ready') {
// //     console.log('курс готов')
// // } else if(kurs === 'pending') {
// //     console.log('курс не готов пока')
// // }
//
//
// //Exercise1
// // let browser = ('Opera');
// // if (browser === 'Edge') {
// //     console.log("You've got the edge");
// // } else if (browser === 'Chrome') {
// //     console.log("Okay we support these browser too");
// // } else if (browser === 'Opera') {
// //     console.log("Okay we support these browser too");
// // } else if (browser === 'Safari') {
// //     console.log("Okay we support these browser too");
// // } else if (browser === 'Firefox') {
// //     console.log("Okay we support these browser too");
// // }
//
//
// //Exercise2
// //
// // const number = +prompt('Введите число между 0 и 3','');
// // switch (number) {
// //     case 0:
// //         console.log('Вы ввели число 0');
// //         break;
// //     case 1:
// //         console.log('Вы ввели число 1');
// //         break;
// //     case 2 || 3:
// //         console.log('Вы ввели число 2, а может и 3');
// //         break;
// //     default:
// //         console.log('default');
// //
// // }
//
// //zadacha1
// // let numOne = ((1.005 * 100) / 100);
// //  console.log(Math.round(numOne));
// // console.log((Math.ceil(numOne)));
//
//
// //zadacha2
// // let value = '135.58px';
// // console.log(parseFloat(value));
//
// zadacha4
// const a = 10;
// const b = 58;
// const c = 39;
// const d = -150;
// const e = 0;
// console.log((Math.max(a, b, c, d, e)));
//
// // //zadacha5
// // let min = 58.858;
// // console.log(Math.floor(min));
//
// // //zadacha 6
// // let fls = 'фрилансер';
// // let text = 'Привет! Я ' + fls;
// // console.log((text));
//
// // let a = '456';
// // let b = 123;
// // let text = (a + b);
// // parseInt(a);
// // console.log(text);
//
// // let text = 'фрилансер';
// // console.log((text.toUpperCase()));
//
// // let text = 'фрилансер';
// // console.log(text.slice(3,6));
//
// //
// // let text = 'фрилансер';
// // console.log(text.includes('лан', 4));
//
// //function declaration
//
//
// // function sayHi() {
// //     console.log('Hi');
// // }
// // sayHi();
// // sayHiByName();
// // function sayHiByName(name, surname) {
// //     console.log(name || 'name default');
// //     console.log(surname || 'name default');
// // }
//
// //
// // function calcSum(a, b) {
// //     return a + b;
// //
// // }
// // calcSum(1, 2);
// // console.log(calcSum(1, 2));
//
//
// //function expression
//
// // let testFunc = function () {
// //     console.log('i am function exspression');
// //
// // }
// //     testFunc();
//
// //arrow function
//
// // (parameters) => {body}
//
// // let calcSum = (a, b) => a + b;
// // console.log((calcSum(1, 2)));
// //
// // function testArguments(...args) {
// //     console.log(arguments);
// //     console.log(args);
// // }
// // testArguments(1,2,3,4,5,6,7,8,9,0);
// //
// // function testHiOrder(sayHiFn, count) {
// //     for let(i = 0; i < count; i++) {
// //         sayHiFn();
// //     }
// //
// // }
// // testHiOrder(undefined, 5);
// //
// // function getFnSayHiTo(name) {
// //  return() => console.log('Hi, ' + name);
// //
// // }
// // let sayHiRomaFn = getFnSayHiTo('Roma');
// //
//
//
// // let a = 1;
// // function test() {
// //     let a = 2;
// // }
// // console.log(a);
//
// // function counterFn() {
// //     let counter = 0;
// //
// //     return function () {
// //         counter++;
// //         console.log(count);
// //     }
// // }
// // let counter = counterFn();
// // counter();
// // counter();
// // counter();
//
// function calcP(a,b,c) {
//     return(a+b+c);
// }
//
// function toUpper(symbol) {
//     console.log(symbol.toUpperCase());
//
// }
// function use
