import {filterByProp} from "./BaseFuncs.tsx";
import MediaList from "./MediaList.tsx";

const Games = () =><><h1>Games</h1>
    <MediaList filterQuality={"movies"}></MediaList>
    <p> © 2026 - {new Date().getFullYear()} </p></> ;

export default Games;