
console.log('example');

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('starting work promise ....');
        const resultOfPromise = 40;
        resolve(resultOfPromise);
        reject('rejecting the reult ');
        console.log('after resolve working test');
    }, 4000)
}).then((result) => {
    console.log(`result is ${result}`);
}).catch((result) => {
    console.log('working reject block check ' + result);
});