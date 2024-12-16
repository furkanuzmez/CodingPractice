function generateSubsets(nums) {
    const result = [];

    function backtrack(index, currentSubset) {
        // Save the current subset
        result.push([...currentSubset]);

        for (let i = index; i < nums.length; i++) {
            // Add the current number
            currentSubset.push(nums[i]);
            console.log(`Pushed ${nums[i]}:`, currentSubset);

            // Explore deeper
            backtrack(i + 1, currentSubset);

            // Remove the last number (backtrack)
            currentSubset.pop();
            console.log(`Popped ${nums[i]}:`, currentSubset);
        }
    }

    backtrack(0, []);
    return result;
}

console.log(generateSubsets([1, 2]));
