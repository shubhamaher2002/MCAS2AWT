//Que - Write a ECMA Script program that will return 1 if the array is sorted in ascending order, -1 if it is sorted in descending order or 0 if it is not sorted.
let SA = [12, 22, 29, 56, 65];
let SD = [65, 56, 45, 35, 25];
let US = [58, 85, 45, 95, 85, 31];

function checkArrSorted(arr) {
    let isAscending = true;
    let isDescending = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            isAscending = false;
        }
        if (arr[i] < arr[i + 1]) {
            isDescending = false;
        }
    }
    if (isAscending) {
        return 1;
    } else if (isDescending) {
        return -1;
    } else {
        return 0;
    }
}

console.log("\nArray is: [" + SA + "]\nThis is Sorted Ascending array. Hence, it is: " + checkArrSorted(SA));
console.log("\nArray is: [" + SD + "]\nThis is Sorted Descending array. Hence, it is: " + checkArrSorted(SD));
console.log("\nArray is: [" + US + "]\nThis is Unsorted array. Hence, it is: " + checkArrSorted(US));
