function doubleArray(arr, callback) {
    const doubledArr = arr.map((num) => {
        return callback(num);
    });
    return doubledArr;
}

const originalArray = [1, 2, 3, 4];

function callback(num) {
    return num * 2;
}

// Use a different name for the variable to avoid conflict
const doubledArray = doubleArray(originalArray, callback);

console.log(doubledArray);  // Output: [2, 4, 6, 8]
