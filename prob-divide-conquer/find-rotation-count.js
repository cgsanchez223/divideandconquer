// accepts am array of distinct numbers sorted in increasing order. The array has been roated counter-clockwise n number of times. Given such an array, find the value of n
function findRotationCount(arr, low = 0, high = arr.length -1) {
    if (high < low) return 0;
    if (high === low) return low;
    let middle = Math.floor((low + high) / 2)

    if (middle < high && arr[middle + 1] < arr[middle])
    return middle + 1;

    if (middle > low && arr[middle] < arr[middle -1]) {
        return middle;
    }

    if (arr[high] > arr[middle]) {
        return findRotationCount(arr, low, middle -1);
    }
    return findRotationCount(arr, middle + 1, high);
}

console.log(findRotationCount([15, 18, 2, 3, 6, 12])) // 2
console.log(findRotationCount([7, 9, 11, 12, 5])) // 4
console.log(findRotationCount([7, 9, 11, 12, 15])) // 0

// module.exports = findRotationCount