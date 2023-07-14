const numbers: number[] = [1, 2, 3, 4, 5];
const index: number = 10; // Index out of bounds

try {
    const value: number = numbers[index];
    console.log("Value:", value);
} catch (error: any) {
    console.log("Index Error:", error.message);
}

const validIndex: number = 2; // Valid index within bounds of the array

try {
    const validValue: number = numbers[validIndex];
    console.log("Valid Value:", validValue);
} catch (error: any) {
    console.log("Index Error:", error.message);
}