/* В этих заданиях для вывода ответов используйте document.write()

1.Пользователь вводит 4 числа. вывести на экран, сколько штук из этих чисел были четными

2.Пользователь вводит 3 числа, вывести на экран наибольшее из этих 3х чисел */

// 1.
const num1 = prompt('Введите первое число');
const num2 = prompt('Введите второе число');
const num3 = prompt('Введите третье число');
const num4 = prompt('Введите четвёртое число');
let summa = 0;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

if (num1 % 2 === 0){
    summa += 1;
}
if (num2 % 2 === 0){
    summa += 1;
}
if (num3 % 2 === 0){
    summa += 1;
}
if (num4 % 2 === 0){
    summa += 1;
}

console.log('Количество чётных чисел: ' + summa);
document.write('Количество чётных чисел: ' + summa);

// 2.
const num5 = prompt('Введите первое число');
const num6 = prompt('Введите второе число');
const num7 = prompt('Введите третье число');

console.log(num5);
console.log(num6);
console.log(num7);

if(Number(num5) > Number(num6)){
    document.write('Самое большое число: ' + num5);
} else if(Number(num5) < Number(num7)){
    document.write('Самое большое число: ' + num7);
} else {
    document.write('Самое большое число: ' + num6);
}
