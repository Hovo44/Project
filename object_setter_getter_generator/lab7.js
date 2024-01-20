// GETTER

const u1 = {
    name: 'kim',
    yearOfBirth: 1981,
    get age(){
        return new Date().getFullYear() - this.yearOfBirth;
    }
};

console.log( u1.name );// hayk
console.log( u1.yearOfBirth ); // 1981
console.log( u1.age ); // 40