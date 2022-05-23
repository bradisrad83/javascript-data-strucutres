function maxSubarraySum(arr, num) {
    if(num > arr.length) return null;
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

function legnthOfLongestSubstring(str) {
    let max = 0;
    let start = 0;
    let set = new Set();
    for(let i = 0; i < str.length; i++) {
        while(set.has(s[i])) {
            set.delete(s[start]);
            start = start++;
        }
        set.add(s[i]);
        max = Math.max(max, i - start + 1);
    }
    return max;
}