// GETTER
// name -property
// age() - method
// inchu - qani vor irenq gtnvum en objecti mej

const u1 = {
    name: 'hayk',
    yearOfBirth: 1981,
    get age(){
        return new Date().getFullYear() - this.yearOfBirth;
    }

};

console.log( u1.name ); // hayk
console.log( u1.yearOfBirth ); // 1981
console.log( u1.age ); // 40