/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, '')
    str2 = str2.toLowerCase().replace(/\s/g, '')

    if (str1.length !== str2.length){
        return false
    }

    let countChar = {}
    for (let char of str1){
        countChar[char] = (countChar[char] || 0) + 1
    }

    for(let char of str2){
        if(!countChar[char]){ 
            return false // will return false if char not in obj or char reappers in obj more than in str1 i.e countChar[count] is 0
        }
        countChar[char]--
    }

    return true


}

// function isAnagram2(str1, str2){
//     str1 = str1.toLowerCase().replace(/\s/g, '')
//     str2 = str2.toLowerCase().replace(/\s/g, '')

//     if (str1.length !== str2.length){
//         return false
//     }

//     let sortedStr1 = str1.split("").sort().join("")
//     let sortedStr2 = str1.split("").sort().join("")

//     return sortedStr1 === sortedStr2
// }


module.exports = isAnagram;
