function frequencyCounter(arr) {
    const frequency = {};

    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
    }

    return frequency;
}

// Example usage:
const array = ['a', 'b', 'a', 'c', 'b', 'a', 'd'];
const result = frequencyCounter(array);
console.log(result); // Output: { a: 3, b: 2, c: 1, d: 1 }