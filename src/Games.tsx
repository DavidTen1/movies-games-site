import {filterByProp} from "./BaseFuncs.tsx";

const Games = () => <h1>Games</h1>;

const gamesData = filterByProp("game","type");

export default Games;