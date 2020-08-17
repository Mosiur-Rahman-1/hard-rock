//adding the function to fetch the input song name result such as Artist Name and song title
document.getElementById ("search-btn").addEventListener ("click", () => {

    document.getElementById ("ten-song-list").style.display = "block";
    const result = document.getElementById ("lyrics-search-box").value;

    if (result == "" || result == " ") {
        alert("please enter a song name");
    }
    
    fetch (`${"https://api.lyrics.ovh/suggest/"}${result}`)
    .then(response => response.json())
    .then(data => getTitle(data))
    
})


// Adding song title, album name and artist name is suggestion list
// Need to use for loop to make it compact
function getTitle (data) {

    document.getElementById("song-title-one").innerText = data.data[0].title;
    document.getElementById("album-name-one").innerText = data.data[0].album.title;
    document.getElementById("author-name-one").innerText = data.data[0].artist.name;

    document.getElementById("song-title-two").innerText = data.data[1].title;
    document.getElementById("album-name-two").innerText = data.data[1].album.title;
    document.getElementById("author-name-two").innerText = data.data[1].artist.name;

    document.getElementById("song-title-three").innerText = data.data[2].title;
    document.getElementById("album-name-three").innerText = data.data[2].album.title;
    document.getElementById("author-name-three").innerText = data.data[2].artist.name;

    document.getElementById("song-title-four").innerText = data.data[3].title;
    document.getElementById("album-name-four").innerText = data.data[3].album.title;    
    document.getElementById("author-name-four").innerText = data.data[3].artist.name;

    document.getElementById("song-title-five").innerText = data.data[4].title;
    document.getElementById("album-name-five").innerText = data.data[4].album.title;
    document.getElementById("author-name-five").innerText = data.data[4].artist.name;

    document.getElementById("song-title-six").innerText = data.data[5].title;
    document.getElementById("album-name-six").innerText = data.data[5].album.title;
    document.getElementById("author-name-six").innerText = data.data[5].artist.name;

    document.getElementById("song-title-seven").innerText = data.data[6].title;
    document.getElementById("album-name-seven").innerText = data.data[6].album.title;
    document.getElementById("author-name-seven").innerText = data.data[6].artist.name;

    document.getElementById("song-title-eight").innerText = data.data[7].title;
    document.getElementById("album-name-eight").innerText = data.data[7].album.title;
    document.getElementById("author-name-eight").innerText = data.data[7].artist.name;

    document.getElementById("song-title-nine").innerText = data.data[8].title;
    document.getElementById("album-name-nine").innerText = data.data[8].album.title;
    document.getElementById("author-name-nine").innerText = data.data[8].artist.name;

    document.getElementById("song-title-ten").innerText = data.data[9].title;
    document.getElementById("album-name-ten").innerText = data.data[9].album.title;
    document.getElementById("author-name-ten").innerText = data.data[9].artist.name;

}


// All the 10 suggestion list, get lyrics button function
// need to use for loop and function to compact
document.getElementById ("song-lyrics-one").addEventListener ("click", () => {
    
    document.getElementById ("lyric-text").style.display = "block";
    const artistName = document.getElementById("author-name-one").innerText;
    const songTitle = document.getElementById("song-title-one").innerText;
    fetch (`${"https://api.lyrics.ovh/v1/"}${artistName}/${songTitle}`)
    .then(response => response.json())
    .then(lyrics => {

        document.getElementById ("author-name").innerText = artistName;
        document.getElementById ("song-title").innerText = songTitle;
        document.getElementById ("lyrics-full").innerText = lyrics.lyrics;


    })
})

document.getElementById ("song-lyrics-two").addEventListener ("click", () => {
    
    document.getElementById ("lyric-text").style.display = "block";
    const artistName = document.getElementById("author-name-two").innerText;
    const songTitle = document.getElementById("song-title-two").innerText;
    fetch (`${"https://api.lyrics.ovh/v1/"}${artistName}/${songTitle}`)
    .then(response => response.json())
    .then(lyrics => {

        document.getElementById ("author-name").innerText = artistName;
        document.getElementById ("song-title").innerText = songTitle;
        document.getElementById ("lyrics-full").innerText = lyrics.lyrics;


    })
})

document.getElementById ("song-lyrics-three").addEventListener ("click", () => {
    
    document.getElementById ("lyric-text").style.display = "block";
    const artistName = document.getElementById("author-name-three").innerText;
    const songTitle = document.getElementById("song-title-three").innerText;
    fetch (`${"https://api.lyrics.ovh/v1/"}${artistName}/${songTitle}`)
    .then(response => response.json())
    .then(lyrics => {

        document.getElementById ("author-name").innerText = artistName;
        document.getElementById ("song-title").innerText = songTitle;
        document.getElementById ("lyrics-full").innerText = lyrics.lyrics;


    })
})


