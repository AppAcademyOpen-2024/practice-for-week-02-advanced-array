/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/
function isVowel(letter) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(letter.toLowerCase());
}

function getLastVowelIndex(word) {
    for (let i = word.length - 1; i > 0; i--) {
        if (isVowel(word[i])) {
            return i;
        }
    }
    return null;
}

function removeLastVowel(word) {
    const index = getLastVowelIndex(word);
    return word.slice(0, index) + word.slice(index + 1, word.length);
}

let hipsterfy = function(sentence) {
    // Your code here
    const words = sentence.split(' ');
    return words.map((word) => removeLastVowel(word)).join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
