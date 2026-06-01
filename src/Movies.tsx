import {filterByProp} from "./BaseFuncs.tsx";

const Movies = () => <h1>Movies</h1>;

const moviesData = filterByProp("Movie","category");

export default Movies;