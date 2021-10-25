// const heading = document.querySelectorAll('.fff');
// console.log(heading);

// const idList = document.querySelector('#list_1');
// console.log(idList);
 const heading_1 = document.querySelector('.heading_1');
const heading_2 = document.querySelector('.heading_2');
const heading_3 = document.querySelector('.heading_3')

setTimeout ( () =>{
 addStyleSTo(heading_1, 'Javascript','red', 'black', '3rem')
}, 1500);

setTimeout ( () =>{
 addStyleSTo(heading_2, 'Практика','white', 'blue', '3rem')
}, 3000);

setTimeout ( () => {
 addStyleSTo(heading_3.querySelector('a'),'blue', 'red', '3rem')
}, 4500);

function addStyleSTo (node,text, color,backgroundColor, fontSize ) {
 node.textContent = text
 node.style.color = color
 node.style.backgroundColor = backgroundColor
 node.style.textAlign = 'center'
 node.style.fontSize = fontSize
 node.style.display = 'block'
 node.style.width = '100%'
}

heading_1.onclick = () => {
 if (heading_1.style.color === 'red') {
  heading_1.style.color = 'blue'
  heading_1.style.backgroundColor = 'yellow'
 }
 else {
  heading_1.style.color = 'yellow'
  heading_1.style.backgroundColor = 'green'
 }
}


heading_2.ondblclick = () => {
 if (heading_2.style.color === 'white') {
  heading_2.style.color = 'orange'
  heading_2.style.backgroundColor = 'grey'
 }
 else {
  heading_2.style.color = 'yellow'
  heading_2.style.backgroundColor = 'green'
 }
}

heading_3.addEventListener('mouseup', () => {
 if (heading_2.style.color === 'red') {
  heading_2.style.color = 'white'
  heading_2.style.backgroundColor = 'grey'
 }
 else {
  heading_2.style.color = 'yellow'
  heading_2.style.backgroundColor = 'black'
 }
})