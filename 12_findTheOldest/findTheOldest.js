const findTheOldest = function(people) {
    let age = 0
    let oldest_person = {}

    for (person of people){
        let birth_year = person.yearOfBirth
        let end_year = person.yearOfDeath || new Date().getFullYear()
        let person_age = end_year - birth_year
        if (person_age > age ){
            age = person_age
            oldest_person = person
        }
    }
    return oldest_person

};

// Do not edit below this line
module.exports = findTheOldest;
