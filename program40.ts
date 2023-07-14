function make_album(artist: string, title: string, tracks?: number): object {
    let album: any = {
        artist: artist,
        title: title
    };

    if (tracks) {
        album["tracks"] = tracks;
    }

    return album;
}

// Creating album objects using the make_album function
let album1 = make_album("Artist 1", "Album 1");
console.log(album1);

let album2 = make_album("Artist 2", "Album 2", 12);
console.log(album2);

let album3 = make_album("Artist 3", "Album 3", 8);
console.log(album3);