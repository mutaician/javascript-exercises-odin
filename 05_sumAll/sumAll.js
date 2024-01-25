const sumAll = function(first_number, second_number) {
    if (typeof first_number != 'number' || typeof second_number != 'number'){
        return "ERROR"
    }
    if (first_number < 0 || second_number < 0){
        return "ERROR"
    }
    let start = first_number
    let end = second_number
    let sum = 0

    if (first_number > second_number){
        start = second_number
        end = first_number
    }
    for (let i = start; i <= end; i++){
        sum += i
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
