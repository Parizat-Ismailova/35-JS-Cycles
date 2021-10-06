/* Task#1
Имеется массив из 20 чисел. Вывести на экран только четные числа из массива*/
for (let number = 2; number < 21; number += 2) {
    alert(number);
}

/* Task #2
Имеется массив строк с элементами. Вывести на экран самое длинное слово из массива*/
/* Version A - number:
function longestWordLength(str) {
  return str.length;
}
alert(longestWordLength("Brown fox"));*/

/* Version B - word: */
let word = ["Ann", "Christina"];
let sorted = word.sort((a, b) => b.length - a.length);
alert(sorted[0]);

/* Task #3
Массовое удаление. Имеется массив, который содержит имена 15 пользователей. 
Необходимо удалить всех пользователей. При удалении каждого пользователя нужно выводить сообщения:
«Удаляю пользователя Иван»
«Удаляю пользователя Вася»*/
/*let fruits = ['Apple', 'Orange', 'Pineapple'];
document.write(`<h1>I remove the fruit : ${fruits.pop()}</h1>`);
document.write(`<h1>I remove the fruit : ${fruits.pop()}</h1>`);
document.write(`<h1>I remove the fruit : ${fruits.pop()}</h1>`);*/

/* HW #1
Version A:
let userInput = "анна";
let isPalindrome = true;
for (let i = 0; i < userInput.length / 2 && isPalindrome; i++) {
  if (userInput[i] !== userInput[userInput.length - i - 1]) {
    isPalindrome = false;
  }
}

Version B:
let userInput = "анна";
let isPalindrome = true;
let i = 0;
while (i < userInput.length / 2 && isPalindrome) {
  if (userInput[i] !== userInput[userInput.length - i - 1]) {
    isPalindrome = false;
  }
  i++;
}
isPalindrome ? document.write("Palindrome") : document.write("Not a palindrome");*/

/*Строка называется палиндромом, если она пишется одинаково в обоих
направлениях. Например, палиндромами в английском языке являются
слова «anna», «civic», «level», «hannah». Напишите программу, запраши-
вающую у пользователя строку и при помощи цикла определяющую, яв-
ляется ли она палиндромом.*/
function isPalindrome(s) {
  return s == s.split("").reverse().join("")? true: false;
}
alert(isPalindrome("noon"));


/* HW #2
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    document.write(`${i} * ${j} = ${i * j} <br>`);
  }
  document.write("<br>");
}
Вывести таблицу умножения от 0 до 10*/
/*let i = 0;
for (let j = 1; j <= 9; j++){
    document.write("<div style = 'float: left; width: 70px; color: blue; font-size: 18px;'>");
    for (let i = 1; i <= 9; i++) {
        document.write(i + "*" + j + "=" +(i*j) + "<br>");
    }
    document.write("</div>");
}*/