document.getElementById ("song-lyrics-four").addEventListener ("click", () => {
    
    document.getElementById ("lyric-text").style.display = "block";
    const artistName = document.getElementById("author-name-four").innerText;
    const songTitle = document.getElementById("song-title-four").innerText;
    fetch (`${"https://api.lyrics.ovh/v1/"}${artistName}/${songTitle}`)
    .then(response => response.json())
    .then(lyrics => {

        document.getElementById ("author-name").innerText = artistName;
        document.getElementById ("song-title").innerText = songTitle;
        document.getElementById ("lyrics-full").innerText = lyrics.lyrics;


    })
})


document.getElementById ("song-lyrics-five").addEventListener ("click", () => {
    
    document.getElementById ("lyric-text").style.display = "block";
    const artistName = document.getElementById("author-name-five").innerText;
    const songTitle = document.getElementById("song-title-five").innerText;
    fetch (`${"https://api.lyrics.ovh/v1/"}${artistName}/${songTitle}`)
    .then(response => response.json())
    .then(lyrics => {

        document.getElementById ("author-name").innerText = artistName;
        document.getElementById ("song-title").innerText = songTitle;
        document.getElementById ("lyrics-full").innerText = lyrics.lyrics;


    })
})


document.getElementById ("song-lyrics-six").addEventListener ("click", () => {
    
    document.getElementById ("lyric-text").style.display = "block";
    const artistName = document.getElementById("author-name-six").innerText;
    const songTitle = document.getElementById("song-title-six").innerText;
    fetch (`${"https://api.lyrics.ovh/v1/"}${artistName}/${songTitle}`)
    .then(response => response.json())
    .then(lyrics => {

        document.getElementById ("author-name").innerText = artistName;
        document.getElementById ("song-title").innerText = songTitle;
        document.getElementById ("lyrics-full").innerText = lyrics.lyrics;


    })
})


document.getElementById ("song-lyrics-seven").addEventListener ("click", () => {
    
    document.getElementById ("lyric-text").style.display = "block";
    const artistName = document.getElementById("author-name-seven").innerText;
    const songTitle = document.getElementById("song-title-seven").innerText;
    fetch (`${"https://api.lyrics.ovh/v1/"}${artistName}/${songTitle}`)
    .then(response => response.json())
    .then(lyrics => {

        document.getElementById ("author-name").innerText = artistName;
        document.getElementById ("song-title").innerText = songTitle;
        document.getElementById ("lyrics-full").innerText = lyrics.lyrics;


    })
})


document.getElementById ("song-lyrics-eight").addEventListener ("click", () => {
    
    document.getElementById ("lyric-text").style.display = "block";
    const artistName = document.getElementById("author-name-eight").innerText;
    const songTitle = document.getElementById("song-title-eight").innerText;
    fetch (`${"https://api.lyrics.ovh/v1/"}${artistName}/${songTitle}`)
    .then(response => response.json())
    .then(lyrics => {

        document.getElementById ("author-name").innerText = artistName;
        document.getElementById ("song-title").innerText = songTitle;
        document.getElementById ("lyrics-full").innerText = lyrics.lyrics;


    })
})


document.getElementById ("song-lyrics-nine").addEventListener ("click", () => {
    
    document.getElementById ("lyric-text").style.display = "block";
    const artistName = document.getElementById("author-name-nine").innerText;
    const songTitle = document.getElementById("song-title-nine").innerText;
    fetch (`${"https://api.lyrics.ovh/v1/"}${artistName}/${songTitle}`)
    .then(response => response.json())
    .then(lyrics => {

        document.getElementById ("author-name").innerText = artistName;
        document.getElementById ("song-title").innerText = songTitle;
        document.getElementById ("lyrics-full").innerText = lyrics.lyrics;


    })
})


document.getElementById ("song-lyrics-ten").addEventListener ("click", () => {
    
    document.getElementById ("lyric-text").style.display = "block";
    const artistName = document.getElementById("author-name-ten").innerText;
    const songTitle = document.getElementById("song-title-ten").innerText;
    fetch (`${"https://api.lyrics.ovh/v1/"}${artistName}/${songTitle}`)
    .then(response => response.json())
    .then(lyrics => {

        document.getElementById ("author-name").innerText = artistName;
        document.getElementById ("song-title").innerText = songTitle;
        document.getElementById ("lyrics-full").innerText = lyrics.lyrics;


    })
})
