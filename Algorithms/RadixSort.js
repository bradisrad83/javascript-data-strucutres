function getDigit(number, place) {
    return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

function digitCount(number) {
    if(number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(numbers) {
    let maxDigits = 0;
    for(let i = 0; i < numbers.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(numbers[i]));
    }
    return maxDigits;
}

function radixSort(numbers) {
    let count = mostDigits(numbers);
    for(let i = 0; i < count; i++) {
        let buckets = Array.from({length: 10}, () => []);
        for(let j = 0; j < numbers.length; j++) {
            let digit = getDigit(numbers[j], i);
            buckets[digit].push(numbers[j]);
        }
        numbers = [].concat(...buckets);
    }
    return numbers;
}