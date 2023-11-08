// add whatever parameters you deem necessary
function countPairs(arr, target) {

  let results = [];

  let i = 0;
  let j = arr.length-1

  while(i < j){
    while(j > i){
      if(arr[i] + arr[j] === target){
        results.push([arr[i],arr[j]])
      }
      console.log(i, j)
      j--
    }
    j = arr.length-1
    i++
  }
  return results.length
}

console.log(countPairs([3,1,5,4,2], 6))
console.log(countPairs([10,4,8,2,6,0], 10))