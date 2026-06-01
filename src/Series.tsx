import mediaDataset from "./datasetFile.tsx";

const Series = () => <h1>Series</h1>;


const seriesData = mediaDataset.filter( a => a.type == 'series');

export default Series;