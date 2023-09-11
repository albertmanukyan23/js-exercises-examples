"use strict"

const box = document.getElementById("box");
const btns = document.getElementsByTagName('button');
const circle = document.querySelectorAll(".circle");
const hearts = document.querySelectorAll(".heart");
const wrapper = document.querySelector('.wrapper')


box.style.backgroundColor = 'blue';

btns[1].style.borderRadius = '100%';
box.style.cssText = 'background-color: red;width:500px';

// for (let i = 0; i < hearts.length; i++) {

//     hearts[i].style.backgroundColor = 'yellow';
// }
hearts.forEach(heart=> {
    heart.style.backgroundColor = 'green';
})

const div = document.createElement('div');
// const text = document.createTextNode('i can be your superman ');
div.classList.add('black');
wrapper.append(div);

// hearts[0].after(div);

// circle[0].remove();

div.innerHTML= "black ";