const getTheTitles = function(books_array) {
    const titles =  books_array.map(book => book['title'])
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
