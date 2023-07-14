
const guests: string[] = ["Alex", "Shrack", "Charlie"];

for (let i: number = 0; i < guests.length; i++) {
    const element: string = guests[i];
    console.warn(`Dear ${element},

    I'm a passionate developer and I'd like to invite you over for dinner tonight so we can share our experiences.

    Sincerely,
    Your Friend
    `);
}