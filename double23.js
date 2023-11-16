Array-1 -- double23
Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

Examples

double23([2, 2]) → true
double23([3, 3]) → true
double23([2, 3]) → false


function double23(arr){
    if(arr == 0){
      return false
    }else 
  for(let i =0; i<=2; i++){
    if(arr[0] === arr[1]){ 
      return true;
    }return false;
  }
}console.log(double23([2, 2]));