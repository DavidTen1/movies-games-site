type GenreCategory = {
    category: "Fiction" | "Non-fiction";
    subgenres: string[];
};


function getGenreCategory(category: GenreCategory) {}

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

export default function GenreDropdowns() {
    return (
        <div>
            {genreCategories.map((genreCategory) => (
                <div key={genreCategory.category}>
                    <label htmlFor={genreCategory.category}>
                        {genreCategory.category}
                    </label>

                    <select id={genreCategory.category} name={genreCategory.category}>
                        <option value="">Select a {genreCategory.category} genre</option>

                        {genreCategory.subgenres.map((subgenre) => (
                            <option key={subgenre} value={subgenre}>
                                {subgenre}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
}
