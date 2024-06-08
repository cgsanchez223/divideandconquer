// Returns the number of zeros in the array
function countZeroes(arr) {
  let zero = firstZero(arr)
  if (zero === -1) return 0;

  return arr.length - zero
}

function firstZero(arr, low = 0, high = arr.length -1) {
    if (high >= low) {
        let middle = low + Math.floor((high - low) / 2)
        if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] ===0) {
            return middle;
        } else if (arr[middle] === 1) {
            return firstZero(arr, middle + 1, high)
        }
        return firstZero(arr, low, middle - 1)
    }
    return -1;
}

// module.exports = countZeroes

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0