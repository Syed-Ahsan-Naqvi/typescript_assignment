function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with different city-country pairs
let result1: string = city_country("Lahore", "Pakistan");
console.log(result1);

let result2: string = city_country("Paris", "France");
console.log(result2);

let result3: string = city_country("Sydney", "Australia");
console.log(result3);