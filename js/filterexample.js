'use strict'


//filter

const names = ['ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(item => {
    return item.length <= 3;
});

console.log(shortNames);


//map using example
const answers = ['Ivan', 'AnnaA', 'Hello'];

const result = answers.map(item => {
    return item.toLowerCase();
});
console.log(result);

//every /some

const comeExample = [5, 6, '7', 'trrr'];
console.log(comeExample.some(item => typeof (item) === 'number'));

//reduce


const arr = ['apple', 'pear', 'plum'];
const res = arr.reduce((sum, current) => sum + current, 'c++');
console.log(res);


// example 

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);
console.log(newArr);    