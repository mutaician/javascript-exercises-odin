const fibonacci = function(count) {
    if (count < 0) return 'OOPS'
    if (count == 0) return 0
    let prev = 0;
    let next = 1;
    for (let i = 2; i <= count; i++){
        let current = prev + next;
        prev = next;
        next = current;
    }
    return next
};

// Do not edit below this line
module.exports = fibonacci;
