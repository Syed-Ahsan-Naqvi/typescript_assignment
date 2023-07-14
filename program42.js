// Function to modify the array of magicians by adding "the Great" to each magician's name
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Function to show the modified list of magicians
function showMagicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Creating an array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Modifying the array by calling the makeGreat function
makeGreat(magicians);
// Showing the modified list of magicians
showMagicians(magicians);
