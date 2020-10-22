// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counterIndication: document.querySelector('#value'),
};

refs.incrementBtn.addEventListener('click', onIncrementValue);
refs.decrementBtn.addEventListener('click', onDecrementValue);

function onIncrementValue() {
  counterValue += 1;
  refs.counterIndication.textContent = counterValue;
}

function onDecrementValue() {
  counterValue -= 1;
  refs.counterIndication.textContent = counterValue;
}
