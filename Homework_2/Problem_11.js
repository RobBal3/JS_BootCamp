// 11) Given a string s and an array of strings words, determine whether s is a prefix string of words.
//
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
//
// Return true if s is a prefix string of words, or false otherwise.

function isPrefix(s, words) {
  let s1 = s.split("");
  let s2 = words.join("").split("");

  //   console.log(s1, s2);

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      return false;
    }
  }
  return true;
}

console.log(isPrefix("iloveleetcode", ["i", "love", "leetcode", "apples"]));
