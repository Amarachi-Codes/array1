Array-1 -- middleWay
Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

Examples

middleWay([1, 2, 3], [4, 5, 6]) → 2,5
middleWay([7, 7, 7], [3, 8, 0]) → 7,8
middleWay([5, 2, 9], [1, 4, 5]) → 2,4

function middleWay(a, b){
    let newArray1 = [];
    let arr1 = a[1];
    let arr2 = b[1];
    for(let i = 0; i < (a,b).length; i++){
      if(a[i] === arr1 && b[i] === arr2){
        newArray1.push(a[i],b[i]);
      }
    }return newArray1;
  }console.log(middleWay([1, 2, 3], [4, 5, 6]));