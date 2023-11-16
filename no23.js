Array-1 -- no23
Given an int array length 2, return true if it does not contain a 2 or 3.

Examples

no23([4, 5]) → true
no23([4, 2]) → false
no23([3, 5]) → false

function no23(arr){
    if(arr.length != 2){
    return "array must be equal to 2"
    }if(arr[0] !== 2 && arr[0] !== 3 && arr[arr.length-1] !== 2 && arr[arr.length-1] !== 3){
   return true 
    }return false
}console.log(no23([4, 5]));