
const guests: string[] = ["Alex", "Shrack", "Charlie"];
const guestNotCome: string = "Shrack";

console.log(`
  I found a bigger dinner table, so I can invite more people!
`);

guests.unshift("Bob");
guests.splice(2, 0, "Chile");
guests.push("Jack");

for (let i = 0; i < guests.length; i++) {
  const element: string = guests[i];
  console.warn(`Dear ${element},

    I'm a passionate developer and I'd like to invite you over for dinner tonight so we can share our experiences.

    Sincerely,
    Your Friend
    `);
}