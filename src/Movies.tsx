import {filterByProp} from "./BaseFuncs.tsx";

const Movies = () =>
    <><h1>Movies</h1>
        <p> © 2026 - {new Date().getFullYear()} </p></>;

const moviesData = filterByProp("Movie","category");

export default Movies;