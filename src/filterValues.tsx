import mediaDataset from "./datasetFile.tsx";

const allowedFilterKeyValue_Pairs = {
    title: mediaDataset.map((x) => x.title),
    type: ["game", "movie/show"],
    category: ["TV Show", "Movie"],

    genre: [
        "RPG",
        "Adventure",
        "Fantasy",
        "Action",
        "Sci-Fi",
        "Action RPG",
        "Open World",
        "Simulation",
        "Farming",
        "Indie",
        "Roguelike",
        "Horror",
        "Drama",
        "Crime",
        "Thriller",
        "Animation",
        "Survival",
        "Post-Apocalyptic",
    ],

    releaseYear: mediaDataset.map((x) => x.releaseYear),

    platforms: [
        "PC",
        "PlayStation",
        "Xbox",
        "Nintendo Switch",
        "Mobile",
    ],

    availableOn: [
        "Steam",
        "GOG",
        "Epic Games Store",
        "PlayStation Store",
        "Xbox Store",
        "Nintendo eShop",
        "App Store",
        "Google Play",
        "Netflix",
        "Amazon Prime Video",
        "Apple TV",
        "HBO Max",
    ],

    priceType: [
        "Paid",
        "Subscription",
        "Subscription / Rent / Buy",
    ],
};

export default allowedFilterKeyValue_Pairs;