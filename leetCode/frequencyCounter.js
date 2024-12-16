function frequencyCounter(arr) {
    const frequency = {};
    let maxNumber = 0;
    let maxKey = '';

    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
    }
    
    for(const key in frequency) {
        // maxNumber = frequency[key];
        // maxKey = key
        if(maxNumber < frequency[key]) {
           maxNumber = frequency[key];
           maxKey = key
        }
    }
    return maxKey;
}

// Example usage:
const array = ['a', 'b', 'b', 'c', 'b', 'a', 'b'];
const result = frequencyCounter(array);
console.log(result); // Output: { a: 3, b: 2, c: 1, d: 1 }