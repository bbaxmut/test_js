//
// let people = [15, 18, 30, 14, 40, 25, 32];
//
// // let people = [
// //     {name: 'Анастасия', age: 10, cash: 12000 },
// //     {name: 'Богдан', age: 24, cash: 20000},
// //     {name: 'Дмитрий', age: 25, cash: 50000},
// //     {name: 'Руслана', age: 19, cash: 14000},
// //     {name: 'Ульяна', age: 15, cash: 1800},
// //     {name: 'Ольга', age: 15, cash: 5000}
// //     ]
// // const adults = [];
// // for (let i = 0;i < people.length; i++) {
// // if (people[i].age >= 19) {
// //     adults.push(people[i])
// // }
// // }
// // console.log(adults);
//
// // filter Фильтр по заданому парамеру массива, возвращает значение которое True
//
// // const adults = people.filter(person => person.age >= )
// // console.log(adults);
//
// //Reduce
// // const amount = people.reduce((total, person) => total + person.cash, 0);
// //
// // console.log(amount);
//
// //Find Для поиска какого либо элемента массива
//
// // const anastasia = people.findIndex(person => person.age === 15);
// // console.log(anastasia);
//
// //findIndex - тоже самое что и find, но возвращает индекс найденного объекта в массиве
//
// // const amount = people
// // .filter(person => person.cash >= 5000)
// // .map(person => {
// //     return {
// //         info: `${person.name} ${person.age}`,
// //         cash: person.cash
// //     }
// // })
// //     .reduce((total, person) => total + person.cash, 0);
// // console.log(amount);
//
// //every
//
// function soverxhennoletniy(age) {
//     return age > 18;
// }
// console.log(people.some(soverxhennoletniy));


// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let newArr = arr.map(item => {
//     return item.length
// });
// console.log(newArr);

// let arr = [1,2,3,4,5];
// let getSum = arr.reduce((total, number) => total + number, 0);
// console.log(getSum);