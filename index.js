const num1 = 3;
const num2 = 4;
const hello = 'Hello world!';

const addFunc = (num1, num2) => {
  return num1 + num2 + num1;
};

const minusFunc = (num1, num2) => {
  return num1 - num2;
};

console.log(hello);

console.log(`${num1} + ${num2} = ${addFunc(num1, num2)}`);

console.log(`${num1} - ${num2} = ${minusFunc(num1, num2)}`);

console.log(`${num1} + ${num2} = ${addFunc(num2, num1)}`);
