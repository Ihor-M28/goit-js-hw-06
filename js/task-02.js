const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul');

const liListEl = ingredients.map((name) => {
  const liEl = document.createElement('li');
  liEl.textContent = name;
  liEl.classList.add("item");
  return liEl;
});



ulEl.append(...liListEl);

console.log(ulEl);
