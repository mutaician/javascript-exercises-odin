const palindromes = function (word) {
    let clean_word = word.toLowerCase().replaceAll(/[ !,.]/g, '');
    let word_chars = clean_word.split('').reverse()
    reversed_word = word_chars.join('')
    return reversed_word == clean_word

};

// Do not edit below this line
module.exports = palindromes;
