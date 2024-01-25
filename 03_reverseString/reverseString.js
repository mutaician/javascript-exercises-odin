const reverseString = function(word) {
    let array_word = word.split("")
    array_word.reverse()
    let reversed_word = array_word.join('')
    return reversed_word
};

// Do not edit below this line
module.exports = reverseString;
