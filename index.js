const num1 = 3;
const num2 = 4;
const hello = 'Hello world!';

const addFunc = (num1, num2) => {
  console.log('Adding');
  return num1 + num2;
};

const minusFunc = (num1, num2) => {
  return num1 - num2;
};

const mulFunc = (num1, num2) => {
  return num1 * num2;
};

console.log(hello);

console.log(`${num1} + ${num2} = ${addFunc(num1, num2)}`);

console.log(`${num1} - ${num2} = ${minusFunc(num1, num2)}`);

console.log(`${num1} + ${num2} = ${addFunc(num2, num1)}`);

console.log(`${num1} * ${num2} = ${mulFunc(num2, num1)}`);
