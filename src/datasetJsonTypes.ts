export type MediaType = "game" | "movie/show";
export type PriceType = "Paid" | "Subscription" | "Subscription / Rent / Buy";
export type GenreGroup = "Fiction" | "Non-fiction";

export type CastMember = {
    actor: string;
    character: string;
};

export type BaseMediaItem = {
    id: number;
    title: string;
    type: MediaType;
    genre: string[];
    releaseYear: number;
    availableOn: string[];
    priceType: PriceType;
    image: string;

    developer: string | null;
    publisher: string | null;
    director: string | string[];
    writer: string | string[];
    idea: string;
    cast: CastMember[];

    plotSummary: string;
    description: string;
};

export type GameItem = BaseMediaItem & {
    type: "game";
    platforms: string[];
};

export type MovieShowItem = BaseMediaItem & {
    type: "movie/show";
    category: "Movie" | "TV Show";
    duration?: string;
    seasons?: number;
};

export type MediaItem = GameItem | MovieShowItem;

export type GenreCategory = {
    category: GenreGroup;
    subgenres: string[];
};