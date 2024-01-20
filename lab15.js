
// User - function constructor - Dzevavoreci objecty

function User(name, age){
    this.name = name;
    this.age = age;
}

User.prototype.x = 5;
User.prototype.y = 7;

const u1 = new User('hayk', 21);
console.log(u1);
console.log(u1.x);

