const mediaDataset = [
    {
        id: 1,
        title: "The Witcher 3: Wild Hunt",
        type: "game",
        genre: ["RPG", "Adventure", "Fantasy"],
        releaseYear: 2015,
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        availableOn: ["Steam", "GOG", "Epic Games Store"],
        priceType: "Paid",
        image: "witcher-3.jpg",

        developer: "CD Projekt Red",
        publisher: "CD Projekt",
        director: "Konrad Tomaszkiewicz",
        writer: ["Marcin Blacha", "Borys Pugacz-Muraszkiewicz"],
        idea: "Based on Andrzej Sapkowski's The Witcher novels and short stories.",
        cast: [
            {
                actor: "Doug Cockle",
                character: "Geralt of Rivia"
            },
            {
                actor: "Jo Wyatt",
                character: "Ciri"
            },
            {
                actor: "Denise Gough",
                character: "Yennefer"
            },
            {
                actor: "Jaimi Barbakoff",
                character: "Triss Merigold"
            }
        ],

        plotSummary: "Geralt of Rivia searches for his adopted daughter Ciri while a supernatural army called the Wild Hunt pursues her.",
        description: "An open-world RPG where you play as Geralt of Rivia, a monster hunter searching for his adopted daughter."
    },

    {
        id: 2,
        title: "Cyberpunk 2077",
        type: "game",
        genre: ["RPG", "Action", "Sci-Fi"],
        releaseYear: 2020,
        platforms: ["PC", "PlayStation", "Xbox"],
        availableOn: ["Steam", "GOG", "Epic Games Store"],
        priceType: "Paid",
        image: "cyberpunk-2077.jpg",

        developer: "CD Projekt Red",
        publisher: "CD Projekt",
        director: "Adam Badowski",
        writer: ["Marcin Blacha", "Tomasz Marchewka", "Magdalena Zych"],
        idea: "Based on the Cyberpunk tabletop role-playing universe created by Mike Pondsmith.",
        cast: [
            {
                actor: "Keanu Reeves",
                character: "Johnny Silverhand"
            },
            {
                actor: "Gavin Drea",
                character: "Male V"
            },
            {
                actor: "Cherami Leigh",
                character: "Female V"
            },
            {
                actor: "Emily Woo Zeller",
                character: "Panam Palmer"
            }
        ],

        plotSummary: "A mercenary named V becomes trapped with a dangerous digital copy of rockstar Johnny Silverhand inside their mind.",
        description: "A futuristic open-world action RPG set in Night City."
    },

    {
        id: 3,
        title: "Elden Ring",
        type: "game",
        genre: ["Action RPG", "Fantasy", "Open World"],
        releaseYear: 2022,
        platforms: ["PC", "PlayStation", "Xbox"],
        availableOn: ["Steam", "PlayStation Store", "Xbox Store"],
        priceType: "Paid",
        image: "elden-ring.jpg",

        developer: "FromSoftware",
        publisher: "Bandai Namco Entertainment",
        director: "Hidetaka Miyazaki",
        writer: ["Hidetaka Miyazaki", "George R. R. Martin"],
        idea: "A dark fantasy world built around the shattered Elden Ring and the struggle for power in the Lands Between.",
        cast: [
            {
                actor: "Martha Mackintosh",
                character: "Melina"
            },
            {
                actor: "Anthony Howell",
                character: "Margit / Morgott"
            },
            {
                actor: "Con O'Neill",
                character: "Mohg"
            },
            {
                actor: "Pippa Bennett-Warner",
                character: "Malenia"
            }
        ],

        plotSummary: "A Tarnished warrior explores the Lands Between to gather the Great Runes and become the new Elden Lord.",
        description: "A challenging open-world fantasy RPG created by FromSoftware."
    },

    {
        id: 4,
        title: "Stardew Valley",
        type: "game",
        genre: ["Simulation", "Farming", "Indie"],
        releaseYear: 2016,
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
        availableOn: ["Steam", "GOG", "Nintendo eShop", "App Store", "Google Play"],
        priceType: "Paid",
        image: "stardew-valley.jpg",

        developer: "ConcernedApe",
        publisher: "ConcernedApe",
        director: "Eric Barone",
        writer: "Eric Barone",
        idea: "A farming and life simulation inspired by classic Harvest Moon-style games.",
        cast: [],

        plotSummary: "After inheriting an old farm, the player leaves city life behind to restore the land and build relationships in a small town.",
        description: "A relaxing farming and life simulation game where you build your dream farm."
    },

    {
        id: 5,
        title: "Hades",
        type: "game",
        genre: ["Roguelike", "Action", "Indie"],
        releaseYear: 2020,
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        availableOn: ["Steam", "Epic Games Store", "Nintendo eShop"],
        priceType: "Paid",
        image: "hades.jpg",

        developer: "Supergiant Games",
        publisher: "Supergiant Games",
        director: "Amir Rao",
        writer: "Greg Kasavin",
        idea: "A roguelike action game based on Greek mythology and the escape attempts of Zagreus from the underworld.",
        cast: [
            {
                actor: "Darren Korb",
                character: "Zagreus"
            },
            {
                actor: "Logan Cunningham",
                character: "Hades"
            },
            {
                actor: "Avalon Penrose",
                character: "Megaera"
            },
            {
                actor: "Courtney Vineys",
                character: "Dusa"
            }
        ],

        plotSummary: "Zagreus, son of Hades, repeatedly fights through the underworld to escape and discover the truth about his family.",
        description: "A fast-paced roguelike game where you fight your way out of the underworld."
    },

    {
        id: 6,
        title: "Stranger Things",
        type: "movie/show",
        category: "TV Show",
        genre: ["Sci-Fi", "Horror", "Drama"],
        releaseYear: 2016,
        seasons: 4,
        availableOn: ["Netflix"],
        priceType: "Subscription",
        image: "stranger-things.jpg",

        developer: null,
        publisher: null,
        director: ["The Duffer Brothers", "Shawn Levy", "Andrew Stanton"],
        writer: ["The Duffer Brothers"],
        idea: "A supernatural mystery inspired by 1980s horror, science fiction, government experiments, and coming-of-age stories.",
        cast: [
            {
                actor: "Millie Bobby Brown",
                character: "Eleven"
            },
            {
                actor: "Finn Wolfhard",
                character: "Mike Wheeler"
            },
            {
                actor: "David Harbour",
                character: "Jim Hopper"
            },
            {
                actor: "Winona Ryder",
                character: "Joyce Byers"
            },
            {
                actor: "Gaten Matarazzo",
                character: "Dustin Henderson"
            },
            {
                actor: "Caleb McLaughlin",
                character: "Lucas Sinclair"
            },
            {
                actor: "Noah Schnapp",
                character: "Will Byers"
            },
            {
                actor: "Sadie Sink",
                character: "Max Mayfield"
            }
        ],

        plotSummary: "A group of children in Hawkins uncover secret experiments, supernatural creatures, and a dangerous parallel dimension.",
        description: "A group of kids uncover supernatural mysteries in their small town."
    },

    {
        id: 7,
        title: "Breaking Bad",
        type: "movie/show",
        category: "TV Show",
        genre: ["Crime", "Drama", "Thriller"],
        releaseYear: 2008,
        seasons: 5,
        availableOn: ["Netflix"],
        priceType: "Subscription",
        image: "breaking-bad.jpg",

        developer: null,
        publisher: null,
        director: ["Vince Gilligan", "Michelle MacLaren", "Adam Bernstein", "Rian Johnson"],
        writer: ["Vince Gilligan", "Peter Gould", "George Mastras", "Thomas Schnauz"],
        idea: "A mild-mannered chemistry teacher transforms into a criminal drug kingpin after a cancer diagnosis.",
        cast: [
            {
                actor: "Bryan Cranston",
                character: "Walter White"
            },
            {
                actor: "Aaron Paul",
                character: "Jesse Pinkman"
            },
            {
                actor: "Anna Gunn",
                character: "Skyler White"
            },
            {
                actor: "Dean Norris",
                character: "Hank Schrader"
            },
            {
                actor: "Betsy Brandt",
                character: "Marie Schrader"
            },
            {
                actor: "RJ Mitte",
                character: "Walter White Jr."
            },
            {
                actor: "Bob Odenkirk",
                character: "Saul Goodman"
            },
            {
                actor: "Giancarlo Esposito",
                character: "Gus Fring"
            }
        ],

        plotSummary: "Walter White, a chemistry teacher diagnosed with cancer, turns to producing drugs and becomes increasingly consumed by crime and power.",
        description: "A chemistry teacher turns to making illegal substances after a cancer diagnosis."
    },

    {
        id: 8,
        title: "The Dark Knight",
        type: "movie/show",
        category: "Movie",
        genre: ["Action", "Crime", "Drama"],
        releaseYear: 2008,
        duration: "2h 32m",
        availableOn: ["Netflix", "Amazon Prime Video", "Apple TV"],
        priceType: "Subscription / Rent / Buy",
        image: "the-dark-knight.jpg",

        developer: null,
        publisher: null,
        director: "Christopher Nolan",
        writer: ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
        idea: "Based on DC Comics' Batman, focusing on order, chaos, morality, and Gotham's criminal underworld.",
        cast: [
            {
                actor: "Christian Bale",
                character: "Bruce Wayne / Batman"
            },
            {
                actor: "Heath Ledger",
                character: "Joker"
            },
            {
                actor: "Aaron Eckhart",
                character: "Harvey Dent"
            },
            {
                actor: "Michael Caine",
                character: "Alfred Pennyworth"
            },
            {
                actor: "Gary Oldman",
                character: "James Gordon"
            },
            {
                actor: "Maggie Gyllenhaal",
                character: "Rachel Dawes"
            },
            {
                actor: "Morgan Freeman",
                character: "Lucius Fox"
            }
        ],

        plotSummary: "Batman, Gordon, and Harvey Dent try to dismantle Gotham's criminal underworld while the Joker pushes the city into chaos.",
        description: "Batman faces the Joker, a criminal mastermind spreading chaos across Gotham City."
    },

    {
        id: 9,
        title: "Interstellar",
        type: "movie/show",
        category: "Movie",
        genre: ["Sci-Fi", "Drama", "Adventure"],
        releaseYear: 2014,
        duration: "2h 49m",
        availableOn: ["Netflix", "Amazon Prime Video", "Apple TV"],
        priceType: "Subscription / Rent / Buy",
        image: "interstellar.jpg",

        developer: null,
        publisher: null,
        director: "Christopher Nolan",
        writer: ["Jonathan Nolan", "Christopher Nolan"],
        idea: "A science-fiction story about survival, space travel, relativity, love, and the future of humanity.",
        cast: [
            {
                actor: "Matthew McConaughey",
                character: "Cooper"
            },
            {
                actor: "Anne Hathaway",
                character: "Amelia Brand"
            },
            {
                actor: "Jessica Chastain",
                character: "Murph"
            },
            {
                actor: "Mackenzie Foy",
                character: "Young Murph"
            },
            {
                actor: "Michael Caine",
                character: "Professor Brand"
            },
            {
                actor: "Matt Damon",
                character: "Mann"
            }
        ],

        plotSummary: "A former pilot joins a mission through a wormhole to find a habitable planet as Earth becomes unable to sustain humanity.",
        description: "A team of explorers travels through a wormhole to find a new home for humanity."
    },

    {
        id: 10,
        title: "Arcane",
        type: "movie/show",
        category: "TV Show",
        genre: ["Animation", "Fantasy", "Action"],
        releaseYear: 2021,
        seasons: 2,
        availableOn: ["Netflix"],
        priceType: "Subscription",
        image: "arcane.jpg",

        developer: null,
        publisher: null,
        director: ["Pascal Charrue", "Arnaud Delord"],
        writer: ["Christian Linke", "Alex Yee"],
        idea: "Based on Riot Games' League of Legends universe, especially the conflict between Piltover and Zaun.",
        cast: [
            {
                actor: "Hailee Steinfeld",
                character: "Vi"
            },
            {
                actor: "Ella Purnell",
                character: "Jinx"
            },
            {
                actor: "Kevin Alejandro",
                character: "Jayce"
            },
            {
                actor: "Katie Leung",
                character: "Caitlyn"
            },
            {
                actor: "Harry Lloyd",
                character: "Viktor"
            },
            {
                actor: "Toks Olagundoye",
                character: "Mel"
            }
        ],

        plotSummary: "Two sisters are separated by conflict between the wealthy city of Piltover and the oppressed underground city of Zaun.",
        description: "An animated series based on League of Legends, focusing on two sisters divided by conflict."
    },

    {
        id: 11,
        title: "The Last of Us",
        type: "game",
        genre: ["Action", "Adventure", "Survival"],
        releaseYear: 2013,
        platforms: ["PlayStation", "PC"],
        availableOn: ["PlayStation Store", "Steam"],
        priceType: "Paid",
        image: "the-last-of-us.jpg",

        developer: "Naughty Dog",
        publisher: "Sony Computer Entertainment",
        director: ["Neil Druckmann", "Bruce Straley"],
        writer: "Neil Druckmann",
        idea: "A post-apocalyptic survival story about trauma, protection, morality, and found family.",
        cast: [
            {
                actor: "Troy Baker",
                character: "Joel"
            },
            {
                actor: "Ashley Johnson",
                character: "Ellie"
            },
            {
                actor: "Annie Wersching",
                character: "Tess"
            },
            {
                actor: "Merle Dandridge",
                character: "Marlene"
            },
            {
                actor: "W. Earl Brown",
                character: "Bill"
            }
        ],

        plotSummary: "Joel escorts Ellie across a post-apocalyptic America, forming a close bond while facing infected creatures and hostile survivors.",
        description: "A story-driven survival adventure set in a post-apocalyptic world."
    },

    {
        id: 12,
        title: "The Last of Us",
        type: "movie/show",
        category: "TV Show",
        genre: ["Drama", "Post-Apocalyptic", "Thriller"],
        releaseYear: 2023,
        seasons: 1,
        availableOn: ["HBO Max", "Amazon Prime Video"],
        priceType: "Subscription / Rent / Buy",
        image: "the-last-of-us-show.jpg",

        developer: null,
        publisher: null,
        director: ["Craig Mazin", "Neil Druckmann", "Kantemir Balagov", "Ali Abbasi"],
        writer: ["Craig Mazin", "Neil Druckmann"],
        idea: "Adapted from Naughty Dog's video game about Joel and Ellie surviving in a world destroyed by a fungal infection.",
        cast: [
            {
                actor: "Pedro Pascal",
                character: "Joel"
            },
            {
                actor: "Bella Ramsey",
                character: "Ellie"
            },
            {
                actor: "Anna Torv",
                character: "Tess"
            },
            {
                actor: "Merle Dandridge",
                character: "Marlene"
            },
            {
                actor: "Nick Offerman",
                character: "Bill"
            },
            {
                actor: "Murray Bartlett",
                character: "Frank"
            },
            {
                actor: "Lamar Johnson",
                character: "Henry"
            },
            {
                actor: "Keivonn Woodard",
                character: "Sam"
            }
        ],

        plotSummary: "Joel is tasked with transporting Ellie across a devastated America because she may hold the key to humanity's survival.",
        description: "A TV adaptation of the popular game about survival, loss, and human connection."
    }
];

type GenreCategory = {
    category: "Fiction" | "Non-fiction";
    subgenres: string[];
};

const genreCategories: GenreCategory[] = [
    {
        category: "Fiction",
        subgenres: [
            "Action",
            "Adventure",
            "Fantasy",
            "Science Fiction",
            "Horror",
            "Mystery",
            "Thriller",
            "Crime",
            "Romance",
            "Drama",
            "Comedy",
            "Historical Fiction",
            "Superhero",
            "Cyberpunk",
            "Steampunk",
            "Dystopian",
            "Post-apocalyptic",
            "Coming-of-age",
            "Slice of Life",
            "Mythology",
        ],
    },
    {
        category: "Non-fiction",
        subgenres: [
            "Biography",
            "Autobiography",
            "Memoir",
            "Documentary",
            "History",
            "Science",
            "Technology",
            "Philosophy",
            "Psychology",
            "Self-help",
            "Business",
            "Politics",
            "True Crime",
            "Travel",
            "Education",
            "Health",
            "Fitness",
            "Nature",
            "Religion",
            "Art",
        ],
    },
];



export default mediaDataset, genreCategories;