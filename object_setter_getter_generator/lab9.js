// GETTER, SETTER

const u1 = {
    name: 'hayk',
    yearOfBirth: 1981,
    get age(){
        return new Date().getFullYear() - this.yearOfBirth;
    },
    set age(a){
        this.yearOfBirth = new Date().getFullYear() - a;
    }

};

console.log( u1.age ); // GET
u1.age = 21;    // SET

u1.yearOfBirth = 2010;
console.log( u1.age + 5 ); // 16