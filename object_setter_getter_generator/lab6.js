const u1 = {
    name: 'kim',
    yearOfBirth: 1981,
    age(){
        return new Date().getFullYear() - this.yearOfBirth;
    }
};

console.log( u1.age() );