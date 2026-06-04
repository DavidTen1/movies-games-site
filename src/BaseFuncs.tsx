import mediaDataset from "./datasetFile.tsx";
import allowedFilterKeyValue_Pairs from "./filterValues.tsx";

type MediaItem = typeof mediaDataset[number];

type AllowedFilterKey = keyof typeof allowedFilterKeyValue_Pairs;

const allowedKeys = Object.keys(allowedFilterKeyValue_Pairs) as AllowedFilterKey[];

function isAllowedKey(property: unknown): property is AllowedFilterKey {
    return (typeof property === "string" && allowedKeys.includes(property as AllowedFilterKey));
}

function compareInputWithKeys(userInput: string, property?: AllowedFilterKey) {
    const matchesInput = (value: unknown) =>
        String(value).includes(userInput);

    if (property !== undefined) {
        return allowedFilterKeyValue_Pairs[property].some(matchesInput) ;
    }

    return Object.values(allowedFilterKeyValue_Pairs).some((allowedValues) =>
        allowedValues.some(matchesInput)
    );
}


function filterByProp(userInput: string, property?: keyof MediaItem) {

    return mediaDataset.filter((x) => {
        const values = isAllowedKey(property) && compareInputWithKeys(userInput, property) ? [x[property]] : Object.values(x);

        return values.some((value) => {
            if (value && Array.isArray(value)) {
                return value.some((item) => String(item).includes(userInput) ||
                    (item?.actor?.includes(userInput) || item?.character?.includes(userInput))) ;
            }
            return String(value).includes(userInput);
        });
    });
}

function sortEntriesBy(property: AllowedFilterKey) {
    return [...mediaDataset].sort((a, b) => {
        const valueA = a[property];
        const valueB = b[property];

        if (valueA == null) return 1;
        if (valueB == null) return -1;

        return valueA > valueB ? 1 : -1;
    });
}

export { filterByProp, sortEntriesBy };