const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const listItemRef = document.querySelector('#ingredients');

const createListItems = items => {
  return items.map(item => {
    const itemRef = document.createElement('li');
    itemRef.textContent = item;
    return itemRef;
  });
};

// const elements = createListItems(ingredients);

listItemRef.append(...createListItems(ingredients));