import mediaDataset from "./datasetFile.tsx";

const Games = () => <h1>Games</h1>;
const gamesData = mediaDataset.filter( a => a.type == 'games');
export default Games;