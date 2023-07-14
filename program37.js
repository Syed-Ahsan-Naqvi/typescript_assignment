function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\""));
}
// Creating a large shirt with the default message
make_shirt(); // Default size and message
// Creating a medium shirt with the default message
make_shirt("Medium"); // Custom size, default message
// Creating a small shirt with a custom message
make_shirt("Small", "Hello, World!"); // Custom size and message
