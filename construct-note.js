// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  if(!letters) return false
  if(!msg) return true
  let map1 = {}
  let map2 = {}
  for(let char of msg){
    map1[char] = map1[char] + 1 || 1
  }
  for(let char of letters){
    map2[char] = map2[char] + 1 || 1
  }
  for(let key of Object.keys(map1)){
    if( ! (map1[key] <= map2[key]) ) return false
  }

  return true
}

module.exports = constructNote
