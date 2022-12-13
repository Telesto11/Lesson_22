// Строгий режим
"use strict"


//Основи синтаксиса
console.log('Домашка JS (Основи синтаксиса)!!!');
//Варіант №1
console.log('Варіант №1. Усе вірно!');
console.log('Але бажано додати ";"');
console.log('Вчимо Js')

//Варіант №2
console.log('Варіант №2. Усе вірно!');
console.log('Але бажано додати ( ; ), томущо так би мовити при обробці, стисканні-');
console.log('-у один рядок, виникне помилка');
console.log('JS')
console.log('Вчимо')

//Варіант №3
console.log('Варіант №3. Не вірно!');
console.log('Та помилка яка була описанна у Варіанті №2, коли записанj у один рядок без ( ; )');
console.log('Помилку виправив!');
console.log('Вчимо'); console.log('Js');

//Варіант №4
console.log('Варіант №4. Не вірно!');
console.log('Томущо у першого console.log Вчимо; не були закриті лапки ');
console.log('Помилку виправив!');
console.log('Вчимо');
console.log('JS');
console.log('===============================================');

//ЗМІННІ ТА КОНСТАНТИ!!!
// Завданная 1)
console.log('Домашка JS (ЗМІННІ ТА КОНСТАНТИ!!!)');
console.log('Завдання 1)');
let eyeColorStorage = 'Зберігання кольору очей користувача сайту';
console.log(eyeColorStorage);

// Завдання 2)
console.log('Завдання 2)');

let user;

let userName = 'Вася';

user = userName;
console.log(user);



// Завдання 3)
console.log('Завдання 3)');

// Варіант №1. Не вірно
console.log('Варіант №1. Не вірно');
console.log('У самій змінній знаходиться ще одна.');
console.log('А також після Васі немає коми, та в кінці бажано ставити крапку з комою. ;)');

// Варіант №2. Будемо вважати що не вірно.
console.log('Варіант №2. Будемо вважати що не вірно.');
console.log('myage записано не по стилю lowerCamelCase');
console.log('Та якщо тут потрібно було вивести у консоль, то не записали у console.log');


// Варіант №3. Не вірно
console.log('Варіант №3. Не вірно');
console.log('Це не заздалегідь відоме значення. Тут має бути у стилі lowerCamelCase');

// Варіант №4. Вірно
console.log('Варіант №4. Вірно');
console.log('Якщо це не підкол, то все вірно :)');
console.log('Чи потрібно тут дописати до 100 якесь значення, не зважаючи що записано як Height . Щось типу метрів, сантиметрів?');


console.log('Варіант №5. Вірно ');
console.log('З таким блоком (var) буде працювати');

console.log('=======================');



//ТИПИ ДАНИХ
console.log('ТИПИ ДАНИХ');
console.log('Варіант №1 Не вірно.');
console.log('Помилка у лапках. Для її вирішення потрібні зворотні лапки (` `)');
let userAge = 36;
let userInfo = "Фрилансер ${userAge}"

console.log('Варіант №2. Не вірно.');
console.log('Тут виходить нескінченність');
let userHeight = 145 / 0;
console.log(userHeight);
console.log(typeof userHeight);

console.log('Варіант №3. Не вірно');
console.log('У цій задачі виходить Невизначеність. undefined');


console.log('Варіант №4. Вірно');
console.log('Виходить number, так як й було треба.');
let userSize = "45" / "8";
console.log(typeof userSize);