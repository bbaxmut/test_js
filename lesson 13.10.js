// let arr = ['Odin', 'Dva', 'tri'];
// let newArr = arr.filter((item) => {
//     return item[0].toUpperCase() === item[0];
// });
// console.log(newArr);

//  Объекты



// let user = {
//     name: 'Богдан',
//     surname: 'Бахмут',
//     age: 24,
//     cash: 20000,
//     city: 'Kharkiv',
// };
// const {name, surname, age} = user;
// console.log(name, surname, age);

// const keyAge = 'age';
// console.log(user[keyAge]);

// delete user['surname'];
// console.log(user);

// for (let key in user) {
//     console.log('key-',key);
//     console.log('value-',user[key]);
// }
//
// const keys = Object.keys(user);
// keys.forEach( (key) => {
//     console.log('key:',key);
// console.log('value:',user[key]);
// });

// console.log('bla' in user);

// let user = {};
// user['name'] = 'John';
// user['surname'] = 'Smith';
// user['name'] = 'Pete';
// delete user.name;
// console.log(user);


// let schedule = {};
// function eisEmpty(schedule) {
//     for (let key in schedule) {
//         console.log('false');
//     };
// console.log('true');
// };