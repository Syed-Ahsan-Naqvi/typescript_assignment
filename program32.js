var current_users = ['john', 'mary', 'david', 'emily', 'sophia'];
var new_users = ['emma', 'david', 'jackson', 'sophia', 'olivia'];
for (var i = 0; i < new_users.length; i++) {
    var isTaken = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log("Sorry, the username '".concat(new_users[i], "' is already taken. Please choose a different username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_users[i], "' is available."));
    }
}
