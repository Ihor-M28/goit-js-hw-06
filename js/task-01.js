const navItemEl = document.querySelector('li');
console.log(navItemEl);

const navlinksEl = document.querySelectorAll('.site-na__link');
console.log('navlinksEl', navlinksEl);




const categoriesItemEL = document.querySelectorAll(".item");
console.log('Number of categories: ${categoriesItemEL.length}');

const categoriesNameEl = document.querySelectorAll(".item h2");
const categoriesListEl = document.querySelectorAll(".item ul");

console.log('Category: ${categoriesNameEl[0].textContent}');
console.log('Elements: ${categoriesListEl[0].children.length}');

console.log('Category: ${categoriesNameEl[1].textContent}');
console.log('Elements: ${categoriesListEl[1].children.length}');

console.log('Category: ${categoriesNameEl[2].textContent}');
console.log('Elements: ${categoriesListEl[2].children.length}');

console.log('Category: ${categoriesNameEl[3].textContent}');
console.log('Elements: ${categoriesListEl[3].children.length}');

console.log(categoriesItemEL);