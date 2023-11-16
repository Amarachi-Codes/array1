Array-1 -- has23
Given an int array length 2, return true if it contains a 2 or a 3.

Examples

has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false

function has23(arr){
    if(arr < 2){
      return "array length must be 2";
       }
    
       if(arr[0] === 2 || arr[0] === 3 || arr[arr.length-1] ===2 || arr[arr.length-1] ===3){
       return true;
       }
       return false;
       
     }console.log(has23([2, 5]));
     