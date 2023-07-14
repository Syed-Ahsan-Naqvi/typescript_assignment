var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to modify the array of magicians by adding "the Great" to each magician's name
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great ".concat(magicians[i]));
    }
    return modifiedMagicians;
}
// Function to show the list of magicians
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Creating an array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Creating a copy of the array and modifying it by calling the make_great function
var modifiedMagicians = make_great(__spreadArray([], magicians, true));
// Showing the original list of magicians
console.log("Original list:");
show_magicians(magicians);
console.log("");
// Showing the modified list of magicians
console.log("Modified list:");
show_magicians(modifiedMagicians);
