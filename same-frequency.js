// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  let str1 = num1.toString()
  let str2 = num2.toString()

  let map1 = {}
  let map2 = {}

  for(let dig of str1){
    map1[dig] = map1[dig] +1 || 1
  }

  for(let dig of str2){
    map2[dig] = map2[dig] +1 || 1
  }

  for(let key of Object.keys(map1)){
    if( ! (map1[key] === map2[key]) ) return false
  }

  for(let key of Object.keys(map2)){
    if( ! (map2[key] === map1[key]) ) return false
  }

  return true
}

console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22,222))