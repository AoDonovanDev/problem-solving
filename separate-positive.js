// add whatever parameters you deem necessary
function separatePositive(arr) {
  let i = 0;
  let j = arr.length-1;

  while(j > i){
    if(arr[j] > 0){
      while(arr[i] > 0){
        i++
      }
      if(j < i) break
      let temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
      console.log(arr)
    }
    console.log(i, j)
    j--
  }
  

  return arr
}

console.log(separatePositive([2, -1, -3, 6, -8, 10]))
console.log(separatePositive([5, 10, -15, 20, 25]))