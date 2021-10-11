// filter


let people = [
    {name: 'Анастасия', age: 27, cash: 8000 },
    {name: 'Богдан', age: 24, cash: 28000},
    {name: 'Дмитрий', age: 25, cash: 48000},
    {name: 'Руслана', age: 19, cash: 100000}
    ]
const adults = [];
for (let i = 0;i < people.length; i++) {
if (people[1].age <= 20) {
    adults.push(people[i]);
}
}
console.log(adults);