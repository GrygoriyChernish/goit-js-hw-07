const allCategoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${allCategoriesRef.length} категории.`);

allCategoriesRef.forEach(getInfo);

function getInfo(item) {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.dir(`Количество элементов: ${item.lastElementChild.children.length}`);
}
