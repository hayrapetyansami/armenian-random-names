import {makeName, makeLastName} from './make';

export const app = (count, maxAge, minAge) => {

    function makeAge () {
        return Math.floor(Math.random() * (maxAge + 1 - minAge) + minAge);
    }

    const namesDB = [];
    
    for (let x = 0; x < count; x++) {
        namesDB.push({
            name: makeName(),
            lastname: makeLastName(),
            age: makeAge ()
        })
    }

    console.log(namesDB)
}
