import mediaDataset from "./datasetFile.tsx";

function filterByProp(userInput : string){

    return mediaDataset?.map((x) => Object.values(x).includes(userInput)  );
}

function sortEntriesBy(property) {
    return mediaDataset
        ? [...mediaDataset].sort((a, b) => {
            return a[property] >= b[property] ? 1 : -1;
        })
        : undefined;
}

function mapKeyToImage(){

}

