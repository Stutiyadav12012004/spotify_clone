const data = {
    "artist": [
        { "name": "Darshan Raval", "image": "./Images/artist/Darshan_Raval.webp" },
        { "name": "Arijit Singh", "image": "./Images/artist/Arijit-Singh.webp" },
        { "name": "YoYo Honey Singh", "image": "./Images/artist/honey-singh.webp" },
        { "name": "A.R. Rahman", "image": "./Images/artist/AR-rehman.webp" },
        { "name": "Pritam", "image": "./Images/artist/Pritam.webp" },
        { "name": "Shreya Ghoshal", "image": "./Images/artist/Shreya-goshal.webp" }
    ],
    "songs": [
        { "name": "Dilwale", "image": "./Images/songs/Dilwale.jpg" },
        { "name": "Om Shanti Om", "image": "./Images/songs/om-santi-om.webp" },
        { "name": "Sanam Teri Kasam", "image": "./Images/songs/Sanam-teri-kasam.webp" },
        { "name": "Sanam", "image": "./Images/songs/Sanam.jpg" },
        { "name": "Anuv Jain", "image": "./Images/songs/Anuv-jain.webp" },
        { "name": "Shiddat", "image": "./Images/songs/Shiddat.webp" }
    ]
};

// Function to generate artist cards dynamically
function generateArtistCards() {
    const cardsContainer = document.querySelector('.artists-collection');

    if (!cardsContainer) {
        console.error("Error: '.artists-collection' container not found!");
        return;
    }

    const artistCards = data.artist.map(item => `
        <div class="artists-cart">
            <div class="artists-img">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="songs-name"><h4>${item.name}</h4></div>
        </div>
    `).join('');

    cardsContainer.innerHTML = artistCards;
}

// Function to generate song cards dynamically
function generateSongCards() {
    const songsContainer = document.querySelector('.songs-collection');

    if (!songsContainer) {
        console.error("Error: '.songs-collection' container not found!");
        return;
    }

    const songCards = data.songs.map(item => `
        <div class="songs-cart">
            <div class="songs-img">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="songs-name"><h4>${item.name}</h4></div>
        </div>
    `).join('');

    songsContainer.innerHTML = songCards;
}

// Ensure both functions run after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    generateArtistCards();
    generateSongCards();
});
