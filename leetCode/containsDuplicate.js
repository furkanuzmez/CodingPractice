/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let  nonDuplicated = Array.from(new Set([...nums]));


    if(nonDuplicated.length == nums.length){
        return false
    }
    else { 
        return true
    }
};