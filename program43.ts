// Function to modify the array of magicians by adding "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push(`the Great ${magicians[i]}`);
    }
    return modifiedMagicians;
}

// Function to show the list of magicians
function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Creating an array of magician's names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Creating a copy of the array and modifying it by calling the make_great function
let modifiedMagicians: string[] = make_great([...magicians]);

// Showing the original list of magicians
console.log("Original list:");
show_magicians(magicians);

console.log("");

// Showing the modified list of magicians
console.log("Modified list:");
show_magicians(modifiedMagicians);