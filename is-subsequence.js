// add whatever parameters you deem necessary
function isSubsequence(sub, str) {

  let map = {}
  for(let i = 0; i < str.length; i++){
    if(map[str[i]]){
      map[str[i]].push(i)
    }
    else{
      map[str[i]] = [i]
    }
  }

  let min = 0;
  for(let char of sub){
    if(map[char]){
      current = map[char].shift()
      if(current >= min){
        min = current
      } else {
        return false
      }
    }else {
    return false
    }
  }

  return true;

}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))