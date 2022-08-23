// 1. Create a function that every time you invoke it, it will print out the message “Congrats you earn the chance!“, however it can only print out the message with the first 5 invokes. all the rest invokes will print out the message “Sorry you missed the chance” (run function once count as 1 invoke) (hint : using closure)
let callCount = 0;
function missChanceAfterFiveTries() {
    function earnChance() {
        callCount += 1;
        const str = "Congrats you earn the chance!";
        const str2 = "Sorry you missed the chance";
        if (callCount <= 5) {
            return str;
        } else {
            return str2;
        }
    }
    return earnChance();
};



// 2. Implement the callback function "longerThan" for : Array.filter(longerThan(minimumLength))  which takes minimumLength as a input and filter all the strings whose length is longer than minimumLength (hint : using currying) (edited) 
function curry(f) {
    return function (arr) {
        return function (minimumLength) {
            return f(arr, minimumLength);
        };
    };
}

function longerThan(arr, minimumlength) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < minimumlength) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let curriedLongerThan = curry(longerThan);

console.log(curriedLongerThan(["fsdf", "fdsavce", "fds", "vvcxvdg", "fvefe", "eovdd"])(6))

