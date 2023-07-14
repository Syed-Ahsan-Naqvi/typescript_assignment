function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}"`);
}

// Creating a large shirt with the default message
make_shirt(); // Default size and message

// Creating a medium shirt with the default message
make_shirt("Medium"); // Custom size, default message

// Creating a small shirt with a custom message
make_shirt("Small", "Hello, World!"); // Custom size and message