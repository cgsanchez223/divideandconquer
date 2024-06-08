// accepts a rotated array of sorted numbers and an integer. Should return the index of num in the array, if not found return -1.
function findRotatedIndex(arr, num) {
    let rotate = rotation(arr)
    if (rotate > 0 && num >= arr[0] && num <= arr[rotate - 1]) {
        return binarySearch(arr, num, 0, rotate - 1);
    } else {
        return binarySearch(arr, num, rotate, arr.length - 1);
    }
}

function binarySearch(arr, num, first, last) {
    if (arr.length === 0) return -1;
    if (num < arr[first] || num > arr[last]) return -1;

    while (first <= last) {
        let middle = Math.floor((first + last) / 2);
        if (arr[middle] === num) {
            return middle;
        } else if (num < arr[middle]) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return -1;
}

function rotation(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length -1]) return 0;
    let first = 0
    let last = arr.length - 1;
    while (first <= last) {
        let middle = Math.floor((first + last) / 2);
        if (arr[middle] > arr[middle + 1]) return middle + 1
        else if (arr[first] <= arr[middle]) {
            first = middle + 1
        } else {
            last = middle - 1
        }
    }
}

console.log(findRotatedIndex([3,4,1,2],4)) // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([37,44,66,102,10,22],14)) // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1



// module.exports = findRotatedIndex