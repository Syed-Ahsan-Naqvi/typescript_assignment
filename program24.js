// Tests for equality and inequality with strings
var city = 'New York';
console.log("Is city equal to 'New York'? I predict True.");
console.log(city == 'New York');
console.log("Is city not equal to 'Los Angeles'? I predict True.");
console.log(city != 'Los Angeles');
console.log("Is city equal to 'new york'? I predict False.");
console.log(city == 'new york');
console.log("Is city not equal to 'New York City'? I predict False.");
console.log(city != 'New York City');
// Tests using the lowercase function
var word = 'HELLO';
console.log("Is the lowercase of 'HELLO' equal to 'hello'? I predict True.");
console.log(word.toLowerCase() == 'hello');
console.log("Is the lowercase of 'WORLD' not equal to 'world'? I predict True.");
console.log(word.toLowerCase() != 'world');
// Numerical tests
var x = 5;
var y = 10;
console.log("Is x equal to 5? I predict True.");
console.log(x == 5);
console.log("Is y not equal to 15? I predict True.");
console.log(y != 15);
console.log("Is x greater than 2? I predict True.");
console.log(x > 2);
console.log("Is y less than 20? I predict True.");
console.log(y < 20);
console.log("Is x greater than or equal to 5? I predict True.");
console.log(x >= 5);
console.log("Is y less than or equal to 10? I predict True.");
console.log(y <= 10);
// Tests using "and" and "or" operators
var number = 15;
console.log("Is number greater than 10 and less than 20? I predict True.");
console.log(number > 10 && number < 20);
console.log("Is number greater than 20 or less than 10? I predict False.");
console.log(number > 20 || number < 10);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.indexOf('apple'));
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.indexOf('grape'));
// Test whether an item is not in an array
console.log("Is 'mango' not in the fruits array? I predict True.");
console.log(!fruits.indexOf('mango'));
console.log("Is 'banana' not in the fruits array? I predict False.");
console.log(!fruits.indexOf('banana'));
