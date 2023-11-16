Array-1 -- commonEnd
Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

Examples

commonEnd([1, 2, 3], [7, 3]) → true
commonEnd([1, 2, 3], [7, 3, 2]) → false
commonEnd([1, 2, 3], [1, 3]) → true

function commonEnd(a, b){
    let lenA = a.length;
  let lenB = b.length;
  if((a[0] === b[0] || a[lenA-1] === b[lenB-1]) && lenA >=1 && lenB >= 1){
  return true
  }return false
}console.log(commonEnd([1, 2, 3], [7, 3]));
