const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const listItemRef = document.querySelector('#ingredients');

const createListItems = items => {
  return items.map(items => {
    const itemRef = document.createElement('li');
    itemRef.textContent = items;
    return itemRef;
  });
};

// const elements = createListItems(ingredients);

listItemRef.append(...createListItems(ingredients));
