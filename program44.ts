function make_sandwich(...items: string[]): void {
    console.log("Sandwich order summary:");
    console.log("- Bread");

    for (let item of items) {
        console.log(`- ${item}`);
    }

    console.log("- Bread\n");
}

// Calling the function with different numbers of arguments
make_sandwich("Ham", "Cheese");
make_sandwich("Turkey", "Lettuce", "Tomato");
make_sandwich("Tuna", "Mayonnaise", "Pickles", "Onion");