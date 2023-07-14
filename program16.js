
var guests = ["Alex", "Shrack", "Charlie"];
var guestNotCome = "Shrack";
console.log("\n  I found a bigger dinner table, so I can invite more people!\n");
guests.unshift("Bob");
guests.splice(2, 0, "Chile");
guests.push("Jack");
for (var i = 0; i < guests.length; i++) {
    var element = guests[i];
    console.warn("Dear ".concat(element, ",\n\n    I'm a passionate developer and I'd like to invite you over for dinner tonight so we can share our experiences.\n\n    Sincerely,\n    Your Friend\n    "));
}
