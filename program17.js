
var guests = ["Alex", "Shrack", "Charlie", "Bob", "Chile", "Jack"];
console.log("\n  I found a bigger dinner table, but it won't arrive in time for the dinner, so I can only invite two people!\n");
for (var i = 0; i < guests.length + 2; i++) {
    var guest = guests.pop();
    if (guest) {
        console.log("\n      Sorry, ".concat(guest, ", I can't invite you to dinner.\n    "));
    }
}
for (var i = 0; i < guests.length; i++) {
    var element = guests[i];
    console.warn("Dear ".concat(element, ",\n\n    I'm a passionate developer and I'd like to invite you over for dinner tonight so we can share our experiences.\n\n    Sincerely,\n    Your Friend\n    "));
}
guests.splice(0, 2);
console.log(guests); 
