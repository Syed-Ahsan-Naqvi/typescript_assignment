
var places = ["Lahore", "Islamabad", "Karachi", "Kashmir", "Peshawar"];
// Print the array in its original order.
console.log(places);
// Print the array in alphabetical order without modifying the actual list.
var sortedplaces = places.slice().sort(function (a, b) { return a.localeCompare(b); });
console.log(sortedplaces);
// Show that the array is still in its original order by printing it.
console.log(places);
// Print the array in reverse alphabetical order without changing the order of the original list.
var reversedplaces = places.slice().reverse();
console.log(reversedplaces);
// Show that the array is still in its original order by printing it again.
console.log(places);
// Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log(places);
// Reverse the order of your list again. Print the list to show it's back to its original order.
places.reverse();
console.log(places);
// Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log(places);
// Sort to change your array so it's stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort(function (a, b) { return b.localeCompare(a); });
console.log(places);
