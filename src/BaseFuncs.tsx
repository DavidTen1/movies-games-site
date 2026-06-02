import mediaDataset from "./datasetFile.tsx";
import allowedFilterKeyValue_Pairs from "./filterValues.tsx";

type MediaItem = typeof mediaDataset[number];

type AllowedFilterKey = keyof typeof allowedFilterKeyValue_Pairs;

const allowedKeys = Object.keys(
    allowedFilterKeyValue_Pairs
) as AllowedFilterKey[];

function isAllowedKey(property: unknown): property is AllowedFilterKey {
    return (
        typeof property === "string" &&
        allowedKeys.includes(property as AllowedFilterKey)
    );
}

function compareInputWithKeys(userInput: string) {
    return Object.values(allowedFilterKeyValue_Pairs).some((allowedValues) =>
        allowedValues.some((value) => String(value) === userInput)
    );
}

function compareInputWithKey(
    userInput: string,
    property: AllowedFilterKey
) {
    return allowedFilterKeyValue_Pairs[property].some(
        (value) => String(value) === userInput
    );
}

function filterByProp(userInput: string, property?: keyof MediaItem) {
    if (property !== undefined) {
        if (!isAllowedKey(property)) {
            return [];
        }

        if (!compareInputWithKey(userInput, property)) {
            return [];
        }
    } else {
        if (!compareInputWithKeys(userInput)) {
            return [];
        }
    }

    return mediaDataset.filter((x) => {
        const values = isAllowedKey(property)
            ? [x[property]]
            : Object.values(x);

        return values.some((value) => {
            if (Array.isArray(value)) {
                return value.some((item) => String(item) === userInput);
            }

            return String(value) === userInput;
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