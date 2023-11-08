// add whatever parameters you deem necessary
function averagePair(arr, target) {
  let mid = Math.floor(arr.length/2);
  if(arr[mid] > target){
    for(let num of arr.slice(0, mid)){
      if( ((num+arr[mid])/2) === target) return true
    }
    return false
  }

  if(arr[mid] < target){
    for(let num of arr.slice(mid)){
      if( ((num+arr[mid])/2) === target) return true
    }
    return false
  }
  return false
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 4))