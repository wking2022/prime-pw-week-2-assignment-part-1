console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// let listOfCookies = ['Chocolate Chip', 'Raisin', 'Sugar', 'M&M'];
// console.log(listOfCookies);

// console.log( ' The list of cookies Mother will make are:', [listOfCookies]);
// // Mother plan on making all of my favorites, except she doesnt have chocolate chips, so i have to choose another another to replace Chocolate Chip.
// listOfCookies.shift();

// listOfCookies.unshift( 'Peanut Butter' );
// console.log(listOfCookies);
// // Mother realized that she actually does have Chocolate Chips, and it was raisins that she didn't have any of.

// listOfCookies[1] = ' Chocolate Chip ';
// console.log(listOfCookies);

// console.log(listOfCookies.indexOf('Sugar'));
// // Mother is feeling a bit ambitious today, so she tells me to pick another cookie I'd like also.

// listOfCookies.push( 'toffee' );
// console.log(listOfCookies);



// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods

let listOfCookies = ['Chocolate Chip', 'Raisin', 'Sugar', 'M&M'];
console.log(listOfCookies);

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log( 'Similar to the example above, is',listOfCookies);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array

console.log( 'Number of cookies:', listOfCookies.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 

console.log( 'The second animal in the array is', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 

console.log( 'The last animal in the array is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item

let lastAnimal = 'Dog'
console.log( 'Last animal in array is:', lastAnimal.length);
// console.log('Last animal in array is:', animalArray.length)

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array

listOfCookies.push( 'Peanut Butter' );
console.log(listOfCookies);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let removedFoodItem = listOfCookies.pop();

console.log( 'Removed the last cookie:', removedFoodItem);
console.log(listOfCookies);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array

listOfCookies.unshift( 'toffee');
console.log(listOfCookies);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

removedFoodItem = listOfCookies.shift();
console.log( 'removed the first food item:', removedFoodItem);
console.log(listOfCookies);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

listOfCookies[1] = 'Mint';

console.log( 'Raisin was replaced by:', listOfCookies[1]);
console.log(listOfCookies);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.


// .sort organizes items in alphebetical order
// .reverse organizes list items in reverse order (but not alphebetically)
listOfCookies.sort();
listOfCookies.reverse();
console.log(listOfCookies);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

listOfCookies[0] = 'Sugar'
listOfCookies[1] = 'Mint'
listOfCookies[2] = "M&M"
listOfCookies[3] = "Chocolate Chip"

console.log( listOfCookies[0], 'and' , listOfCookies[1], 'and' , listOfCookies[2], 'and' , listOfCookies[3]);


// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

let combinedArrays = ['fish', 'cat', 'bird', 'dog', 'Sugar', 'Mint', 'M&M', 'Chocolate Chip'];

console.log(combinedArrays);