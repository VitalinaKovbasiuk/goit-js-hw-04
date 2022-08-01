/* Завдання 1 автоперевірка
 */
//!!!before:


//!!!after:




/* Завдання 2 автоперевірка
 */
//!!!before:


//!!!after:



/* Завдання 3 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 4 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 5 автоперевірка
 */
//!!!before:


//!!!after:






/* Завдання 6 автоперевірка
 */
//!!!before:


//!!!after:





/* Завдання 7 автоперевірка
 */
//!!!before:


//!!!after:






/* Завдання 8 автоперевірка
 */
//!!!before:


//!!!after:






/* Завдання 9 автоперевірка
 */
//!!!before:


//!!!after:






/* Завдання 10 автоперевірка
 */
//!!!before:


//!!!after:




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






