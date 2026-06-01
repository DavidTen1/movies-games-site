import mediaDataset from "./datasetFile.tsx";

const Movies = () => <h1>Movies</h1>;

const moviesData = mediaDataset.filter( a => a.type == 'movies');

export default Movies;