// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  let map = {}
  for(let key of keys){
    map[key] = values[0] != undefined ? values.shift() : null
  }
  return map;
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]))
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]))
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2]))