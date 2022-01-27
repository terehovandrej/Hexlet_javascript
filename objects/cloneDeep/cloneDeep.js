const data = {
    key: 'value',
    key2: 'value',
    key3: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};

// console.log(Object.entries(data))

function copy(aObject) {
    // Prevent undefined objects
    // if (!aObject) return aObject;

    let v;
    let bObject = Array.isArray(aObject) ? [] : {};
    for (const k in aObject) {

        // Prevent self-references to parent object
        // if (Object.is(aObject[k], aObject)) continue;

        v = aObject[k];
        bObject[k] = (typeof v === "object") ? copy(v) : v;
    }

    return bObject;
}

console.log(copy(data))
