/*
/!*
//(age >= 18) ? console.log('ечли правда') : console.log('если ложь')
//switch case


let count = 20;
switch(count) {
    case 1:
        console.log('count is 1 ');
        break;
    case 2:
        console.log('count is 2');
        break;
    case 3:
        console.log('count is 20');
        break;
    default:
        console.log('default');

}


//let greet = 'Здравствуйте';
//switch (greet) {
   // case 'Привет':
       // console.log('Вежливость 0');

}


let count2 = 14;
switch (count2) {
    //case (13 || 14 || 15):
    case 14:
    case 13:
    case 15:
        console.log('14 || 13 || 15');
        break;
}

//циклы

//for .for in .for of .while .do while
let c = 1;
while (c < 5) {
    console.log(c);
    c = c + 1;//c++ увеличивает на 1 каждый цикл, c-- уменьшает на 1 переменную с каждый цикл
    с = c++; // ++c   --c  текущее обращение к переменной даст +1

}
let counter2 = 0;
do {
    console.log('doing');
    counter2++;

}while (counter2 < 5)

// for (начало итерации; условие пока цикл работает; действие накаждой итерации) {действие}
/!*for (let i = 0; i <= 5; i++) {
    console.log('foring');
}*!/
*!/

/!*let a = 2;
let b = 3;
if (a = b) {
    console.log('ложь');*!/


}

/!*var step;
for (step = 0; step < 5; step++) {
 // Запускается 5 раз, с шагом от 0 до 4.
 console.log('Идём 1 шаг на восток');
}


 let i = 5;
let b = 3;
let c = (i + b)

 console.log('c');*!/

const kurs = 'ready';
if (kurs === 'ready') {
 console.log('курс готов')
} else if(kurs === 'pending') {
 console.log('курс не готов пока')
}



alert("Hello, World!");

("Hello, World!")



 */


// console.log("Hello, World!");

const kurs = 'pending';
if (kurs === 'ready') {
    console.log('курс готов')
} else if(kurs === 'pending') {
    console.log('курс не готов пока')
}