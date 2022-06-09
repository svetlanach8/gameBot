'use strict';

const isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

let getRandomNumber = function (min, max) {
  let numberRandom = min + Math.round(Math.random() * (max - min));
  return numberRandom;
}

let guessNumber = function (num) {

  let enterNumber = function () {
    let question = prompt('Угадай число от 1 до 100');

    if (question === null) {
      alert('Игра окончена');
      return
    } else if (!isNumber(question)) {
      alert('Введи число!');
    } else if (question > num) {
      alert('Загаданное число меньше');
    } else if (question < num) {
      alert('Загаданное число больше');
    } else if (question == num) {
      alert('Поздравляю, Вы угадали!!!');
      return
    }

    enterNumber();
  }

  enterNumber();
}

guessNumber(getRandomNumber(1, 100));
