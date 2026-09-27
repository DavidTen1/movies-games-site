import {filterByProp} from "./BaseFuncs.tsx";

const Series = () => <><h1>Series</h1>
    <p> © 2026 - {new Date().getFullYear()} </p></>;


const seriesData = filterByProp("TV Series","category");

export default Series;