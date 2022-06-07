'use strict';

const isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

let getRandomNumber = function (min, max) {
  let numberRandom = min + Math.round(Math.random() * (max - min));
  return numberRandom;
}

let guessNumber = function (num) {

  let step = 10;

  let enterNumber = function () {

    if (step === 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        guessNumber(getRandomNumber(1, 100));
      };
      return
    }

    let question = prompt('Угадай число от 1 до 100');

    if (question === null) {
      alert('Игра окончена');
      return
    } else if (!isNumber(question)) {
      alert('Введи число!');
    } else if (question > num) {
      step--;
      alert(`Загаданное число меньше, осталось попыток ${step}`);
    } else if (question < num) {
      step--;
      alert(`Загаданное число больше, осталось попыток ${step}`);
    } else if (question == num) {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
        guessNumber(getRandomNumber(1, 100));
      };
      return
    }

    enterNumber();
  }

  enterNumber();
}

guessNumber(getRandomNumber(1, 100));
