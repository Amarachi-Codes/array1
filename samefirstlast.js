Array-1 -- sameFirstLast
Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

Examples

sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true

function sameFirstLast(nums){
    let len = nums.length;
    if(len >=1 && nums[0] === nums[len-1] ){
    return true
    }return false
  }console.log(sameFirstLast([1, 2, 3]));