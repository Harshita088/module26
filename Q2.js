function manipulateString(inputString, callback) {
    const manipulateString = inputString.toUpperCase ();

    callback(manipulateString);
}

function logString(manipulateString) {
    console.log(`the manipulated string is : ${manipulateString}`);
}

manipulateString("hello world", logString);