var numbers = [1, 2, 3, 4, 5];
var index = 10; // Index out of bounds
try {
    var value = numbers[index];
    console.log("Value:", value);
}
catch (error) {
    console.log("Index Error:", error.message);
}
var validIndex = 2; // Valid index within bounds of the array
try {
    var validValue = numbers[validIndex];
    console.log("Valid Value:", validValue);
}
catch (error) {
    console.log("Index Error:", error.message);
}
