function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(arr, indexOne, indexTwo) {
        let temp = arr[indexOne];
        arr[indexOne] = arr[indexTwo];
        arr[indexTwo] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;
    for(i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, swapIdx, start);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1 ) {
    if(left < right) {
         let pivotIndex = pivot(arr, left, right);
        //left 
        quickSort(arr, left, pivotIndex - 1);
        //right 
        quickSort(arr, pivotIndex + 1, right);   
    }
    return arr;
}