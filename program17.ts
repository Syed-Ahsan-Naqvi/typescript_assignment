

const guests: string[] = ["Alex", "Shrack", "Charlie", "Bob", "Chile", "Jack"];

console.log(`
  I found a bigger dinner table, but it won't arrive in time for the dinner, so I can only invite two people!
`);

for (let i = 0; i < guests.length + 2; i++) {
  const guest: string | undefined = guests.pop();
  if (guest) {
    console.log(`
      Sorry, ${guest}, I can't invite you to dinner.
    `);
  }
}

for (let i = 0; i < guests.length; i++) {
  const element: string = guests[i];
  console.warn(`Dear ${element},

    I'm a passionate developer and I'd like to invite you over for dinner tonight so we can share our experiences.

    Sincerely,
    Your Friend
    `);
}

guests.splice(0, 2);
console.log(guests); 