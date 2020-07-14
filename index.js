// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
function longestSubstring(str,k){
  let substr=[];
for(let i=0;i<str.length;i++){
  for(let j=i;j<str.length;j++){
    substr.push(str.substring(i,j+1));
  }
}
// console.log(substr);
let distinctKArr=[];
for(let i=0;i<substr.length;i++){
  if(distinctK(substr[i])===k){
     distinctKArr.push(substr[i]);
  }
}
// console.log("distinct array=");
// console.log(distinctKArr);
let longestSubStr=distinctKArr[0];
for(let i=0;i<distinctKArr.length;i++){
  if(distinctKArr[i].length>longestSubStr.length){
    longestSubStr=distinctKArr[i];
  }
}
return longestSubStr;
}
function distinctK(str){
  // console.log(str);
  let result=[];
  for(let i=0;i<str.length;i++){
    if(result.indexOf(str[i])===-1){
      // console.log("not present");
      result.push(str[i]);
    }
  }
  // console.log("result =");
  // console.log(result);
  return result.length;
}
//console.log(distinctK("abcd"));
 console.log(longestSubstring("abcba",2));
