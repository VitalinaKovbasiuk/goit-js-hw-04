/* Завдання 1 автоперевірка
 */
// ФУНКЦІЯ ЯК ЗНАЧЕННЯ
// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, 
// а у змінній pointer було посилання на функцію makePizza.
//!!!before:
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = null;
// const pointer = null;
//!!!after:
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;





/* Завдання 2 автоперевірка
 */
// КОЛБЕК-ФУНКЦІЇ
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. 
// Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.
//!!!before:
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName) {
//   return;
// }
//!!!after:
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }





/* Завдання 3 автоперевірка
 */
// ІНЛАЙН-КОЛБЕКИ
// Доповни другий виклик функції makePizza(pizzaName, callback), 
// передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".
//!!!before:
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// makePizza("Ultracheese");
//!!!after:
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// makePizza("Ultracheese", function deliverPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });






/* Завдання 4 автоперевірка
 */
// ДЕКІЛЬКА КОЛБЕКІВ
// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, 
// щоб він приймав другим і третім параметром два колбеки onSuccess і onError.
// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, 
// метод order повинен повертати результат виклику колбека onError, 
// передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, 
// метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.
//!!!before:
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName) {},
// };
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
//!!!after:
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError( `There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
//     return onSuccess(pizzaName);
//   }
// };
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);





/* Завдання 5 автоперевірка
 */
// МЕТОД FOREACH(CALLBACK)
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, 
// і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
//!!!before:
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }
//   return totalPrice;
// }
//!!!after:
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (number, index) {
//   totalPrice += orderedItems[number, index];
//   });
//   return totalPrice;
// }





/* Завдання 6 автоперевірка
 */
// ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, 
// в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
//!!!before:
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }
//   return filteredNumbers;
// }
//!!!after:
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
// numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
// })
//   return filteredNumbers;
// }





/* Завдання 7 автоперевірка
 */
// ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ
// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, 
// і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
//!!!before:
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }
//   return commonElements;
// }
//!!!after:
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
// firstArray.forEach(element => {
//      if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
// })
//   return commonElements;
// }





/* Завдання 8 автоперевірка
 */
// СТРІЛОЧНІ ФУНКЦІЇ.
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
//!!!before:
// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }
//!!!after:
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }





/* Завдання 9 автоперевірка
 */
// НЕЯВНЕ ПОВЕРНЕННЯ
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.
//!!!before:
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
//!!!after:
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;






/* Завдання 10 автоперевірка
 */
// СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), 
// замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.
//!!!before:
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });
//   return totalPrice;
// }
//!!!after:
const calculateTotalPrice = (orderedItems) =>  {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item;
  });
  return totalPrice;
}



/* Завдання 11 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 12 автоперевірка
 */
//!!!before:


//!!!after:




/* Завдання 13 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 14 автоперевірка
 */
//!!!before:


//!!!after:
  



/* Завдання 15 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 16 автоперевірка
 */
//!!!before:


//!!!after:
  






/* Завдання 17 автоперевірка
 */
//!!!before:


//!!!after:






/* Завдання 18 автоперевірка
 */
//!!!before:


//!!!after:
 




/* Завдання 19 автоперевірка
 */
//!!!before:


//!!!after:
  







/* Завдання 20 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 21 автоперевірка
 */
//!!!before:


//!!!after:






/* Завдання 22 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 23 автоперевірка
 */
//!!!before:


//!!!after:






/* Завдання 24 автоперевірка
 */
//!!!before:


//!!!after:
  





/* Завдання 25 автоперевірка
 */
//!!!before:


//!!!after:
  




/* Завдання 26 автоперевірка
 */
//!!!before:


//!!!after:
  





/* Завдання 27 автоперевірка
 */
//!!!before:


//!!!after:






/* Завдання 28 автоперевірка
 */
//!!!before:


//!!!after:







/* Завдання 29 автоперевірка
 */
//!!!before:


//!!!after:



/* Завдання 30 автоперевірка
 */
//!!!before:


//!!!after:






/* Завдання 31 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 32 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 33 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 34 автоперевірка
 */
//!!!before:


//!!!after:







/* Завдання 35 автоперевірка
 */
//!!!before:


//!!!after:






/* Завдання 36 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 37 автоперевірка
 */
//!!!before:


//!!!after:
  




/* Завдання 38 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 39 автоперевірка
 */
//!!!before:


//!!!after:
  





/* Завдання 40 автоперевірка
 */
//!!!before:


//!!!after:
  





/* Завдання 41 автоперевірка
 */
//!!!before:


//!!!after:

 

/* Завдання 42 автоперевірка
 */
//!!!before:


//!!!after:


/* Завдання 43 автоперевірка
 */
//!!!before:


//!!!after:



/* Завдання 44 автоперевірка
 */
//!!!before:


//!!!after:
const sortByName = users => 
[...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));
;
;



/* Завдання 45 автоперевірка
 */
//!!!before:


//!!!after:
const names = [...books].filter((book => book.rating > MIN_BOOK_RATING)).map(book => book.author).sort((a,b) => a.localeCompare(b));




/* Завдання 46 автоперевірка
 */
//!!!before:


//!!!after:
const getNamesSortedByFriendCount = users => 
   [...users].sort((firstName, secondName) => firstName.friends.length -  secondName.friends.length).map(user => user.name);




/* Завдання 47 автоперевірка
 */
//!!!before:


//!!!after:
const getSortedFriends = users => 

[...users].flatMap(user => user.friends).filter((friends, index, array) => 
array.indexOf(friends) === index).sort((a, b) => a.localeCompare(b));   






/* Завдання 48 автоперевірка
 */
// ЗАДАЧА. ЗАГАЛЬНИЙ БАЛАНС
// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, 
// щоб вона повертала загальний баланс користувачів (властивість balance), 
// стать яких (властивість gender) збігається зі значенням параметра gender.
//!!!before:
// const getTotalBalanceByGender = (users, gender) => {

// };
//!!!after:
// const getTotalBalanceByGender = (users, gender) => users.filter
//     (user=> user.gender === gender).reduce((total,user) =>{
//         return total+user.balance;
// }, 0)






