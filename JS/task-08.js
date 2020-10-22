// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  input: document.querySelector('#controls input'),
  renderMarkupBtn: document.querySelector('[data-action="render"]'),
  destroyMarkupBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.renderMarkupBtn.addEventListener('click', getAmount);
refs.destroyMarkupBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const arrayElements = [];
  const width = 30;
  const height = 30;
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${width + i * 10}px`;
    element.style.height = `${height + i * 10}px`;
    element.style.backgroundColor = getRandomColor();
    arrayElements.push(element);
  }
  refs.boxes.append(...arrayElements);
}

function getAmount() {
  const amount = refs.input.value;
  createBoxes(amount);
}
function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function getRandomColor() {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
