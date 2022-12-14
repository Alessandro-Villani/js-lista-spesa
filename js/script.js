/*-------------------------------------TRACCIA--------------------------------------------

Data una lista della spesa (inventatela), stampare in pagina gli elementi della lista individualmente con un ciclo while.

----------------------------------------------------------------------------------------*/

//1. Create product Array

const products = ['pasta', 'uova', 'latte', 'vino', 'salsa'];

//2. Pick Output element

const outputShoppingList = document.getElementById('shopping-list');

//3. Initializing list items variable

let listItems = '';

//4. Creating index for loop

let i = 0;

//5. While loop to create list items

while(i < products.length) {
    listItems += `<li>${products[i]}</li>`;
    i++
}

//6. Print list items in list

outputShoppingList.innerHTML = listItems;