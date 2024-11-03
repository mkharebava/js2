let N = 9; /*Number(prompt("enter a number:"));*/
let m = N * N;
console.log(`your squared num is ${m}`);
if (m > 100) {
    console.log(`your number is more than 100`);
} else {
    console.log(`your number is less than or equal to 100`);
}

console.log(`second task`);

let number = 56;
if (number >= 50 && number < 100) {
    console.log(`your number is more than 50 but less than 100`);
} else if (number >= 100) {
    console.log(`your number is more than or equal to 100`);
} else {
    console.log(`your number is not meant to be here`);
}

console.log(`third task`);

let nmb = 0;
if (nmb > 0) {
    console.log(`enter another number please`);
} else if (nmb < 0) {
    console.log(`your number is negative`);
} else {
    console.log(`your number equals to zero but you already knew that`);
}