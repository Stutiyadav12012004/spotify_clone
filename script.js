const data = {
    "artist": [
        { "name": "Darshan Raval", "image": "./Images/artist/Darshan_Raval.webp" },
        { "name": "Arijit Singh", "image": "./Images/artist/Arijit-Singh.webp" },
        { "name": "YoYo Honey Singh", "image": "./Images/artist/honey-singh.webp" },
        { "name": "A.R. Rahman", "image": "./Images/artist/AR-rehman.webp" },
        { "name": "Pritam", "image": "./Images/artist/Pritam.webp" },
        { "name": "Shreya Ghoshal", "image": "./Images/artist/Shreya-goshal.webp" } // Fixed filename
    ],
    "Songs": [
        { "name": "Dilwale", "image": "./Image/song/Dilwale.jpg" },
        { "name": "Om Shanti Om", "image": "./Image/song/om-santi-om.webp" },
        { "name": "Sanam Teri Kasam", "image": "./Image/song/Sanam-teri-kasam.webp" },
        { "name": "Sanam", "image": "./Image/song/Sanam.jpg" },
        { "name": "Anuv Jain", "image": "./Image/song/Anuv-jain.webp" },
        { "name": "Shiddat", "image": "./Image/song/Shiddat.webp" }
    ]
};
};

function generateCards() {
    const cardsContainer = document.querySelector('.artists-collection');
    
    if (!cardsContainer) {
        console.error("Error: '.artists-collection' container not found!");
        return;
    }

    // Generate the HTML for artist cards
    const artistCards = data.artist.map(item => `
        <div class="artists-cart">
            <div class="artists-img">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="artists-name"><h4>${item.name}</h4></div>
        </div>
    `).join('');

    // Insert into container
    cardsContainer.innerHTML = artistCards;
}

// Ensure function runs after DOM loads
document.addEventListener("DOMContentLoaded", generateCards);
