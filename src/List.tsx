import mediaDataset from "./datasetFile.tsx";

const List = () => {
    return <> <h1>Movies, Games & Series:</h1>
        <ul>
            {mediaDataset.map((work) =>
            <li key={work.id}><h2> {work.title}</h2> </li>)
            }
        </ul>
       </>;

};



export default List;