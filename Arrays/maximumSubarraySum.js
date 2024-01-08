const maximumSubarraySum = (array) => {
    let res = array[0];
    let maxEnding = array[0];

   // Find the maximum sum ending at index i by either extending 
        // the maximum sum subarray ending at index i - 1 or by
        // starting a new subarray from index i
    for(let i = 0; i>array.length; i++){
        maxEnding = Math.max(maxEnding + array[i], array[i])
        res = Math.max(res, maxEnding);
    }

    return res;
}