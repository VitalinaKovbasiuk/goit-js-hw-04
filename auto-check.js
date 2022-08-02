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
// const calculateTotalPrice = (orderedItems) =>  {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// }



/* Завдання 11 автоперевірка
 */
// ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.
//!!!before:
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }
//!!!after:
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }




/* Завдання 12 автоперевірка
 */
// ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ 2.0
// Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.
//!!!before:
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }
//!!!after:
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }



/* Завдання 13 автоперевірка
 */
// ЧИСТІ ФУНКЦІЇ
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, 
// значення якого - це парне число, додаючи до нього значення параметра value.
// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, 
// наповнювала і повертала новий масив з оновленими значеннями.
//!!!before:
// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }
//!!!after:
// function changeEven(numbers, value) {
//   const newArray = [];
// numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
//   });
//   return newArray;
// }





/* Завдання 14 автоперевірка
 */
// МЕТОД MAP()
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().
//!!!before:
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets;
//!!!after:
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);



/* Завдання 15 автоперевірка
 */
// МЕТОД MAP() І МАСИВ ОБ'ЄКТІВ
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.
//!!!before:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const titles = books;
//!!!after:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const titles = books.map(book => book.title);
// console.log(titles);




/* Завдання 16 автоперевірка
 */
// МЕТОД FLATMAP()
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.
//!!!before:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// const genres = books;
//!!!after:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// const genres = books.flatMap(book => book.genres);
// console.log(genres);






/* Завдання 17 автоперевірка
 */
// ЗАДАЧА. ІМЕНА КОРИСТУВАЧІВ
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен 
// користувачів (властивість name) з масиву об'єктів в параметрі users.
//!!!before:
// const getUserNames = users => {
// };
//!!!after:
// const getUserNames = users => 
//     users.map(user => user.name);






/* Завдання 18 автоперевірка
 */
// ЗАДАЧА. ПОШТИ КОРИСТУВАЧІВ
// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив
// поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.
//!!!before:
// const getUserEmails = users => {
// };
//!!!after:
// const getUserEmails = users => 
// users.map(user => user.email);





/* Завдання 19 автоперевірка
 */
// МЕТОДИ FILTER І FIND
// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers, 
// а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().
//!!!before:
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers;
// const oddNumbers = numbers;
//!!!after:
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2);
// console.log(evenNumbers);
// console.log(oddNumbers);







/* Завдання 20 автоперевірка
 */
// ФІЛЬТРАЦІЯ УНІКАЛЬНИХ ЕЛЕМЕНТІВ
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, 
// а у змінній uniqueGenres - масив унікальних жанрів, без повторень.
//!!!before:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books;
// const uniqueGenres = allGenres;
//!!!after:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ]
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);
// console.log(allGenres);
// console.log(uniqueGenres);





/* Завдання 21 автоперевірка
 */
// МЕТОД FILTER() І МАСИВ ОБ'ЄКТІВ
// Використовуючи метод filter(), доповни код таким чином, щоб:
// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
//!!!before:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// const topRatedBooks = books;
// const booksByAuthor = books;
//!!!after:
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);






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






