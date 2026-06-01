import mediaDataset from "./datasetFile.tsx";

type MediaItem = typeof mediaDataset[number];

function filterByProp(userInput: string) {
    return mediaDataset.filter((x) =>
        Object.values(x).some((value) => {
            if (Array.isArray(value)) {
                return value.some((item) => item === userInput);
            }

            return value === userInput;
        })
    );
}

function sortEntriesBy(property: keyof MediaItem) {
    return [...mediaDataset].sort((a, b) => {
        const valueA = a[property];
        const valueB = b[property];

        if (valueA == null) return 1;
        if (valueB == null) return -1;

        return valueA > valueB ? 1 : -1;
    });
}

export { filterByProp, sortEntriesBy };

