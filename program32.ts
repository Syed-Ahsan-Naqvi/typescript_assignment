let current_users: string[] = ['john', 'mary', 'david', 'emily', 'sophia'];
let new_users: string[] = ['emma', 'david', 'jackson', 'sophia', 'olivia'];

for (let i: number = 0; i < new_users.length; i++) {
    let isTaken: boolean = false;
    for (let j: number = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log(`Sorry, the username '${new_users[i]}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
}